let add = x => { return x + 10 };
let multiply = (x) => { return x * 10 };
console.log(add(1));
console.log(multiply(2));

//compose 函数执行顺序，从右向左，依次执行
let compose = (fn0, fn1) => {
    return function (x) {
        return fn0(fn1(x));
    }
}
let fn = compose(multiply, add);
console.log(fn(2));

console.log("****************");
console.log("compose");
//重右往左依次执行
let composeRight = function () {
    let args = [].slice.call(arguments)
    return function (x) {
        return args.reduceRight(function (res, fun) {
            return fun(res);
        }, x);

    }
}
//es6 改写
let composeRight_es6 = (...args) =>
    x => args.reduceRight((res, fn) => fn(res), x);
;

let calculate = composeRight(multiply, add);
console.log(calculate(3));
console.log("****************");
console.log("composeRight_es6");
let calculate_es6 = composeRight_es6(multiply, add);
console.log(calculate_es6(3));

console.log("********************")
console.log("     pipe ");
console.log("********************");
//pipe 函数从左往右依次执行
let pipe = function () {
    let args = [].slice.call(arguments);
    return function (x) {
        return args.reduce((res, fun) => {
            return fun(res);
        }, x);
    };
}

//es6


let calculate1 = pipe(multiply, add);
console.log(calculate1(3));