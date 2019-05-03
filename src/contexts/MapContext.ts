import { loadCss, loadModules } from 'esri-loader';
const VERSION = '4.11';
const options = { url: `https://js.arcgis.com/${VERSION}` };


export default class MapContext {
  private _invalidator: () => void;

	constructor(invalidator: () => void) {
		this._invalidator = invalidator;
	}

  webmapid = '';

  initializeMap = async (container: HTMLElement) => {
    loadCss(`https://js.arcgis.com/${VERSION}/esri/themes/dark/main.css`);
    const [MapView, WebMap] = await loadModules(['esri/views/MapView', 'esri/WebMap'], options);
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