/**
@module lib/kit/str/leftB
@example
var $leftB = require('lib/kit/str/leftB');
//向汉编致敬
$leftB('世界真和谐', 6); //return '世界真'
**/

/**
从左到右取字符串，中文算两个字符
@param {String} str
@param {Number} lens
@return {String} str
**/
var $bLength = require('./bLength');

module.exports = function(str, lens){
	var s = str.replace(/\*/g, ' ').replace(/[^\x00-\xff]/g, '**');
	str = str.slice(0, s.slice(0, lens).replace(/\*\*/g, ' ').replace(/\*/g, '').length);
	if ($bLength(str) > lens && lens > 0) {
		str = str.slice(0, str.length - 1);
	}
	return str;
};

