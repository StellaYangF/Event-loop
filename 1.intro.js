/******************** example 1****************************/ 
setTimeout(() => {
  console.log('setTimeout 1') ;
  Promise.resolve().then(data => console.log(222));
});

setTimeout(() => {
  console.log('setTimeout 2') ;
});

Promise.resolve().then(()=> {
  console.log(111);
})

// 111
// setTimeout 1
// 222
// setTimeout 2


/******************** example 2****************************/ 
console.log('script start');

setTimeout(function () {
    console.log('setTimeout---0');
});

setTimeout(function () {
    console.log('setTimeout---200');
    setTimeout(function () {
        console.log('inner-setTimeout---0');
    });
    Promise.resolve().then(function () {
        console.log('promise5');
    });
}, 200);

Promise.resolve().then(function () {
    console.log('promise1');
}).then(function () {
    console.log('promise2');
});
Promise.resolve().then(function () {
    console.log('promise3');
});

console.log('script end');

// script start
// script end
// promise1
// promise3
// promise2   // Promise.then() also returns a promise, a microtask.
// setTimeout---0
// setTimeout---200
// promise5
// inner-setTimeout---0