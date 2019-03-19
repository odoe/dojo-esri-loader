import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx} from '@dojo/framework/widget-core/tsx';
import Outlet from '@dojo/framework/routing/Outlet';
import { MatchDetails } from '@dojo/framework/routing/interfaces';

import Menu from './widgets/Menu';
import Home from './widgets/Home';
import MapContainer from './containers/MapContainer';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	protected render() {
		return (
			<div classes={css.root}>
				<Menu />
				<Outlet
					key="home"
					id="home"
					renderer={ () => <Home /> }
				/>
				<Outlet
					key="map"
					id="map"
					renderer={
						({ queryParams }: MatchDetails) => <MapContainer webmapid={queryParams.id} />
					}
				/>
			</div>
		);
	}
}
