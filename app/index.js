import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers';

import VisibleApp from './containers/VisibleApp';


const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

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
