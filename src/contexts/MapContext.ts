import { loadCss, loadModules } from 'esri-loader';


export default class MapContext {
  private _invalidator: () => void;

	constructor(invalidator: () => void) {
		this._invalidator = invalidator;
	}

  webmapid = 'f2e9b762544945f390ca4ac3671cfa72';

  initializeMap = (container: HTMLElement) => {
    loadCss('https://js.arcgis.com/4.10/esri/css/main.css');
    loadModules(['esri/views/MapView', 'esri/WebMap']).then(([MapView, WebMap]) => {
      // then we load a web map from an id
      const webmap = new WebMap({
        portalItem: {
          id: this.webmapid
        }
      });
      // and we show that map in a container w/ id #viewDiv
      const view = new MapView({
        map: webmap,
        container: container
      });

      view.when().then(() => {
        console.log('map is ready');
        this._invalidator();
      });
    })
  }
}