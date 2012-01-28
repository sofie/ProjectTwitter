var _userName = 'xxx';

exports.getName = function() {
	return _userName;
}
exports.setName = function(aName) {
	_userName = aName;
}
exports.userName = _userName;
