import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';

import * as css from './styles/Home.m.css';

export default class Home extends WidgetBase {
	protected render() {
		return (
			<div classes={css.root}>
				<h1>Welcome to the dojo-esri-loader sample</h1>
				<p>
					Read more about the <a href="https://developers.arcgis.com/javascript/" target="_blank">ArcGIS API for JavaScript</a>
				</p>
				<p>
					Read more about the <a href="https://github.com/esri/esri-loader" target="_blank">esri-loader</a>
				</p>
				<p>
					<em>Click on the Map link above to go to the map page!</em>
				</p>
			</div>
		);
	}
}
