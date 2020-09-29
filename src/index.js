module.exports = function reverse(n) {
    var result = '';
    var i = 0;
    var str = n.toString();
    if (str[0] === '-') {
        for (i = 1; i < str.length; i++) {
            result = `${str[i]}${result}`;
        }
    } else {
        for (i; i < str.length; i++) {
            result = `${str[i]}${result}`;
        };
    };
    return result;
}
