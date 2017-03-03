import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers';

import VisibleApp from './containers/VisibleApp';


const store = createStore(reducers);

// AppContainer is a necessary wrapper component for HMR
const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<Component/>
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
};

// document.onreadystatechange = function () {
	// if (document.readyState == "complete") {

		render(VisibleApp);

		// Hot Module Replacement API
		if (module.hot) {
			module.hot.accept('./components/App', () => {
				render(VisibleApp)
			});
		}

	// }
// };
