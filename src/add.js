function add(a, b) {
    return a + b;
}

// 输出：3
console.log(add(1, 2));

// 当 add(1, 2) 返回值不是 3 时，则会报错
console.assert(add(1, 2) === 3, '1+2=3')

module.exports = add;
