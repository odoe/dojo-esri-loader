import { WidgetBase } from "@dojo/framework/widget-core/WidgetBase";
import { w } from "@dojo/framework/widget-core/d";
import { Container } from "@dojo/framework/widget-core/Container";

import MapContext from "../contexts/MapContext";
import Map, { MapProperties } from "../widgets/Map";

function getProperties(context: MapContext, properties: MapProperties): MapProperties {
  const { initializeMap } = context;
  const { webmapid } = properties;
  context.webmapid = webmapid;
  return { initializeMap: initializeMap.bind(context), webmapid };
}

class MapContainer extends WidgetBase<MapProperties> {
  protected render() {
    const { initializeMap, webmapid } = this.properties;
    return w(Map, { initializeMap, webmapid });
  }
}

export default Container(MapContainer, 'map-state', { getProperties });
