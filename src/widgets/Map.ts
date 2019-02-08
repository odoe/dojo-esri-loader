import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import MetaBase from '@dojo/framework/widget-core/meta/Base';
import { v } from '@dojo/framework/widget-core/d';

import * as css from './styles/About.m.css';

class HtmlMeta extends MetaBase {
	get(key: string): Element {
			const node = this.getNode(key);
			return node as Element;
	}
}

export interface MapProperties {
	webmapid: string;
  initializeMap: (container: HTMLElement) => void;
}

export default class Map extends WidgetBase<MapProperties> {
	onAttach() {
		const element = this.meta(HtmlMeta).get('elemRef') as HTMLElement;
		console.log("my element", element, this.properties);
		this.properties.initializeMap(element);
}
	protected render() {
		return v('div', { classes: [css.root], key: 'elemRef' }, []);
	}
}
