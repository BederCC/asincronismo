function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 3, sum)); // 5

setTimeout(function() {
    console.log('Hello World');
},5000);

function greet(name) {
    console.log(`Hello ${name}`);
}
setTimeout(greet, 2000, 'Beder'); // Hello John