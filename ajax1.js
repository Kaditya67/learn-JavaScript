const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        }

        xhr.onerror = () => reject("Network Error");
        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response => {
        console.log(response)
        console.log(typeof response)
        const data = JSON.parse(response)
        console.log(data)
        console.log(typeof data)

        return data;
    })
    .then(data => {
        const id = data[0].id;
        return id;
    }).then(id=>{
        return sendRequest("GET",`${URL}/${id}`)
    }).then(response=>{
        console.log(response)
    })
    .catch(error => console.log(error))