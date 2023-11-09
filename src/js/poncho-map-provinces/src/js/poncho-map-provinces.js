/**
 * PONCHO MAP
 *
 * @summary Assets para configrar poncho map con un geoJSON de provincias.
 *
 * @author Agustín Bouillet <bouilleta@jefatura.gob.ar>
 *
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2023 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rightsto use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


const PONCHOMAP_GEOJSON_PROVINCES = "https://www.argentina.gob.ar/"
        + "profiles/argentinagobar/"
        + "themes/contrib/poncho/resources/jsons/" 
        + "geo-provincias-argentinas.json";


/**
 * Junta el geoJSON con el JSON de Google Sheet
 * 
 * @param {object} geoProvinces GeoJSON
 * @param {object} entries JSON con entradas por provincia.
 * @returns {object}
 */
const ponchoMapProvinceMergeData = (geoProvinces={}, entries={}, 
                                    provinceIndex="provincia") => {
    
    geoProvinces.features.forEach((feature, key) => {
        const jsonEntry = entries.find(entry => 
            (entry[provinceIndex] == feature.properties.fna ||
            entry[provinceIndex] == feature.properties.nam)
        );

        // Si no existe la provincia en el JSON, borra el feature.
        if(!jsonEntry && feature.properties.fna){
            delete geoProvinces.features[key];
            return;
        }

        // Si hay definido un key _color_, usa el color en el fill.
        if(jsonEntry?.color && !feature.properties["pm-type"]){
            geoProvinces
                .features[key]
                .properties.stroke = ponchoColor(jsonEntry.color);
        }

        // Remuevo la propiedad interactive del json para que no se interponga
        // con el valor del geoJSON.
        if(feature.properties["pm-interactive"] === "n" && 
                    jsonEntry?.["pm-interactive"] !== "n"){
            delete jsonEntry["pm-interactive"];
        }

        Object.assign(geoProvinces.features[key].properties, jsonEntry);
    });
    return geoProvinces;
};


class PonchoMapProvinces extends PonchoMapFilter {
    constructor(geoProvinces, entries, options){
        
        const defaultOptions = {
            initialEntry: false, 
            randomEntry: false,
            imageUrl:'https://www.argentina.gob.ar/sites/default/files/map-shadow.png',
            imageBounds: [
                [-20.56830872133435, -44.91768177759874],
                [-55.861359445914566, -75.2246121480093]
            ],
            mapView:[-40.47815508388363,-60.0045383246273],
            hideSelect: true,
            provinceIndex: "provincia",
            // Sobre escribo opciones de PonchoMap
            map_init_options: {
                zoomSnap: .2,
                zoomControl: true,
                doubleClickZoom: false,
                scrollWheelZoom: false,
                boxZoom: false
            },
            map_zoom: 4.4,
            tooltip_options:{
                permanent: false,
                className: "leaflet-tooltip-own",
                direction: "auto",
                offset: [0, -3], 
                sticky: true,
                opacity: 1,
            },
            tooltip: true,
            slider: true
        };
        // Merge options
        let opts = Object.assign({}, defaultOptions, options);
        
        // PonchoMapFilter instance
        const mergedJSONs = ponchoMapProvinceMergeData(
            geoProvinces, entries, opts.provinceIndex);
        super(mergedJSONs, opts); 
        this.initialEntry = opts.initialEntry; 
        this.randomEntry = opts.randomEntry;
        this.imageUrl = opts.imageUrl;
        this.imageBounds = opts.imageBounds;
        this.mapView = opts.mapView;
        this.hideSelect = opts.hideSelect;
    }


    /**
     * Aplica los estilos en el <head>
     * @returns {undefined}
     */
    _cssStyles = () => {
        if(this.hideSelect){
            return;
        }
        const s = document.querySelectorAll(
            ".poncho-map-province__toggle-map,.poncho-map-province__toggle-element");
        s.forEach(element => {
            element.classList.remove(
                "poncho-map-province__toggle-map",
                "poncho-map-province__toggle-element"
            ); 
        });
    };


