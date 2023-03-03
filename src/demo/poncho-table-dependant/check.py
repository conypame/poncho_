import random
import webbrowser


webList = [
    "https://qa2-back.argentina.gob.ar/node/1522",
    "https://qa2-back.argentina.gob.ar/node/1769",
    "https://qa2-back.argentina.gob.ar/node/1769",
    "https://qa2-back.argentina.gob.ar/node/2186",
    "https://qa2-back.argentina.gob.ar/node/5386",
    "https://qa2-back.argentina.gob.ar/node/5746",
    "https://qa2-back.argentina.gob.ar/node/7808",
    "https://qa2-back.argentina.gob.ar/node/7808",
    "https://qa2-back.argentina.gob.ar/node/8713",
    "https://qa2-back.argentina.gob.ar/node/8767",
    "https://qa2-back.argentina.gob.ar/node/8770",
    "https://qa2-back.argentina.gob.ar/node/8822",
    "https://qa2-back.argentina.gob.ar/node/9434",
    "https://qa2-back.argentina.gob.ar/node/9718",
    "https://qa2-back.argentina.gob.ar/node/23921",
    "https://qa2-back.argentina.gob.ar/node/25361",
    "https://qa2-back.argentina.gob.ar/node/25376",
    "https://qa2-back.argentina.gob.ar/node/25498",
    "https://qa2-back.argentina.gob.ar/node/48477",
    "https://qa2-back.argentina.gob.ar/node/48714",
    "https://qa2-back.argentina.gob.ar/node/50301",
    "https://qa2-back.argentina.gob.ar/node/50307",
    "https://qa2-back.argentina.gob.ar/node/52833",
    "https://qa2-back.argentina.gob.ar/node/53560",
    "https://qa2-back.argentina.gob.ar/node/60839",
    "https://qa2-back.argentina.gob.ar/node/61408",
    "https://qa2-back.argentina.gob.ar/node/61617",
    "https://qa2-back.argentina.gob.ar/node/63217",
    "https://qa2-back.argentina.gob.ar/node/70981",
    "https://qa2-back.argentina.gob.ar/node/80023",
    "https://qa2-back.argentina.gob.ar/node/81751",
    "https://qa2-back.argentina.gob.ar/node/81835",
    "https://qa2-back.argentina.gob.ar/node/82999",
    "https://qa2-back.argentina.gob.ar/node/83890",
    "https://qa2-back.argentina.gob.ar/node/83986",
    "https://qa2-back.argentina.gob.ar/node/87388",
    "https://qa2-back.argentina.gob.ar/node/90340",
    "https://qa2-back.argentina.gob.ar/node/90997",
    "https://qa2-back.argentina.gob.ar/node/91036",
    "https://qa2-back.argentina.gob.ar/node/91066",
    "https://qa2-back.argentina.gob.ar/node/91612",
    "https://qa2-back.argentina.gob.ar/node/91666",
    "https://qa2-back.argentina.gob.ar/node/91696",
    "https://qa2-back.argentina.gob.ar/node/96001",
    "https://qa2-back.argentina.gob.ar/node/96685",
    "https://qa2-back.argentina.gob.ar/node/97348",
    "https://qa2-back.argentina.gob.ar/node/98919",
    "https://qa2-back.argentina.gob.ar/node/99485",
    "https://qa2-back.argentina.gob.ar/node/101096",
    "https://qa2-back.argentina.gob.ar/node/101131",
    "https://qa2-back.argentina.gob.ar/node/102172",
    "https://qa2-back.argentina.gob.ar/node/103578",
    "https://qa2-back.argentina.gob.ar/node/107737",
    "https://qa2-back.argentina.gob.ar/node/107737",
    "https://qa2-back.argentina.gob.ar/node/107815",
    "https://qa2-back.argentina.gob.ar/node/108725",
    "https://qa2-back.argentina.gob.ar/node/108823",
    "https://qa2-back.argentina.gob.ar/node/110249",
    "https://qa2-back.argentina.gob.ar/node/111458",
    "https://qa2-back.argentina.gob.ar/node/112707",
    "https://qa2-back.argentina.gob.ar/node/112988",
    "https://qa2-back.argentina.gob.ar/node/112988",
    "https://qa2-back.argentina.gob.ar/node/114752",
    "https://qa2-back.argentina.gob.ar/node/114900",
    "https://qa2-back.argentina.gob.ar/node/115131",
    "https://qa2-back.argentina.gob.ar/node/117011",
    "https://qa2-back.argentina.gob.ar/node/119549",
    "https://qa2-back.argentina.gob.ar/node/121215",
    "https://qa2-back.argentina.gob.ar/node/122910",
    "https://qa2-back.argentina.gob.ar/node/123027",
    "https://qa2-back.argentina.gob.ar/node/123037",
    "https://qa2-back.argentina.gob.ar/node/123237",
    "https://qa2-back.argentina.gob.ar/node/123690",
    "https://qa2-back.argentina.gob.ar/node/123725",
    "https://qa2-back.argentina.gob.ar/node/123746",
    "https://qa2-back.argentina.gob.ar/node/123862",
    "https://qa2-back.argentina.gob.ar/node/123935",
    "https://qa2-back.argentina.gob.ar/node/124550",
    "https://qa2-back.argentina.gob.ar/node/125655",
    "https://qa2-back.argentina.gob.ar/node/126046",
    "https://qa2-back.argentina.gob.ar/node/126175",
    "https://qa2-back.argentina.gob.ar/node/126800",
    "https://qa2-back.argentina.gob.ar/node/126887",
    "https://qa2-back.argentina.gob.ar/node/126893",
    "https://qa2-back.argentina.gob.ar/node/126990",
    "https://qa2-back.argentina.gob.ar/node/127326",
    "https://qa2-back.argentina.gob.ar/node/127539",
    "https://qa2-back.argentina.gob.ar/node/127550",
    "https://qa2-back.argentina.gob.ar/node/127872",
    "https://qa2-back.argentina.gob.ar/node/129400",
    "https://qa2-back.argentina.gob.ar/node/129769",
    "https://qa2-back.argentina.gob.ar/node/130722",
    "https://qa2-back.argentina.gob.ar/node/130727",
    "https://qa2-back.argentina.gob.ar/node/131189",
    "https://qa2-back.argentina.gob.ar/node/132064",
    "https://qa2-back.argentina.gob.ar/node/135979",
    "https://qa2-back.argentina.gob.ar/node/137333",
    "https://qa2-back.argentina.gob.ar/node/137736",
    "https://qa2-back.argentina.gob.ar/node/137743",
    "https://qa2-back.argentina.gob.ar/node/137783",
    "https://qa2-back.argentina.gob.ar/node/139752",
    "https://qa2-back.argentina.gob.ar/node/141408",
    "https://qa2-back.argentina.gob.ar/node/141552",
    "https://qa2-back.argentina.gob.ar/node/141652",
    "https://qa2-back.argentina.gob.ar/node/142148",
    "https://qa2-back.argentina.gob.ar/node/142585",
    "https://qa2-back.argentina.gob.ar/node/142914",
    "https://qa2-back.argentina.gob.ar/node/142915",
    "https://qa2-back.argentina.gob.ar/node/143500",
    "https://qa2-back.argentina.gob.ar/node/144181",
    "https://qa2-back.argentina.gob.ar/node/144559",
    "https://qa2-back.argentina.gob.ar/node/146158",
    "https://qa2-back.argentina.gob.ar/node/146582",
    "https://qa2-back.argentina.gob.ar/node/147102",
    "https://qa2-back.argentina.gob.ar/node/147587",
    "https://qa2-back.argentina.gob.ar/node/149754",
    "https://qa2-back.argentina.gob.ar/node/152368",
    "https://qa2-back.argentina.gob.ar/node/159670",
    "https://qa2-back.argentina.gob.ar/node/160324",
    "https://qa2-back.argentina.gob.ar/node/160324",
    "https://qa2-back.argentina.gob.ar/node/162213",
    "https://qa2-back.argentina.gob.ar/node/162714",
    "https://qa2-back.argentina.gob.ar/node/162725",
    "https://qa2-back.argentina.gob.ar/node/163386",
    "https://qa2-back.argentina.gob.ar/node/164137",
    "https://qa2-back.argentina.gob.ar/node/166730",
    "https://qa2-back.argentina.gob.ar/node/167102",
    "https://qa2-back.argentina.gob.ar/node/167290",
    "https://qa2-back.argentina.gob.ar/node/167407",
    "https://qa2-back.argentina.gob.ar/node/167713",
    "https://qa2-back.argentina.gob.ar/node/167857",
    "https://qa2-back.argentina.gob.ar/node/167860",
    "https://qa2-back.argentina.gob.ar/node/170759",
    "https://qa2-back.argentina.gob.ar/node/171110",
    "https://qa2-back.argentina.gob.ar/node/171128",
    "https://qa2-back.argentina.gob.ar/node/171903",
    "https://qa2-back.argentina.gob.ar/node/172300",
    "https://qa2-back.argentina.gob.ar/node/172300",
    "https://qa2-back.argentina.gob.ar/node/174312",
    "https://qa2-back.argentina.gob.ar/node/174343",
    "https://qa2-back.argentina.gob.ar/node/174515",
    "https://qa2-back.argentina.gob.ar/node/174538",
    "https://qa2-back.argentina.gob.ar/node/174596",
    "https://qa2-back.argentina.gob.ar/node/174684",
    "https://qa2-back.argentina.gob.ar/node/174797",
    "https://qa2-back.argentina.gob.ar/node/175154",
    "https://qa2-back.argentina.gob.ar/node/175491",
    "https://qa2-back.argentina.gob.ar/node/176192",
    "https://qa2-back.argentina.gob.ar/node/177110",
    "https://qa2-back.argentina.gob.ar/node/177188",
    "https://qa2-back.argentina.gob.ar/node/177307",
    "https://qa2-back.argentina.gob.ar/node/177313",
    "https://qa2-back.argentina.gob.ar/node/177321",
    "https://qa2-back.argentina.gob.ar/node/177502",
    "https://qa2-back.argentina.gob.ar/node/178608",
    "https://qa2-back.argentina.gob.ar/node/178646",
    "https://qa2-back.argentina.gob.ar/node/178865",
    "https://qa2-back.argentina.gob.ar/node/178996",
    "https://qa2-back.argentina.gob.ar/node/179467",
    "https://qa2-back.argentina.gob.ar/node/179667",
    "https://qa2-back.argentina.gob.ar/node/179667",
    "https://qa2-back.argentina.gob.ar/node/179670",
    "https://qa2-back.argentina.gob.ar/node/179670",
    "https://qa2-back.argentina.gob.ar/node/180823",
    "https://qa2-back.argentina.gob.ar/node/180828",
    "https://qa2-back.argentina.gob.ar/node/180837",
    "https://qa2-back.argentina.gob.ar/node/181324",
    "https://qa2-back.argentina.gob.ar/node/181329",
    "https://qa2-back.argentina.gob.ar/node/181402",
    "https://qa2-back.argentina.gob.ar/node/181549",
    "https://qa2-back.argentina.gob.ar/node/183854",
    "https://qa2-back.argentina.gob.ar/node/186565",
    "https://qa2-back.argentina.gob.ar/node/187149",
    "https://qa2-back.argentina.gob.ar/node/187998",
    "https://qa2-back.argentina.gob.ar/node/188572",
    "https://qa2-back.argentina.gob.ar/node/188574",
    "https://qa2-back.argentina.gob.ar/node/188659",
    "https://qa2-back.argentina.gob.ar/node/188762",
    "https://qa2-back.argentina.gob.ar/node/188940",
    "https://qa2-back.argentina.gob.ar/node/189201",
    "https://qa2-back.argentina.gob.ar/node/189728",
    "https://qa2-back.argentina.gob.ar/node/189735",
    "https://qa2-back.argentina.gob.ar/node/190943",
    "https://qa2-back.argentina.gob.ar/node/190943",
    "https://qa2-back.argentina.gob.ar/node/191076",
    "https://qa2-back.argentina.gob.ar/node/191078",
    "https://qa2-back.argentina.gob.ar/node/191140",
    "https://qa2-back.argentina.gob.ar/node/191414",
    "https://qa2-back.argentina.gob.ar/node/192128",
    "https://qa2-back.argentina.gob.ar/node/192159",
    "https://qa2-back.argentina.gob.ar/node/192184",
    "https://qa2-back.argentina.gob.ar/node/193017",
    "https://qa2-back.argentina.gob.ar/node/193468",
    "https://qa2-back.argentina.gob.ar/node/193620",
    "https://qa2-back.argentina.gob.ar/node/193620",
    "https://qa2-back.argentina.gob.ar/node/194253",
    "https://qa2-back.argentina.gob.ar/node/194255",
    "https://qa2-back.argentina.gob.ar/node/194257",
    "https://qa2-back.argentina.gob.ar/node/194295",
    "https://qa2-back.argentina.gob.ar/node/195063",
    "https://qa2-back.argentina.gob.ar/node/195089",
    "https://qa2-back.argentina.gob.ar/node/195251",
    "https://qa2-back.argentina.gob.ar/node/195283",
    "https://qa2-back.argentina.gob.ar/node/195378",
    "https://qa2-back.argentina.gob.ar/node/195611",
    "https://qa2-back.argentina.gob.ar/node/195611",
    "https://qa2-back.argentina.gob.ar/node/195903",
    "https://qa2-back.argentina.gob.ar/node/196334",
    "https://qa2-back.argentina.gob.ar/node/196882",
    "https://qa2-back.argentina.gob.ar/node/196936",
    "https://qa2-back.argentina.gob.ar/node/198087",
    "https://qa2-back.argentina.gob.ar/node/199179",
    "https://qa2-back.argentina.gob.ar/node/199762",
    "https://qa2-back.argentina.gob.ar/node/200567",
    "https://qa2-back.argentina.gob.ar/node/200860",
    "https://qa2-back.argentina.gob.ar/node/200947",
    "https://qa2-back.argentina.gob.ar/node/201036",
    "https://qa2-back.argentina.gob.ar/node/201084",
    "https://qa2-back.argentina.gob.ar/node/201084",
    "https://qa2-back.argentina.gob.ar/node/201194",
    "https://qa2-back.argentina.gob.ar/node/201430",
    "https://qa2-back.argentina.gob.ar/node/202449",
    "https://qa2-back.argentina.gob.ar/node/202750",
    "https://qa2-back.argentina.gob.ar/node/203249",
    "https://qa2-back.argentina.gob.ar/node/203278",
    "https://qa2-back.argentina.gob.ar/node/203319",
    "https://qa2-back.argentina.gob.ar/node/203466",
    "https://qa2-back.argentina.gob.ar/node/203735",
    "https://qa2-back.argentina.gob.ar/node/204214",
    "https://qa2-back.argentina.gob.ar/node/204321",
    "https://qa2-back.argentina.gob.ar/node/204478",
    "https://qa2-back.argentina.gob.ar/node/206044",
    "https://qa2-back.argentina.gob.ar/node/206061",
    "https://qa2-back.argentina.gob.ar/node/206233",
    "https://qa2-back.argentina.gob.ar/node/206895",
    "https://qa2-back.argentina.gob.ar/node/207430",
    "https://qa2-back.argentina.gob.ar/node/207708",
    "https://qa2-back.argentina.gob.ar/node/209166",
    "https://qa2-back.argentina.gob.ar/node/209430",
    "https://qa2-back.argentina.gob.ar/node/209453",
    "https://qa2-back.argentina.gob.ar/node/209945",
    "https://qa2-back.argentina.gob.ar/node/212635",
    "https://qa2-back.argentina.gob.ar/node/212812",
    "https://qa2-back.argentina.gob.ar/node/212812",
    "https://qa2-back.argentina.gob.ar/node/215677",
    "https://qa2-back.argentina.gob.ar/node/215785",
    "https://qa2-back.argentina.gob.ar/node/216046",
    "https://qa2-back.argentina.gob.ar/node/217007",
    "https://qa2-back.argentina.gob.ar/node/217469",
    "https://qa2-back.argentina.gob.ar/node/217599",
    "https://qa2-back.argentina.gob.ar/node/217773",
    "https://qa2-back.argentina.gob.ar/node/217941",
    "https://qa2-back.argentina.gob.ar/node/218018",
    "https://qa2-back.argentina.gob.ar/node/220830",
    "https://qa2-back.argentina.gob.ar/node/220879",
    "https://qa2-back.argentina.gob.ar/node/220881",
    "https://qa2-back.argentina.gob.ar/node/221466",
    "https://qa2-back.argentina.gob.ar/node/222184",
    "https://qa2-back.argentina.gob.ar/node/223034",
    "https://qa2-back.argentina.gob.ar/node/224325",
    "https://qa2-back.argentina.gob.ar/node/224692",
    "https://qa2-back.argentina.gob.ar/node/224692",
    "https://qa2-back.argentina.gob.ar/node/224981",
    "https://qa2-back.argentina.gob.ar/node/225297",
    "https://qa2-back.argentina.gob.ar/node/226027",
    "https://qa2-back.argentina.gob.ar/node/226355",
    "https://qa2-back.argentina.gob.ar/node/227602",
    "https://qa2-back.argentina.gob.ar/node/228030",
    "https://qa2-back.argentina.gob.ar/node/228295",
    "https://qa2-back.argentina.gob.ar/node/228585",
    "https://qa2-back.argentina.gob.ar/node/229263",
    "https://qa2-back.argentina.gob.ar/node/229269",
    "https://qa2-back.argentina.gob.ar/node/229573",
    "https://qa2-back.argentina.gob.ar/node/230378",
    "https://qa2-back.argentina.gob.ar/node/230427",
    "https://qa2-back.argentina.gob.ar/node/230890",
    "https://qa2-back.argentina.gob.ar/node/231421",
    "https://qa2-back.argentina.gob.ar/node/231469",
    "https://qa2-back.argentina.gob.ar/node/231499",
    "https://qa2-back.argentina.gob.ar/node/231506",
    "https://qa2-back.argentina.gob.ar/node/232038",
    "https://qa2-back.argentina.gob.ar/node/232883",
    "https://qa2-back.argentina.gob.ar/node/233908",
    "https://qa2-back.argentina.gob.ar/node/233914",
    "https://qa2-back.argentina.gob.ar/node/234476",
    "https://qa2-back.argentina.gob.ar/node/234583",
    "https://qa2-back.argentina.gob.ar/node/234638",
    "https://qa2-back.argentina.gob.ar/node/235393",
    "https://qa2-back.argentina.gob.ar/node/235739",
    "https://qa2-back.argentina.gob.ar/node/235979",
    "https://qa2-back.argentina.gob.ar/node/237259",
    "https://qa2-back.argentina.gob.ar/node/237637",
    "https://qa2-back.argentina.gob.ar/node/239789",
    "https://qa2-back.argentina.gob.ar/node/240457",
    "https://qa2-back.argentina.gob.ar/node/240636",
    "https://qa2-back.argentina.gob.ar/node/243509",
    "https://qa2-back.argentina.gob.ar/node/243647",
    "https://qa2-back.argentina.gob.ar/node/243647",
    "https://qa2-back.argentina.gob.ar/node/243666",
    "https://qa2-back.argentina.gob.ar/node/244535",
    "https://qa2-back.argentina.gob.ar/node/244786",
    "https://qa2-back.argentina.gob.ar/node/245798",
    "https://qa2-back.argentina.gob.ar/node/245989",
    "https://qa2-back.argentina.gob.ar/node/246322",
    "https://qa2-back.argentina.gob.ar/node/246527",
    "https://qa2-back.argentina.gob.ar/node/246627",
    "https://qa2-back.argentina.gob.ar/node/246629",
    "https://qa2-back.argentina.gob.ar/node/246631",
    "https://qa2-back.argentina.gob.ar/node/246634",
    "https://qa2-back.argentina.gob.ar/node/246635",
    "https://qa2-back.argentina.gob.ar/node/246637",
    "https://qa2-back.argentina.gob.ar/node/246650",
    "https://qa2-back.argentina.gob.ar/node/246672",
    "https://qa2-back.argentina.gob.ar/node/246677",
    "https://qa2-back.argentina.gob.ar/node/246685",
    "https://qa2-back.argentina.gob.ar/node/246687",
    "https://qa2-back.argentina.gob.ar/node/246693",
    "https://qa2-back.argentina.gob.ar/node/246697",
    "https://qa2-back.argentina.gob.ar/node/246700",
    "https://qa2-back.argentina.gob.ar/node/246704",
    "https://qa2-back.argentina.gob.ar/node/246706",
    "https://qa2-back.argentina.gob.ar/node/246836",
    "https://qa2-back.argentina.gob.ar/node/246838",
    "https://qa2-back.argentina.gob.ar/node/246841",
    "https://qa2-back.argentina.gob.ar/node/246847",
    "https://qa2-back.argentina.gob.ar/node/247281",
    "https://qa2-back.argentina.gob.ar/node/248609",
    "https://qa2-back.argentina.gob.ar/node/248866",
    "https://qa2-back.argentina.gob.ar/node/249686",
    "https://qa2-back.argentina.gob.ar/node/249834",
    "https://qa2-back.argentina.gob.ar/node/250303",
    "https://qa2-back.argentina.gob.ar/node/251246",
    "https://qa2-back.argentina.gob.ar/node/251346",
    "https://qa2-back.argentina.gob.ar/node/251599",
    "https://qa2-back.argentina.gob.ar/node/251605",
    "https://qa2-back.argentina.gob.ar/node/252007",
    "https://qa2-back.argentina.gob.ar/node/252045",
    "https://qa2-back.argentina.gob.ar/node/252807",
    "https://qa2-back.argentina.gob.ar/node/253758",
    "https://qa2-back.argentina.gob.ar/node/254060",
    "https://qa2-back.argentina.gob.ar/node/255782",
    "https://qa2-back.argentina.gob.ar/node/258168",
    "https://qa2-back.argentina.gob.ar/node/258602",
    "https://qa2-back.argentina.gob.ar/node/258603",
    "https://qa2-back.argentina.gob.ar/node/258606",
    "https://qa2-back.argentina.gob.ar/node/260656",
    "https://qa2-back.argentina.gob.ar/node/260656",
    "https://qa2-back.argentina.gob.ar/node/261277",
    "https://qa2-back.argentina.gob.ar/node/261301",
    "https://qa2-back.argentina.gob.ar/node/261392",
    "https://qa2-back.argentina.gob.ar/node/261392",
    "https://qa2-back.argentina.gob.ar/node/261781",
    "https://qa2-back.argentina.gob.ar/node/262219",
    "https://qa2-back.argentina.gob.ar/node/262222",
    "https://qa2-back.argentina.gob.ar/node/262224",
    "https://qa2-back.argentina.gob.ar/node/262974",
    "https://qa2-back.argentina.gob.ar/node/263278",
    "https://qa2-back.argentina.gob.ar/node/263535",
    "https://qa2-back.argentina.gob.ar/node/263539",
    "https://qa2-back.argentina.gob.ar/node/263544",
    "https://qa2-back.argentina.gob.ar/node/263695",
    "https://qa2-back.argentina.gob.ar/node/265263",
    "https://qa2-back.argentina.gob.ar/node/265404",
    "https://qa2-back.argentina.gob.ar/node/265786",
    "https://qa2-back.argentina.gob.ar/node/266160",
    "https://qa2-back.argentina.gob.ar/node/267837",
    "https://qa2-back.argentina.gob.ar/node/267841",
    "https://qa2-back.argentina.gob.ar/node/267843",
    "https://qa2-back.argentina.gob.ar/node/268015",
    "https://qa2-back.argentina.gob.ar/node/268359",
    "https://qa2-back.argentina.gob.ar/node/268496",
    "https://qa2-back.argentina.gob.ar/node/268931",
    "https://qa2-back.argentina.gob.ar/node/270890",
    "https://qa2-back.argentina.gob.ar/node/273408",
    "https://qa2-back.argentina.gob.ar/node/274118",
    "https://qa2-back.argentina.gob.ar/node/274515",
    "https://qa2-back.argentina.gob.ar/node/274515",
    "https://qa2-back.argentina.gob.ar/node/275125",
    "https://qa2-back.argentina.gob.ar/node/275125",
    "https://qa2-back.argentina.gob.ar/node/275645",
    "https://qa2-back.argentina.gob.ar/node/276202",
    "https://qa2-back.argentina.gob.ar/node/276552",
    "https://qa2-back.argentina.gob.ar/node/276554",
    "https://qa2-back.argentina.gob.ar/node/276556",
    "https://qa2-back.argentina.gob.ar/node/276756",
    "https://qa2-back.argentina.gob.ar/node/276762",
    "https://qa2-back.argentina.gob.ar/node/276844",
    "https://qa2-back.argentina.gob.ar/node/276850",
    "https://qa2-back.argentina.gob.ar/node/276855",
    "https://qa2-back.argentina.gob.ar/node/276883",
    "https://qa2-back.argentina.gob.ar/node/276886",
    "https://qa2-back.argentina.gob.ar/node/276888",
    "https://qa2-back.argentina.gob.ar/node/276893",
    "https://qa2-back.argentina.gob.ar/node/276894",
    "https://qa2-back.argentina.gob.ar/node/276899",
    "https://qa2-back.argentina.gob.ar/node/277075",
    "https://qa2-back.argentina.gob.ar/node/277075",
    "https://qa2-back.argentina.gob.ar/node/277562",
    "https://qa2-back.argentina.gob.ar/node/277567",
    "https://qa2-back.argentina.gob.ar/node/277828",
    "https://qa2-back.argentina.gob.ar/node/277828",
    "https://qa2-back.argentina.gob.ar/node/277901",
    "https://qa2-back.argentina.gob.ar/node/278063",
    "https://qa2-back.argentina.gob.ar/node/278066",
    "https://qa2-back.argentina.gob.ar/node/278087",
    "https://qa2-back.argentina.gob.ar/node/278110",
    "https://qa2-back.argentina.gob.ar/node/278114",
    "https://qa2-back.argentina.gob.ar/node/278115",
    "https://qa2-back.argentina.gob.ar/node/278120",
    "https://qa2-back.argentina.gob.ar/node/278121",
    "https://qa2-back.argentina.gob.ar/node/278123",
    "https://qa2-back.argentina.gob.ar/node/279349",
    "https://qa2-back.argentina.gob.ar/node/279349",
    "https://qa2-back.argentina.gob.ar/node/281540",
    "https://qa2-back.argentina.gob.ar/node/281989",
    "https://qa2-back.argentina.gob.ar/node/282119",
    "https://qa2-back.argentina.gob.ar/node/282673",
    "https://qa2-back.argentina.gob.ar/node/282693",
    "https://qa2-back.argentina.gob.ar/node/283367",
    "https://qa2-back.argentina.gob.ar/node/283367",
    "https://qa2-back.argentina.gob.ar/node/283487",
    "https://qa2-back.argentina.gob.ar/node/283494",
    "https://qa2-back.argentina.gob.ar/node/283497",
    "https://qa2-back.argentina.gob.ar/node/283500",
    "https://qa2-back.argentina.gob.ar/node/284587",
    "https://qa2-back.argentina.gob.ar/node/284592",
    "https://qa2-back.argentina.gob.ar/node/285163",
    "https://qa2-back.argentina.gob.ar/node/286199",
    "https://qa2-back.argentina.gob.ar/node/286669",
    "https://qa2-back.argentina.gob.ar/node/286669",
    "https://qa2-back.argentina.gob.ar/node/286671",
    "https://qa2-back.argentina.gob.ar/node/286671",
    "https://qa2-back.argentina.gob.ar/node/287201",
    "https://qa2-back.argentina.gob.ar/node/287229",
    "https://qa2-back.argentina.gob.ar/node/287238",
    "https://qa2-back.argentina.gob.ar/node/287457",
    "https://qa2-back.argentina.gob.ar/node/287470",
    "https://qa2-back.argentina.gob.ar/node/288686",
    "https://qa2-back.argentina.gob.ar/node/288706",
    "https://qa2-back.argentina.gob.ar/node/288730",
    "https://qa2-back.argentina.gob.ar/node/288756",
    "https://qa2-back.argentina.gob.ar/node/289438",
    "https://qa2-back.argentina.gob.ar/node/289438",
    "https://qa2-back.argentina.gob.ar/node/290110",
    "https://qa2-back.argentina.gob.ar/node/290110",
    "https://qa2-back.argentina.gob.ar/node/291115",
    "https://qa2-back.argentina.gob.ar/node/291697",
    "https://qa2-back.argentina.gob.ar/node/292539",
    "https://qa2-back.argentina.gob.ar/node/294020",
    "https://qa2-back.argentina.gob.ar/node/294020",
    "https://qa2-back.argentina.gob.ar/node/294028",
    "https://qa2-back.argentina.gob.ar/node/294117",
    "https://qa2-back.argentina.gob.ar/node/295138",
    "https://qa2-back.argentina.gob.ar/node/295148",
    "https://qa2-back.argentina.gob.ar/node/295157",
    "https://qa2-back.argentina.gob.ar/node/295430",
    "https://qa2-back.argentina.gob.ar/node/295430",
    "https://qa2-back.argentina.gob.ar/node/295611",
    "https://qa2-back.argentina.gob.ar/node/295612",
    "https://qa2-back.argentina.gob.ar/node/295628",
    "https://qa2-back.argentina.gob.ar/node/295639",
    "https://qa2-back.argentina.gob.ar/node/295649",
    "https://qa2-back.argentina.gob.ar/node/295661",
    "https://qa2-back.argentina.gob.ar/node/295673",
    "https://qa2-back.argentina.gob.ar/node/295678",
    "https://qa2-back.argentina.gob.ar/node/295690",
    "https://qa2-back.argentina.gob.ar/node/295696",
    "https://qa2-back.argentina.gob.ar/node/295762",
    "https://qa2-back.argentina.gob.ar/node/295764",
    "https://qa2-back.argentina.gob.ar/node/295801",
    "https://qa2-back.argentina.gob.ar/node/295801",
    "https://qa2-back.argentina.gob.ar/node/297367",
    "https://qa2-back.argentina.gob.ar/node/298460",
    "https://qa2-back.argentina.gob.ar/node/298463",
    "https://qa2-back.argentina.gob.ar/node/300121",
    "https://qa2-back.argentina.gob.ar/node/300121",
    "https://qa2-back.argentina.gob.ar/node/301227",
    "https://qa2-back.argentina.gob.ar/node/301227",
    "https://qa2-back.argentina.gob.ar/node/301595",
    "https://qa2-back.argentina.gob.ar/node/301595",
    "https://qa2-back.argentina.gob.ar/node/301658",
    "https://qa2-back.argentina.gob.ar/node/301676",
    "https://qa2-back.argentina.gob.ar/node/301918",
    "https://qa2-back.argentina.gob.ar/node/302170",
    "https://qa2-back.argentina.gob.ar/node/302609",
    "https://qa2-back.argentina.gob.ar/node/302809",
    "https://qa2-back.argentina.gob.ar/node/302831",
    "https://qa2-back.argentina.gob.ar/node/302850",
    "https://qa2-back.argentina.gob.ar/node/302850",
    "https://qa2-back.argentina.gob.ar/node/305071",
    "https://qa2-back.argentina.gob.ar/node/305071",
    "https://qa2-back.argentina.gob.ar/node/305727",
    "https://qa2-back.argentina.gob.ar/node/306913",
    "https://qa2-back.argentina.gob.ar/node/306988",
    "https://qa2-back.argentina.gob.ar/node/307825",
    "https://qa2-back.argentina.gob.ar/node/308693",
    "https://qa2-back.argentina.gob.ar/node/308907",
    "https://qa2-back.argentina.gob.ar/node/309288",
    "https://qa2-back.argentina.gob.ar/node/309305",
    "https://qa2-back.argentina.gob.ar/node/310138",
    "https://qa2-back.argentina.gob.ar/node/310519",
    "https://qa2-back.argentina.gob.ar/node/311447",
    "https://qa2-back.argentina.gob.ar/node/311455",
    "https://qa2-back.argentina.gob.ar/node/311470",
    "https://qa2-back.argentina.gob.ar/node/311473",
    "https://qa2-back.argentina.gob.ar/node/311479",
    "https://qa2-back.argentina.gob.ar/node/311482",
    "https://qa2-back.argentina.gob.ar/node/311486",
    "https://qa2-back.argentina.gob.ar/node/311489",
    "https://qa2-back.argentina.gob.ar/node/311492",
    "https://qa2-back.argentina.gob.ar/node/311494",
    "https://qa2-back.argentina.gob.ar/node/311495",
    "https://qa2-back.argentina.gob.ar/node/311498",
    "https://qa2-back.argentina.gob.ar/node/311501",
    "https://qa2-back.argentina.gob.ar/node/311503",
    "https://qa2-back.argentina.gob.ar/node/311504",
    "https://qa2-back.argentina.gob.ar/node/311509",
    "https://qa2-back.argentina.gob.ar/node/311510",
    "https://qa2-back.argentina.gob.ar/node/311513",
    "https://qa2-back.argentina.gob.ar/node/311519",
    "https://qa2-back.argentina.gob.ar/node/311521",
    "https://qa2-back.argentina.gob.ar/node/311524",
    "https://qa2-back.argentina.gob.ar/node/311526",
    "https://qa2-back.argentina.gob.ar/node/311529",
    "https://qa2-back.argentina.gob.ar/node/311532",
    "https://qa2-back.argentina.gob.ar/node/311988",
    "https://qa2-back.argentina.gob.ar/node/312165",
    "https://qa2-back.argentina.gob.ar/node/313637",
    "https://qa2-back.argentina.gob.ar/node/313653",
    "https://qa2-back.argentina.gob.ar/node/314020",
    "https://qa2-back.argentina.gob.ar/node/314448",
    "https://qa2-back.argentina.gob.ar/node/316198",
    "https://qa2-back.argentina.gob.ar/node/317245",
    "https://qa2-back.argentina.gob.ar/node/317993",
    "https://qa2-back.argentina.gob.ar/node/317996",
    "https://qa2-back.argentina.gob.ar/node/318006",
    "https://qa2-back.argentina.gob.ar/node/318223",
    "https://qa2-back.argentina.gob.ar/node/318223",
    "https://qa2-back.argentina.gob.ar/node/322324",
    "https://qa2-back.argentina.gob.ar/node/322330",
    "https://qa2-back.argentina.gob.ar/node/323183",
    "https://qa2-back.argentina.gob.ar/node/323942",
    "https://qa2-back.argentina.gob.ar/node/323942",
    "https://qa2-back.argentina.gob.ar/node/323943",
    "https://qa2-back.argentina.gob.ar/node/323943",
    "https://qa2-back.argentina.gob.ar/node/324747",
    "https://qa2-back.argentina.gob.ar/node/324747",
    "https://qa2-back.argentina.gob.ar/node/327036",
    "https://qa2-back.argentina.gob.ar/node/327199",
    "https://qa2-back.argentina.gob.ar/node/327623",
    "https://qa2-back.argentina.gob.ar/node/329375",
    "https://qa2-back.argentina.gob.ar/node/329524",
    "https://qa2-back.argentina.gob.ar/node/329535",
    "https://qa2-back.argentina.gob.ar/node/329839",
    "https://qa2-back.argentina.gob.ar/node/330582",
    "https://qa2-back.argentina.gob.ar/node/331139",
    "https://qa2-back.argentina.gob.ar/node/332347",
    "https://qa2-back.argentina.gob.ar/node/332348",
    "https://qa2-back.argentina.gob.ar/node/332907",
    "https://qa2-back.argentina.gob.ar/node/333792",
    "https://qa2-back.argentina.gob.ar/node/334267",
    "https://qa2-back.argentina.gob.ar/node/334828",
    "https://qa2-back.argentina.gob.ar/node/334828",
    "https://qa2-back.argentina.gob.ar/node/334904",
    "https://qa2-back.argentina.gob.ar/node/335026",
    "https://qa2-back.argentina.gob.ar/node/335030",
    "https://qa2-back.argentina.gob.ar/node/335250",
    "https://qa2-back.argentina.gob.ar/node/335259",
    "https://qa2-back.argentina.gob.ar/node/335313",
    "https://qa2-back.argentina.gob.ar/node/335316",
    "https://qa2-back.argentina.gob.ar/node/335319",
    "https://qa2-back.argentina.gob.ar/node/335323",
    "https://qa2-back.argentina.gob.ar/node/335324",
    "https://qa2-back.argentina.gob.ar/node/335325",
    "https://qa2-back.argentina.gob.ar/node/335327",
    "https://qa2-back.argentina.gob.ar/node/335396",
    "https://qa2-back.argentina.gob.ar/node/335416",
    "https://qa2-back.argentina.gob.ar/node/335461",
    "https://qa2-back.argentina.gob.ar/node/336319",
    "https://qa2-back.argentina.gob.ar/node/336519",
    "https://qa2-back.argentina.gob.ar/node/338459",
    "https://qa2-back.argentina.gob.ar/node/339357",
    "https://qa2-back.argentina.gob.ar/node/340133",
    "https://qa2-back.argentina.gob.ar/node/341330",
    "https://qa2-back.argentina.gob.ar/node/342250",
    "https://qa2-back.argentina.gob.ar/node/342391",
    "https://qa2-back.argentina.gob.ar/node/342753",
    "https://qa2-back.argentina.gob.ar/node/343400",
    "https://qa2-back.argentina.gob.ar/node/343400",
    "https://qa2-back.argentina.gob.ar/node/343418",
    "https://qa2-back.argentina.gob.ar/node/343418",
    "https://qa2-back.argentina.gob.ar/node/344478",
    "https://qa2-back.argentina.gob.ar/node/344533",
    "https://qa2-back.argentina.gob.ar/node/344545",
    "https://qa2-back.argentina.gob.ar/node/344723",
    "https://qa2-back.argentina.gob.ar/node/345521",
    "https://qa2-back.argentina.gob.ar/node/346407",
    "https://qa2-back.argentina.gob.ar/node/346408",
    "https://qa2-back.argentina.gob.ar/node/346411",
    "https://qa2-back.argentina.gob.ar/node/346413",
    "https://qa2-back.argentina.gob.ar/node/346414",
    "https://qa2-back.argentina.gob.ar/node/346416",
    "https://qa2-back.argentina.gob.ar/node/346417",
    "https://qa2-back.argentina.gob.ar/node/346419",
    "https://qa2-back.argentina.gob.ar/node/346422",
    "https://qa2-back.argentina.gob.ar/node/346425",
    "https://qa2-back.argentina.gob.ar/node/346427",
    "https://qa2-back.argentina.gob.ar/node/346428",
    "https://qa2-back.argentina.gob.ar/node/346431",
    "https://qa2-back.argentina.gob.ar/node/346432",
    "https://qa2-back.argentina.gob.ar/node/346435",
    "https://qa2-back.argentina.gob.ar/node/346437",
    "https://qa2-back.argentina.gob.ar/node/346439",
    "https://qa2-back.argentina.gob.ar/node/346440",
    "https://qa2-back.argentina.gob.ar/node/346445",
    "https://qa2-back.argentina.gob.ar/node/346447",
    "https://qa2-back.argentina.gob.ar/node/346454",
    "https://qa2-back.argentina.gob.ar/node/346457",
    "https://qa2-back.argentina.gob.ar/node/346458",
    "https://qa2-back.argentina.gob.ar/node/346461",
    "https://qa2-back.argentina.gob.ar/node/347164",
    "https://qa2-back.argentina.gob.ar/node/347580",
    "https://qa2-back.argentina.gob.ar/node/347667",
    "https://qa2-back.argentina.gob.ar/node/347989",
    "https://qa2-back.argentina.gob.ar/node/348236",
    "https://qa2-back.argentina.gob.ar/node/349210",
    "https://qa2-back.argentina.gob.ar/node/349210",
    "https://qa2-back.argentina.gob.ar/node/349433",
    "https://qa2-back.argentina.gob.ar/node/350169",
    "https://qa2-back.argentina.gob.ar/node/350502",
    "https://qa2-back.argentina.gob.ar/node/350502",
    "https://qa2-back.argentina.gob.ar/node/350505",
    "https://qa2-back.argentina.gob.ar/node/350506",
    "https://qa2-back.argentina.gob.ar/node/350507",
    "https://qa2-back.argentina.gob.ar/node/350508",
    "https://qa2-back.argentina.gob.ar/node/350510",
    "https://qa2-back.argentina.gob.ar/node/350512",
    "https://qa2-back.argentina.gob.ar/node/350513",
    "https://qa2-back.argentina.gob.ar/node/350515",
    "https://qa2-back.argentina.gob.ar/node/350518",
    "https://qa2-back.argentina.gob.ar/node/350519",
    "https://qa2-back.argentina.gob.ar/node/350522",
    "https://qa2-back.argentina.gob.ar/node/350525",
    "https://qa2-back.argentina.gob.ar/node/350528",
    "https://qa2-back.argentina.gob.ar/node/350529",
    "https://qa2-back.argentina.gob.ar/node/350540",
    "https://qa2-back.argentina.gob.ar/node/350543",
    "https://qa2-back.argentina.gob.ar/node/350545",
    "https://qa2-back.argentina.gob.ar/node/350547",
    "https://qa2-back.argentina.gob.ar/node/350548",
    "https://qa2-back.argentina.gob.ar/node/350550",
    "https://qa2-back.argentina.gob.ar/node/350553",
    "https://qa2-back.argentina.gob.ar/node/350554",
    "https://qa2-back.argentina.gob.ar/node/350555",
    "https://qa2-back.argentina.gob.ar/node/350627",
    "https://qa2-back.argentina.gob.ar/node/350632",
    "https://qa2-back.argentina.gob.ar/node/351317",
    "https://qa2-back.argentina.gob.ar/node/351481",
    "https://qa2-back.argentina.gob.ar/node/351669",
    "https://qa2-back.argentina.gob.ar/node/352779",
    "https://qa2-back.argentina.gob.ar/node/353230",
    "https://qa2-back.argentina.gob.ar/node/354599",
    "https://qa2-back.argentina.gob.ar/node/355336",
    "https://qa2-back.argentina.gob.ar/node/355474",
    "https://qa2-back.argentina.gob.ar/node/355612",
    "https://qa2-back.argentina.gob.ar/node/356168",
    "https://qa2-back.argentina.gob.ar/node/356168",
    "https://qa2-back.argentina.gob.ar/node/356992",
    "https://qa2-back.argentina.gob.ar/node/357028",
    "https://qa2-back.argentina.gob.ar/node/357029",
    "https://qa2-back.argentina.gob.ar/node/357045",
    "https://qa2-back.argentina.gob.ar/node/357097",
    "https://qa2-back.argentina.gob.ar/node/357100",
    "https://qa2-back.argentina.gob.ar/node/357181",
    "https://qa2-back.argentina.gob.ar/node/357181",
    "https://qa2-back.argentina.gob.ar/node/357196",
    "https://qa2-back.argentina.gob.ar/node/357199",
    "https://qa2-back.argentina.gob.ar/node/357201",
    "https://qa2-back.argentina.gob.ar/node/357204",
    "https://qa2-back.argentina.gob.ar/node/357214",
    "https://qa2-back.argentina.gob.ar/node/357219",
    "https://qa2-back.argentina.gob.ar/node/357402",
    "https://qa2-back.argentina.gob.ar/node/357403",
    "https://qa2-back.argentina.gob.ar/node/357408",
    "https://qa2-back.argentina.gob.ar/node/357412",
    "https://qa2-back.argentina.gob.ar/node/357415",
    "https://qa2-back.argentina.gob.ar/node/357425",
    "https://qa2-back.argentina.gob.ar/node/358527",
    "https://qa2-back.argentina.gob.ar/node/359520",
    "https://qa2-back.argentina.gob.ar/node/359996",
]


res = random.choices(webList, k=10)
for i in res:
    webbrowser.open(i)