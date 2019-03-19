import { loadCss, loadModules } from 'esri-loader';


export default class MapContext {
  private _invalidator: () => void;

	constructor(invalidator: () => void) {
		this._invalidator = invalidator;
	}

  webmapid = '';

  initializeMap = async (container: HTMLElement) => {
    loadCss('https://js.arcgis.com/4.10/esri/css/main.css');
    const [MapView, WebMap] = await loadModules(['esri/views/MapView', 'esri/WebMap']);
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
  }
}