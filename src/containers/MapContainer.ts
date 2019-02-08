import { WidgetBase } from "@dojo/framework/widget-core/WidgetBase";
import { w } from "@dojo/framework/widget-core/d";
import { Container } from "@dojo/framework/widget-core/Container";

import MapContext from "../contexts/MapContext";
import Map, { MapProperties } from "../widgets/Map";

function getProperties(inject: MapContext, properties: MapProperties): MapProperties {
  const { initializeMap, webmapid } = inject;
  return { initializeMap: initializeMap.bind(inject), webmapid };
}

class MapContainer extends WidgetBase<MapProperties> {
  protected render() {
    return w(Map, {
      initializeMap: this.properties.initializeMap,
      webmapid: this.properties.webmapid
    });
  }
}

export default Container(MapContainer, 'map-state', { getProperties });
