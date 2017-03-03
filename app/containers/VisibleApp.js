import { connect } from 'react-redux';
import App from '../components/App.js';


const mapStateToProps = (state) => {
	return {
		account: state.account
	}
}
const VisibleApp = connect(
	mapStateToProps
)(App)


export default VisibleApp;
