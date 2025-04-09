const promise = new Promise(function(resolve, reject) {
    resolve('Promise resolved');
})

const cow = 15

const countCows = new Promise(function(resolve, reject) {
    if (cow > 10) {
        resolve(`There are ${cow} cows`);
    } else {
        reject('Not enough cows');
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log('Promise finished');
})