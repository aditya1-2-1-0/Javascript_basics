// Asynchronous Javascript

// Async Code Example

// console.log(1);
// console.log(2);


// Async
// setTimeout(() => {
//     console.log("Call back function called after 3 seconds");
    
// },3000) //After 3 seconds

// It this code block execuation for 3 seconds? No
// console.log(3);
// console.log(4);


// Making HTTp Request 

// let request = new XMLHttpRequest();
// console.log(request);

// request.addEventListener('readystatechange',() => {
//     // console.log(request,request.readyState);
//     if(request.readyState === 4 && request.status == 200){
//         console.log(request.responseText);
        
//     }
    
// })

// // Set up the request

// request.open("Get","https://jsonplaceholder.typicode.com/todos")

// // Sending request 
// request.send()


// Use this link for practise to get JSON data in response
// https://jsonplaceholder.typicode.com/

// value state Description
// 0 UNSENT Client has been created. open() has not been called yet.
// 1 OPENED open() has been called.
// 2 HEADERS_RECEIVED send() has been called, and headers and status are available.
// 3 LOADING Downloading; responseText holds partial data.
// 4 DONE The operation is complete.// interested here


// HTTP response status codes

// Informational responses (100 - 199)
// Successful responses (200 - 299)
// Redirectional messages (300 - 399)
// Client error responses (400 - 499)
// Server error responses (500 - 599)



let todos = (resource,callback) => {

    let request = new XMLHttpRequest();
console.log(request);

request.addEventListener('readystatechange',() => {
    // console.log(request,request.readyState);
    if(request.readyState === 4 && request.status == 200){
        // console.log(request.responseText);
        // let data = JSON.parse(request.responseText)
        callback(undefined,request.responseText) //regular js object
    }else if(request.readyState == 4) {
        console.log("Data could not be fetched");
        callback("Data could not fetch",undefined)
    }
    
})

// Set up the request

request.open("Get",resource)

// Sending request 
request.send()

}

// console.log(1);
// console.log(2);


// Chain of todos function(callback) => callback hell
todos("data.json",(error,data) => {
    if(error) {
        console.log(error);
        
    } else {
        console.log(data);
        
    }
    todos("mario.json",(error,data)=>{
        if(error) {
            console.log(error);
            
        } else {
            console.log(data);
            
        }
        todos("lurie.json",(error,data)=>{
            if(error) {
                console.log(error);
                
            } else {
                console.log(data);
                
            }
        })
    })
})

// console.log(3);
// console.log(4);




// Callback hell(Chain of callback function inside another)