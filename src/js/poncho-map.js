/**
 * PONCHO MAP
 * 
 * @summary Generador de mapas utilizando OpenStreetMap / leafleft
 * 
 * @author Agustín Bouillet bouilleta@jefatura.gob.ar, august 2022
 * @requires leaflet.js,leaflet.markercluster.js,leaflet.css,
 * MarkerCluster.Default.css,MarkerCluster.css
 * @see https://github.com/argob/poncho/blob/master/src/demo/poncho-maps/readme-poncho-maps.md
 * 
 * 
 * MIT License
 *
 * Copyright (c) 2022 Argentina.gob.ar
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class PonchoMap {
  constructor(data, options){
    // Confs
    const defaults = {
        "title": false,        
        "id": "id",
        "template": false,
        "template_structure": {},
        "template_container_class_list":["info-container"],
        "template_title_class_list":["h4","text-primary","m-t-0"],
        "template_dl_class_list":["definition-list"],
        "template_innerhtml": false,
        "template_markdown": false,
        "template_header": false,
        "template_dl": "dl",
        "template_dt": "dt",
        "template_dd": "dd",
        "markdown_options": {
            extensions :[
                "images", 
                "alerts", 
                // "numbers", 
                // "ejes", 
                "button", 
                "target",
                // "bootstrap-tables",
                "video"
            ]
        },
        "scope": "",
        "slider": false,
        "scroll": false,
        "hash": false,
        "headers": {},
        "map_selector": "map",
        "anchor_delay":0,
        "slider_selector": ".slider",
        "map_view": [-40.44, -63.59],
        "map_anchor_zoom":16,
        "map_zoom":4,
        "reset_zoom":true,
        "latitud":"latitud",
        "longitud":"longitud",
        "marker": "azul",
        "marker_cluster_options": {
            "spiderfyOnMaxZoom": false,
            "showCoverageOnHover": false,
            "zoomToBoundsOnClick": true,
            "maxClusterRadius": 45,
            "spiderfyDistanceMultiplier": 0.1,
            "spiderLegPolylineOptions": {
                "weight": 1,
                "color": "#666",
                "opacity": 0.5,
            }
        }
    };
    let opts = Object.assign({}, defaults, options);
    this.scope = opts.scope;
    this.template = opts.template;
    this.template_structure = opts.template_structure;
    this.template_title_class_list = opts.template_title_class_list;
    this.template_dl_class_list = opts.template_dl_class_list;
    this.template_container_class_list = opts.template_container_class_list;
    this.template_innerhtml = opts.template_innerhtml;
    this.template_markdown = opts.template_markdown;
    this.markdown_options = opts.markdown_options;
    this.template_header = opts.template_header;
    this.template_dl = opts.template_dl;
    this.template_dt = opts.template_dt;
    this.template_dd = opts.template_dd;
    this.map_selector = opts.map_selector;
    this.headers = opts.headers;
    this.hash = opts.hash;
    this.scroll = opts.scroll;
    this.map_view = opts.map_view;
    this.anchor_delay = opts.anchor_delay;
    this.map_zoom = opts.map_zoom;
    this.map_anchor_zoom = opts.map_anchor_zoom;
    this.marker_cluster_options = opts.marker_cluster_options;
    this.marker_color = opts.marker;
    this.id = opts.id;
    this.title = opts.title;
    this.latitud = opts.latitud;
    this.longitud = opts.longitud;
    this.slider = opts.slider;
    this.reset_zoom = opts.reset_zoom;
    this.slider_selector=this.selectorName(opts.slider_selector);
    this.selected_marker;
    this.scope_selector = `[data-scope="${this.scope}"]`;
    this.scope_sufix = `--${this.scope}`;
    // genero los id
    this.data = this.setIdIfNotExists(data);
    // OSM
    this.map = new L.map(this.map_selector,{preferCanvas: false})
        .setView(this.map_view, this.map_zoom);
    new L.tileLayer(
        "https://gis.argentina.gob.ar/osm/{z}/{x}/{y}.png", 
        { 
          attribution: ("&copy; Contribuidores "
              + "<a href=\"https://www.openstreetmap.org/copyright\">" 
              + "OpenStreetMap</a>")
        }
    ).addTo(this.map);
    this.markers = new L.markerClusterGroup(this.marker_cluster_options);
  }

  /**
  * JSON input
  * @return {object}
  */
  get entries(){
    return this.data;
  }

  /**
   * Validador de latitud y longitud.
   * 
   * @param {float} latlng - Latitud o Longitud.
   * @return {boolean}
   * @todo Pasar éste método a una función general de utilidades.
   */
  validateLatLng = (latlng) => {
      let latlngArray = latlng.toString().split(",");
      for(let i = 0; i < latlngArray.length; i++) {
          if(isNaN(latlngArray[i]) || latlngArray[i] < -127 || latlngArray[i] > 75){
            return false;
          }
          return true;
      }
  };

  /**
   * Slugify
   * 
   * @param {string} string Cadena de texto a convertir 
   * @returns {string}
   * @todo Pasar éste método a una función general de utilidades.
   */
  slugify = (string) => {
      const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
      const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
      const p = new RegExp(a.split('').join('|'), 'g')
    
      return string.toString().toLowerCase()
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
          .replace(/&/g, '-and-') // Replace & with 'and'
          .replace(/[^\w\-]+/g, '') // Remove all non-word characters
          .replace(/\-\-+/g, '-') // Replace multiple - with single -
          .replace(/^-+/, '') // Trim - from start of text
          .replace(/-+$/, '') // Trim - from end of text
  }

  /**
   * Remueve acentos y caracteres especiales.
   * @param {string} data - cadena de texto a limpiar. 
   * @returns {string}
   * @todo Pasar éste método a una función general de utilidades.
   * 
   * >>> removeAccents("Acción Murciélago árbol")
   * Accion murcielago arbol
   */
  removeAccents = (data) => {
      if(!data){
          return "";
      }
      return data
          .replace(/έ/g, "ε")
          .replace(/[ύϋΰ]/g, "υ")
          .replace(/ό/g, "ο")
          .replace(/ώ/g, "ω")
          .replace(/ά/g, "α")
          .replace(/[ίϊΐ]/g, "ι")
          .replace(/ή/g, "η")
          .replace(/\n/g, " ")
          .replace(/[áÁ]/g, "a")
          .replace(/[éÉ]/g, "e")
          .replace(/[íÍ]/g, "i")
          .replace(/[óÓ]/g, "o")
          .replace(/[Öö]/g, "o")
          .replace(/[úÚ]/g, "u")
          .replace(/ê/g, "e")
          .replace(/î/g, "i")
          .replace(/ô/g, "o")
          .replace(/è/g, "e")
          .replace(/ï/g, "i")
          .replace(/ü/g, "u")
          .replace(/ã/g, "a")
          .replace(/õ/g, "o")
          .replace(/ç/g, "c")
          .replace(/ì/g, "i");
  };

  /**
   * Crea una entrada ID autonomerada si no posee una.
   * 
   * @summary Verifica si en las claves existe una posición asignada
   * a id, si no la tuviera genera una automáticamente. Por otro lado, 
   * si el usuario asoció una columna a la opción ID de la configuración, 
   * usa esa.
   * @param {object} entries
   * @return {object} 
   */
  setIdIfNotExists = (entries) => {
    // chequeo si tiene ID
    const has_id = entries.filter((v,k) => k===0).every(e => e.hasOwnProperty('id'));
    if(!has_id){
      const new_entries = entries.map(
          (v,k) => {
              const auto_id = k + 1;
              const use_title = (this.title ? 
                    `-${this.slugify(v[this.title])}` : '');
              return ({
                  ...{"id": `${auto_id}${use_title}`},
                  ...v});
          });
        return new_entries;
    }
    return entries;
  }

  /**
   * Agrega el hash en la barra de url.
   * @param {string|integer} value 
   */
  addHash = (value) => {
      window.location.hash = `#${value}`;
  }

  /**
  * Obtiene una entrada por su id
  * @property {integer} id - Id de Punto Digital
  * @return {object}
  */
  entry = (id) => {
      return this.entries.find(v => v[this.id]==id);
  }

  /**
   * Busca un término en un listado de entradas.
   * @param {string} term - término a buscar.
   * @returns {object} - listado filtrado por los match
   */
  searchEntry = (term, dataset) => {
      dataset = (typeof dataset === "undefined" ? this.entries: dataset);
      if(!term){
          return dataset;
      }
      const entries = dataset.filter(e => {
        if(this.searchTerm(term, e)){
            return e;
        };
      })
      return entries;
  };

  /**
   * Busca un término en cada uno de los indices de una entrada.
   */
  searchTerm = (search_term, data) => {
      // [text] es solo por si se usa select2
      const search_for = [...["text"], ...this.search_fields].filter(e => e);
      for(const item of search_for){
        if(!data.hasOwnProperty(item)){
            continue;
        }
        const term = this.removeAccents(search_term).toUpperCase();
        const field = this.removeAccents(data[item]).toString().toUpperCase();
        try {
            if(field.includes(term)){
                return data;
            }
        } catch (error) {
            console.error(error);
        }
      }
      return null;
  };

  /**
   * Quita la definición a un selector.
   * 
   * @param {string} selector - Selector a quitarle la definición.
   * @return {string}
   * 
   * >>> selectorName(".foo")
   * "foo"
   * >>> selectorName("#foo")
   * "foo"
   */
  selectorName = (selector) => {
    return selector.replace(/^(\.|\#)/, "");
  };

  /**
   * Acomoda la pantalla ubicando el mapa en el borde superior del
   * navegador.
   */
  scrollCenter = () => {
    const pos = document.getElementById(this.map_selector);
    const rect = pos.getBoundingClientRect();
    const pos_center_horizontal = (pos.offsetLeft + pos.offsetWidth) / 2;
    const pos_center_vertical =  rect.top + window.scrollY;
    window.scrollTo({
        top: pos_center_vertical,
        left: pos_center_horizontal,
        behavior: "smooth"
    });
  };

  /**
   * Limpia el contenido.
   */
  clearContent = () => document
        .querySelector(`.js-content${this.scope_sufix}`).innerHTML = "";

  /**
   * Abre o cierra el slider.
   */
  toggleSlider = () =>{ 
      document
          .querySelector(`.js-slider${this.scope_sufix}`)
          .classList.toggle(`${this.slider_selector}--in`);
    
      const panel = document.querySelector(`.js-slider${this.scope_sufix}`);
      if(this.isSliderOpen()){
          panel.style.display = "block";
      } else {
          panel.style.display = "none";
      }
  }

  /**
   * Ejecuta toggleSlider en el onclick
   */
  clickToggleSlider = () => document
        .querySelectorAll(`.js-close-slider${this.scope_sufix}`)
        .forEach(e => e.addEventListener("click", () => {
              this.clearContent();
              this.toggleSlider();
        }
  ));

  /**
   * Estado del slider.
   * 
   * @return {boolean} - ture si esta abierto, false si esta cerrado.
   */
  isSliderOpen = () => document
        .querySelector(`.js-slider${this.scope_sufix}`)
        .classList.contains(`${this.slider_selector}--in`);

  /**
   * Imprime la información del Punto Digital en el slider.
   * 
   * @return {string} - HTML del contenido del slider.
   */
  setContent = (data) => {
    this.focusOnSlider();
    if(!this.isSliderOpen()){
        this.toggleSlider();
    }

    const html = (typeof this.template == "function") ? 
          this.template(this, data) : this.defaultTemplate(this, data);
    document.querySelector(`.js-content${this.scope_sufix}`)
            .innerHTML = html;
    
  };

  /**
   * Hace foco en el slider cuando se hace click o keypress sobre un
   * marker. La idea es que un usuario con lector de pantalla mueva el
   * foto a la información.
   */
  focusOnSlider = () => {
      if(this.isSliderOpen()){
          document
              .getElementById(`js-anchor-slider${this.scope_sufix}`).focus();
      } else {
          const animation = document
              .querySelector(`.js-slider${this.scope_sufix}`);
          animation.addEventListener("animationend", () => {
              document
                  .getElementById(`js-anchor-slider${this.scope_sufix}`)
                  .focus();
          });
      }
  };

  /**
   * Mapea los headers.
   * 
   * @return {string} key - key del item.
   */
  header = (key) => {
    return (this.headers.hasOwnProperty(key) ? this.headers[key] : key);
  };

  /**
   * Crea el bloque html para el slider.
   */
  renderSlider = () => {
    // Remuevo el slider
    document.querySelectorAll(`.js-slider${this.scope_sufix}`)
            .forEach(e => e.remove());

    // Creo el slider
    const close_button = document.createElement("button");
    close_button.classList.add("btn", "btn-xs", "btn-secondary", "btn-close", 
                              `js-close-slider${this.scope_sufix}`);
    close_button.title = "Cerrar panel";
    close_button.setAttribute("role", "button");
    close_button.setAttribute("aria-label", "Cerrar panel de información");
    close_button.innerHTML = "<span class=\"sr-only\">Cerrar</span>✕";

    const anchor = document.createElement("a");
    //anchor.href = "#";
    
    anchor.setAttribute("tabindex", "3");
    anchor.id = `js-anchor-slider${this.scope_sufix}`;

    const content_container = document.createElement("div");
    content_container.classList.add("content-container");

    const content = document.createElement("div");
    content.classList.add("content", `js-content${this.scope_sufix}`);
    content_container.appendChild(content);

    const container = document.createElement("div");
    container.style.display = "none";
    // container.id = `js-anchor-slider${this.scope_sufix}`;
    container.setAttribute("role", "region");
    container.setAttribute("aria-live", "polite");
    container.setAttribute("aria-label", "Panel de información");
    container.classList.add("slider",`js-slider${this.scope_sufix}`);
    container.id = `slider${this.scope_sufix}`;
    container.appendChild(close_button);
    container.appendChild(anchor);
    container.appendChild(content_container);
    document.querySelector(`${this.scope_selector}.poncho-map`)
        .appendChild(container);
  };

  /**
   * Proyecta el slider y hace zoom en el marker.
   */
  showSlider = (layer, item) => {
    this.map.setView(
        [item[this.latitud], item[this.longitud]], this.map_anchor_zoom
    );
    layer.fireEvent("click");
  };

  /**
   * Proyecta el popUp y hace zoom en el marker.
   */
  showPopup = (layer) => {
    this.markers.zoomToShowLayer(layer, () => {
      layer.__parent.spiderfy();
      layer.openPopup();
    });
  };

  /**
   * Borra el hash de la url
   * @returns {void}
   */
  removeHash = () => history.replaceState(null, null, ' ');

  /**
   * Si la URL tiene un valor por hash lo obtiene considerandolo su id.
   * @returns {void}
   */
  hasHash = () => {
    let id = window.location.hash.replace("#", "");
    return id || false;
  };

  /**
   * Obtiene un hash, hace zoom sobre el marker y abre su popUp o 
   * el slider.
   */
  gotoHashedEntry = () => {
    let id = this.hasHash();
    if(!id){
        return; 
    }
    
    this.gotoEntry(id);
  };

  /**
   * Muestra un marker pasándo por parámetro su id.
   * @param {string|integer} id - valor identificador del marker. 
   */
  gotoEntry = (id) => {
      const entry = this.entry(id);
      this.markers.eachLayer(layer => {
        if(layer.options.id == id){
          // seteo el marker activo porque se produzco sin un clic.
          this.setSelectedMarker(id, layer);

          if(this.hash){
              this.addHash(id);
          }

          if(this.slider && this.hash){
              this.showSlider(layer, entry);
          } else {
              this.showPopup(layer);
          }
        }
      });
  };

  /**
   * Setea los markers para ejecutarse en un evento onlick
   * @TODO Usar un método para escapar el error cuando no encuentra la
   * propiedad classList.
   */
  clickeableMarkers = () => {
    this.markers.eachLayer(layer => {
      layer.on("keypress click", (e) => {

        document.querySelectorAll(".marker--active")
                .forEach(e => e.classList.remove("marker--active"))
        try {
          e.sourceTarget._icon.classList.add("marker--active");
        } catch (error) {
          // console.error(error);
        }
        const content = this.entries.find(e => e[this.id]==layer.options.id);
        this.setContent(content);
      });
    });
  };

  /**
   * Setea los markers para ejecutarse en un evento onlick
   */   
  urlHash = () => {
      this.markers.eachLayer(layer => {
          layer.on("click", (e) => {
            this.addHash(layer.options.id);
          });
      });
  };

  /**
   * Remueve un elemento de una lista.
   * @param {object} list Array de elementos
   * @param {string} key Elemento a remover 
   */
  removeListElement = (list, key) => {
    const index = list.indexOf(key);
    if(index > -1){
      list.splice(index,1);
    }
    return list;
  };

  /**
   * Titulo para el default template
   * 
   * @summary El título puede tener un formato por defecto, tomando el
   * índice de la entrada seleccionada a tal fin en this.title, cuya
   * asignación es general y se utiliza para otras propiedades como:
   * texto alterantivo de los markers o title de un marker.
   *     También se puede especificar un title particular en la entrada
   * `template_structure.title`, ésta opción se ofrece como una 
   * alternativa que puede estar dada por el formato en el texto u
   * otras características consideradas por el editor. 
   *     Por último puede recibir de: this.template_header, una función
   * que retorne un html en formato string. Es importante tener en cuenta
   * que el uso de markdown y la insersión directa de html puedo producir
   * una vulnerabilidad XSS, tenga a bien asignar cuidadosamente el 
   * uso de estas opciones. 
   * @see https://showdownjs.com/docs/xss/#strip-html-tags-is-not-enough
   * @param {object} row Entrada 
   */
  templateTitle = (row) => {
    const structure = this.template_structure;
    const structure_title = (structure.hasOwnProperty("title") ? 
          structure.title: false);
    const optons_title = (this.title ? this.title : false);
    
    // si intencionalmente no se quiere usar el titulo y se 
    // agrega la opción `false` en `template_structure.title`. 
    if(structure.hasOwnProperty("title") && typeof structure.title == "boolean"){
        return false;
    } 
    // Si los dos son false, retorno false
    else if(!structure_title && !optons_title){
        return false;
    }
    // Defino el title que voy a usar.
    // template_structure.title tiene precedencia
    const use_title = (structure_title ? structure_title : optons_title);
    
    let title;
    if(this.template_header){
        const wrapper = document.createElement("div");
        wrapper.innerHTML = this.mdToHtml(this.template_header(this, row));
        title = wrapper;
    } else {
        title = document.createElement("h1");
        title.classList.add(... this.template_title_class_list);
        title.textContent = row[use_title];
    }

    const header = document.createElement("header");
    header.className = "header";
    header.appendChild(title);
    return header;
  };

  /**
   * Listado de keys para mostrar en una entrada del default template.
   * 
   * @summary Si el usuario configuró los valores en 
   * `template_structure.values` o `template_structure.exclude` se obtiene
   * el listado de índices, consideranto `values` con presedencia ante
   * `exclude` y retorna el objeto que se utilizará en `defaultTemplate()`.
   * @param {object} row — Entrada de datos.
   * @return {object} Listado de índices seleccionados de la entrada.
   */
  templateList = (row) => {
    const estructura = this.template_structure;
    let lista = Object.keys(row);

    let list = lista;
    if(estructura.hasOwnProperty("values") && estructura.values.length > 0){
        list = estructura.values;
    } else if(estructura.hasOwnProperty("exclude") && estructura.exclude.length > 0){
        for(const key of estructura.exclude){
            list = this.removeListElement(lista, key);
        }
    }

    return list;
  };

  /**
   * Convierte un texto a MarkDwon usando la librería showdown.
   * 
   * @summary Pregunta si está incluida la librería showdown. Si está
   * la usa y convierte el string, caso contrario retorna la entrada
   * sin procesar.
   * @param {string} text - Texto a convertir 
   * @returns {string}
   * @see https://showdownjs.com/
   */
  mdToHtml = (text) => {
      if(this.template_markdown && this.markdownEnable()){
          const converter = new showdown.Converter(this.markdown_options);
          return converter.makeHtml(`${text}`.trim());
      }
      return text;
  }

  /**
   * Showdown habilitado.
   * 
   * Verifica si la librería _showdown_ está disponible.
   * @returns {boolean}
   */
  markdownEnable = () => {
      if(typeof showdown !== "undefined" && 
        showdown.hasOwnProperty("Converter")){
            return true;
      }
      return false;
  } 

  /**
   * Si el usuario usó la opción mixing reformulamos la entrada.
   * 
   * @summary La opción mixing, permite concatenar el valor de los
   * índices de la entrada asignados en el índice 
   * `template_structure.mixing.values`, utilizando como separador una
   * cadena de texto asignada en el índice `template_structure.mixing.separator`
   * @param {object} row - Entrada del json 
   * @returns {object}
   */
  templateMixing = (row) => {
      if(this.template_structure.hasOwnProperty("mixing") && 
        this.template_structure.mixing.length > 0){
            const mixing = this.template_structure.mixing;

            let new_row = {}; 
            mixing.forEach(element => {
                const {values, separator = ", ", key} = element;
                if(typeof key === "undefined"){
                  throw 'Mixing requiere un valor en la variable «key».';
                }
                new_row[key] = values
                      .map(i => row[i])
                      .filter(v => v)
                      .join(separator);
            });
            return Object.assign({}, row, new_row);
      }
      return row;
  };

  
  /**
   * Template por defecto
   * 
   * Arma un listado de datos usando la clave y el valor del objeto
   * pasado cómo argumento. 
   * @param {object} row - Entrada para dibujar un marker.
   */  
  defaultTemplate = (self, row) => {
    const tpl_list = this.templateList(row);
    const tpl_title = this.templateTitle(row);

    const container = document.createElement("article");
    container.classList.add(... this.template_container_class_list);

    const definitions = document.createElement(this.template_dl);
    definitions.classList.add(...this.template_dl_class_list);
    definitions.style.fontSize = "1rem";

    // Si se configuró el template mixing.
    row = this.templateMixing(row);

    for(const key of tpl_list){
        // excluyo los items vacíos.
        if(row.hasOwnProperty(key) && !row[key]){
            continue;
        }

        const term = document.createElement(this.template_dt);
        term.classList.add("h6", "m-b-0")
        term.textContent = this.header(key);
        
        const definition = document.createElement(this.template_dd);
        definition.textContent = row[key];

        if(this.template_markdown){
            definition.innerHTML = this.mdToHtml(row[key]);
        } else if(this.template_innerhtml){
            definition.innerHTML = row[key];
        }

        if(this.header(key) != ""){
            definitions.appendChild(term);
        }
        definitions.appendChild(definition);
    };

    if(tpl_title){
        container.appendChild(tpl_title);
    }

    container.appendChild(definitions);
    return container.outerHTML;
  };

  /**
   * Icono con color Poncho.
   * 
   * @summary Retorna un marker SVG con color poncho. Por defecto se
   * utiliza el azul (primary), pero se puede cambiar el clor usando
   * el parámetro «color». Los colores están limitados a los cargados
   * en Drupal. 
   * @param {string} color - Nombre del color según poncho colores. 
   * @see https://leafletjs.com/examples/custom-icons/
   * @returns {object}
   */
  icon = (color="azul") => {
      return new L.icon({
          iconUrl: `https://www.argentina.gob.ar/sites/default/files/marcador-${color}.svg`,
          iconSize: [27, 38],
          iconAnchor: [13, 38],
          popupAnchor: [0, -37]
      });
  };

  /**
   * Resetea el mapa a su punto inicial por defecto.
   */
  resetView = () => this.map.setView(this.map_view, this.map_zoom);

  /**
   * Hace zoom hasta los límites de los markers
   */
  fitBounds = () => {
      try {
          this.map.fitBounds(this.markers.getBounds());
      } catch (error) {
          console.error(error);
      }
  };

  /**
   * Agrega un botón entre zoom-in y zoom-out para volver a la vista
   * original. 
   */
  resetViewButton = () => {
    if(!this.reset_zoom){
        return;
    }
    // función a evaluar. Busca y remueve un botón de reset si existiera.
    document.querySelectorAll(
          `.js-reset-view${this.scope_sufix}`).forEach(e => e.remove());
    
    document
        .querySelectorAll(`${this.scope_selector} .leaflet-control-zoom-in`)
        .forEach(ele => {

        const icon = document.createElement("i");
        icon.classList.add("fa", "fa-expand");
        icon.setAttribute("aria-hidden","true");

        const button = document.createElement("a");
        button.classList.add(`js-reset-view${this.scope_sufix}`, 
                            "leaflet-control-zoom-reset");
        button.href = "#";
        button.title = "Zoom para ver todo el mapa";
        button.setAttribute("role", "button");
        button.setAttribute("aria-label", "Zoom para ver todo el mapa");
        button.appendChild(icon);

        button.onclick = (e) => {
            e.preventDefault();
            this.resetView();
        };
        ele.after(button);
    });
  };

  /**
   * Define el objeto icon.
   * @param {object} row - entrada de json 
   * @returns {object} Instancia L.icon
   */
  marker = (row) => {
    // Si marker_color no viene o es null usa el marker por defecto 
    // de Open Street Map
    if(!this.marker_color || typeof this.marker_color === "boolean"){
        return null
    }

    if(typeof this.marker_color === "string"){
        return this.icon(this.marker_color);

    } else if (typeof this.marker_color(this, row) === "string"){
        const color = this.marker_color(this, row);
        return this.icon(color);

    } else if (typeof this.marker_color === "function"){
        return this.marker_color(this, row);
    }
  };

  /**
   * Prepara las características del mapa y de cada uno de los markers.
   */
  markersMap = (entries) => {
    this.markers.clearLayers();
    entries.forEach(row => {
        const icon = this.marker(row);
        const id = row[this.id];
        const latitud = row[this.latitud];
        const longitud = row[this.longitud];

        if(!this.validateLatLng(latitud) || !this.validateLatLng(longitud)){ 
            return;
        }
        let marker_attr = {};
        if(id){
            marker_attr.id = id;
        }
        if(icon){
            marker_attr.icon = icon;
        }
        // Agrego el title y el texto alternativa para proveer mayor 
        // accesibilidad 
        if(this.title){
            marker_attr.title = row[this.title];
            marker_attr.alt = row[this.title];
        }

        const marker = new L.marker([latitud, longitud], marker_attr);
        this.markers.addLayer(marker);
        
        if(!this.slider){
            const html = (typeof this.template == "function" ? 
                  this.template(this, row) : this.defaultTemplate(this, row));
            marker.bindPopup(html);
        }
    });
    this.map.options.minZoom = 2;
    this.map.addLayer(this.markers);
  };

  /**
   * Setea el marker activo.
   */
  setSelectedMarker = (id, instance) => {
      const val = {entry: this.entry(id), marker: instance};
      this.selected_marker = val;
      return val;
  };

  /**
   * Haciendo clic en un marker setea el marker como actualmente seleccionado.
   */
  selectedMarker = () => {
      this.markers.eachLayer(layer => {
          layer.on("click", (e) => {
              this.setSelectedMarker(layer.options.id, layer);
          });
      });
  };

  /**
   * Crea un input hidden dentro del contenedor poncho maps.
   * 
   * @summary El input se utiliza cuando está activada la clase 
   * PonchoMapsFilter y PonchoMapSearch cuando el usuario escribe sobre
   * el imput visible se copia el texto a este input y desde ahi se
   * toma el termino a buscar o filtrar.
   */
  hiddenSearchInput = () => {
      const search = document.createElement("input");
      search.type ="hidden";
      search.name = `js-search-input${this.scope_sufix}`;
      search.setAttribute("disabled", "disabled");
      search.id = `js-search-input${this.scope_sufix}`;
      const container = document
            .querySelectorAll(`${this.scope_selector}.poncho-map`);
      container.forEach(element => element.appendChild(search));
  }

  /**
   * ¡Experimental! Agrega anclas y enlaces para un menú accesible.
   * 
   * @summary El mapa es muy complicado de leer con un lector de pantalla.
   * El contexto es dificil de entender. Estos enlaces ayudan a navegar
   * dos o tres de los sectores que contienen y manejan información:
   * los filtros, los markers y el control de zoom.
   * @todo Revisar el modo de activar el enlace para visualizar el slider
   * cuando éste está visible. Como sugerencia se puede utilizar
   * Aria para setear el estado, pero esto hay que chequearlo con 
   * expertos.
   * @see https://www.w3.org/WAI/standards-guidelines/aria/
   * @see https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics
   */
  accesibleMenu = () => {
    // Anclas que se deben crear.
    const anchors = [
        [
            `${this.scope_selector} .leaflet-marker-pane`, 
            `leaflet-marker-pane${this.scope_sufix}`],
        [
            `${this.scope_selector} .leaflet-control-zoom`,
            `leaflet-control-zoom${this.scope_sufix}`
        ],
    ];
    anchors.forEach(anchor => document.querySelector(anchor[0]).id = anchor[1]);

    // Enlaces
    const values = [
      {
          "text" :"Ir a los marcadores del mapa",
          "anchor" : `#${anchors[0][1]}`
      },
      {
          "text": "Ir al panel de zoom",
          "anchor": `#${anchors[1][1]}` 
      },
      // {
      //   "text": "Ir al panel de información",
      //   "anchor": `#js-anchor-slider${this.scope_sufix}` 
      // },

      
    ]
    if(typeof this.filters !== "undefined"){
        values.push({
            "text" : "Ir al panel de filtros",
            "anchor": `#filtrar-busqueda${this.scope_sufix}`
        });
    }

    const ul = document.createElement("ul");
    ul.className = "sr-only";
    ul.setAttribute("aria-label", "Menú para el mapa");
    ul.setAttribute("role", "navigation");
    values.forEach((link, index) => {
        const a = document.createElement("a");
        a.textContent = link.text;
        a.setAttribute("tabindex", index + 1);
        a.href = link.anchor;
        const li = document.createElement("li");
        li.appendChild(a);
        ul.appendChild(li);
    });

    document.querySelectorAll(`${this.scope_selector}`).forEach(element => {
        element.insertBefore(ul, element.children[0])
    });
  };

  /**
   * Hace el render del mapa.
   */
  render = () => {
    console.log(
        "%cPonchoMap",
        'padding:5px;border-radius:6px;background: #0072bb;color: #fff');
    
    this.hiddenSearchInput();
    this.resetViewButton();
    this.markersMap(this.entries);
    this.selectedMarker();

    if(this.slider){
        this.renderSlider();
        this.clickeableMarkers();
        this.toggleSlider();
        this.clickToggleSlider();
    }

    if(this.hash){
        this.urlHash();
    }

    if(this.scroll && this.hasHash()){
        this.scrollCenter();
    }

    this.accesibleMenu();
    setTimeout(this.gotoHashedEntry, this.anchor_delay);
  };
};