    /**
     * Ordena un array por uno de sus keys.
     * @param {object} obj Objeto a ordenar.
     * @param {integer} key Posición del array.
     * @param {object} obj Objeto ordenado.
     */
    sortObject = (obj, key=0) => obj.sort((a, b) => {
        const valA = a[key].toUpperCase();
        const valB = b[key].toUpperCase();
        if (valA > valB) {
            return 1;
        }
        if (valA < valB) {
            return -1;
        }
        return 0;
    });


    /**
     * Retorna un valor aleatório.
     * @param {object} list Listado de provincias
     * @returns {object}
     */
    _randomEntry = list => {
        return list[Math.floor(Math.random()*list.length)][0];
    };


    /**
     * Retorna un array con clave y valor de provincias argentinas
     * @param {object} geoJSON Objeto geoJSON con los features por provincia
     * @param {string} idKey Key del propertie que se usa como id.
     * @returns {object}
     */
    _provincesFromGeoJSON = (geoJSON, idKey) => {
        let prov = {};
        geoJSON.features.map(p => {
            const {
                name=false,
                "pm-interactive":pmInteractive=false} = p.properties;

            if(pmInteractive === "n" || !name){
                return false;
            }
            prov[p.properties[idKey]] = name;
        }).filter(f => f);
        
        let provincesToList = this.sortObject( Object.entries(prov), 1);
        return provincesToList;
    };


    /**
     * Imprime la región según las opciones de precedencia.
     * @param {string} prov Id de provincia
     * @returns {undefined}
     */
    _selectedEntry = prov => {
        const hash = window.location.hash.replace("#", "");
        let selected = "";
        if(hash){
            selected = hash;
        } else if(this.initialEntry){
            selected = this.initialEntry;
        } else if(this.randomEntry){
            selected = this._randomEntry(prov);
        }
        return selected;
    }


    /**
     * Crea los options para el select de provincias
     * @param {object} map 
     * @returns {object}
     */
    _setSelectProvinces = map => {
        const hash = window.location.hash.replace("#", "");
        const prov = this._provincesFromGeoJSON(map.geoJSON, map.id);
        const selected = this._selectedEntry(prov);

        // Creo los options
        const selectProvinces = document.getElementById("id_provincia");
        const optionsSelect = [["", "Seleccione una provincia"], ...prov];
        optionsSelect.forEach(province => {
            const option = document.createElement("option");

            if(province[0] === selected){
                option.setAttribute("selected", "selected");
            }
            option.value = province[0];
            option.textContent = province[1];
            selectProvinces.appendChild(option);
        });
        return {object: selectProvinces, selected: selected};         
    };


    /**
     * Selected option cuando selecciono un polígono
     * @param {object} map Objeto return ponchoMap 
     */
    _selectedPolygon = map => {
        map.map.eachLayer(layer => {
            layer.on("keypress click", (e) => {
                if( e?.target?.feature?.properties ){
                    const {id} = e.target.feature.properties;
                    document.getElementById("id_provincia").value = id;
                }
            });
        })
    }


    /**
     * Crea el listener para la interacción del select con el mapa.
     * @param {object} map 
     */
    selectProvinces = map => {
        this._selectedPolygon(map);

        // Arma el select con las provincias
        const selectProvinces = this._setSelectProvinces(map);

        if(selectProvinces.selected){
            map.gotoEntry(selectProvinces.selected)
        }
        
        // cambia los datos de la provincia 
        selectProvinces.object.addEventListener("change", e => {
            map.gotoEntry(e.target.value);
            e.value = selectProvinces.selected
        });
    };


    /**
     * imprime el mapa
     */ 
    renderProvinceMap = () =>{
        this._cssStyles();
        // Agrega una imagen de fondo
        L.imageOverlay(
            this.imageUrl, this.imageBounds, {opacity: 0.8}
        ).addTo(this.map);  
        this.render(); // Imprime PonchoMapsFilter
        this.fitBounds(); // Ajusta el mapa a sus border. *Opcional.
        this.selectProvinces(this); // Controla el select de las provincias.
    };
}
// end class