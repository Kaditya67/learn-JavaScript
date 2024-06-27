// Resolve and reject are two methods of promises

const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hey. It worked!');
        reject('Unable to fulfill promise');
    }, 2500);
})


// chain then and catch to get resolve and reject outputs
somePromise.then((message) => {
    console.log('Success: ', message);
}).catch((errorMessage) => {
    console.log('Error: ', errorMessage);
})


// Eg 1

function dishVeg(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Veg');
        }, 2500);
    })
}

function dishNonVeg(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Non Veg');
        }, 2500);
    })
}

function chosenDish(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Non Veg');
            reject('Unable to fulfill promise');
        }, 2500);
    })
}

function printDish(dish){
    console.log(dish);
}

chosenDish().then(printDish);

// Eg 2

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ data: "Some data fetched" });
        }, 1000);
    });
}

function processData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.processed = true;
            resolve(data);
        }, 500);
    });
}

function displayResult(result) {
    console.log("Final result:", result);
}

// Chaining promises
fetchData()
    .then((data) => processData(data))
    .then((result) => displayResult(result))
    .catch((error) => console.error("Error:", error));
