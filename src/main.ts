import renderer from '@dojo/framework/widget-core/vdom';
import Registry from '@dojo/framework/widget-core/Registry';
import { w } from '@dojo/framework/widget-core/d';
import { registerRouterInjector } from '@dojo/framework/routing/RouterInjector';
import { registerThemeInjector } from '@dojo/framework/widget-core/mixins/Themed';
import dojo from '@dojo/themes/dojo';
import '@dojo/themes/dojo/index.css';

import routes from './routes';
import App from './App';
import MapContext from './contexts/MapContext';

const registry = new Registry();
registry.defineInjector('map-state', (invalidator) => {
	return () => new MapContext(invalidator);
});
registerRouterInjector(routes, registry);
registerThemeInjector(dojo, registry);

const r = renderer(() => w(App, {}));
r.mount({ domNode: document.getElementById('root') as HTMLElement, registry });
