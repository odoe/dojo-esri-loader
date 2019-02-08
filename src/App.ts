import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { v, w } from '@dojo/framework/widget-core/d';
import Outlet from '@dojo/framework/routing/Outlet';
import { MatchDetails } from '@dojo/framework/routing/interfaces';

import Menu from './widgets/Menu';
import Home from './widgets/Home';
import About from './widgets/About';
import Profile from './widgets/Profile';
import MapContainer from './containers/MapContainer';

import * as css from './App.m.css';

export default class App extends WidgetBase {
	protected render() {
		return v('div', { classes: [css.root] }, [
			w(Menu, {}),
			v('div', { classes: [css.map] }, [
				w(Outlet, { key: 'home', id: 'home', renderer: () => w(Home, {}) }),
				w(Outlet, { key: 'about', id: 'about', renderer: () => w(About, {}) }),
				w(Outlet, { key: 'profile', id: 'profile', renderer: () => w(Profile, { username: 'Dojo User' }) }),
				w(Outlet, {
					key: 'map',
					id: 'map',
					renderer: ({ queryParams }: MatchDetails) => {
						console.log(queryParams);
						return w(MapContainer, { webmapid: queryParams.id });
					}
				})
			])
		]);
	}
}
