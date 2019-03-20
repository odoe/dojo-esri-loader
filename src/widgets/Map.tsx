import WidgetBase from "@dojo/framework/widget-core/WidgetBase";
import MetaBase from "@dojo/framework/widget-core/meta/Base";
import { tsx } from "@dojo/framework/widget-core/tsx";

import * as css from "./styles/Map.m.css";

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
    const element = this.meta(HtmlMeta).get("elemRef") as HTMLElement;
    this.properties.initializeMap(element);
  }
  protected render() {
    return <div classes={css.root} key="elemRef" />;
  }
}
