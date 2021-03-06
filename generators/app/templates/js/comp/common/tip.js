/**
tip提示信息
**/

var $ = require('../../lib');
var $tip = require('../ui/tip');
var $cover = require('../../lib/kit/obj/cover');

var TIMEOUT = 2000;
var layer = null;
var timer = null;

module.exports = function(content, options){
	if(!options && $.isPlainObject(content)){
		options = content;
	}else{
		options = options || {};
		options.content = content;
	}

	var conf = $cover({
		target : 'screen',
		parent : null,
		visiblePos : 0,
		content : ''
	}, options);

	if(!layer){
		layer = new $tip();
	}

	layer.setOptions(conf);

	layer.role('root').html(conf.content);

	if(timer){
		clearTimeout(timer);
		timer = null;
	}

	layer.show();

	timer = setTimeout(function(){
		layer.hide();
		timer = null;
	}, TIMEOUT);
};

