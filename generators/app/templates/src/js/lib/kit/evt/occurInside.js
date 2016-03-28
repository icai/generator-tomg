/**
判断事件是否发生在一个元素内
**/

var $ = require('../../../lib');

var occurInside = function(node, event){
	node = $(node);
	if(node.length && event && event.target){
		return node[0] === event.target || node.has(event.target).length;
	}
};

module.exports = occurInside;

