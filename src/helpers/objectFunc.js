function checkNestedObj(obj, level,  ...rest) {
	if (obj === undefined) return false
	if (rest.length == 0 && obj.hasOwnProperty(level)) return true
	
	return checkNested(obj[level], ...rest)
}

function getNestedObj(obj, ...args) {
	return args.reduce((obj, level) => obj && obj[level], obj)
}