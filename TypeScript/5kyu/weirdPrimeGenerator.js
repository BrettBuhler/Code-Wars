var gcd = function (a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
};
console.log(gcd(48, 18));
