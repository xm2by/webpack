import './layer.scss';
// import tpl from './layer.html';
import tpl from './layer.ejs';

function layer(){
	return {
		name: 'layer',
		tpl: tpl
	}
}

export default layer;