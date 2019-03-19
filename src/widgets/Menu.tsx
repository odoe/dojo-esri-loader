import WidgetBase from '@dojo/framework/widget-core/WidgetBase';
import { tsx } from '@dojo/framework/widget-core/tsx';
import Link from '@dojo/framework/routing/ActiveLink';
import Toolbar from '@dojo/widgets/toolbar';

import * as css from './styles/Menu.m.css';

export default class Menu extends WidgetBase {
	protected render() {
		return (
			<Toolbar heading="dojo-esri-loader" collapseWidth={600}>
				<Link to='home' classes={css.link} activeClasses={[css.selected]}>Home</Link>
				<Link to='map' params={{ id: 'f2e9b762544945f390ca4ac3671cfa72' }} classes={css.link} activeClasses={[css.selected]}>Map</Link>
			</Toolbar>
		);
	}
}
