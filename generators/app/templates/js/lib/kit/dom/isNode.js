/**
@module lib/kit/dom/isNode
**/

/**
判断对象是否为dom元素
@param {element} node
@return {boolean} true/false
**/
module.exports = function(node){
	return (node !== undefined && node !== null) &&
		Boolean(node.nodeName) && Boolean(node.nodeType);
};

