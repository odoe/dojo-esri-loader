import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import MetaBase from '@dojo/framework/widget-core/meta/Base';
import { v } from '@dojo/framework/widget-core/d';

import * as css from './styles/About.m.css';
import { loadCss, loadModules } from 'esri-loader';
loadCss('https://js.arcgis.com/4.10/esri/css/main.css');

class HtmlMeta extends MetaBase {
	get(key: string): Element {
			const node = this.getNode(key);
			return node as Element;
	}
}


export default class About extends WidgetBase {
	onAttach() {
		const element = this.meta(HtmlMeta).get('elemRef');
		console.log("my element", element);
		// first, we use Dojo's loader to require the map class
		loadModules(['esri/views/MapView', 'esri/WebMap'])
			.then(([MapView, WebMap]) => {
				// then we load a web map from an id
				const webmap = new WebMap({
					portalItem: { // autocasts as new PortalItem()
						id: 'f2e9b762544945f390ca4ac3671cfa72'
					}
				});
				// and we show that map in a container w/ id #viewDiv
				const view = new MapView({
					map: webmap,
					container: element
				});

				console.log(view);
			})
			.catch(err => {
				// handle any errors
				console.error(err);
			});
}
	protected render() {
		return v('h1', { classes: [css.root], key: 'elemRef' }, ['About Page']);
	}
}
