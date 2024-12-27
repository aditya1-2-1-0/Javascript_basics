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

    return new Promise((resolve,reject)=> {

        let request = new XMLHttpRequest();


request.addEventListener('readystatechange',() => {
    // console.log(request,request.readyState);
    if(request.readyState === 4 && request.status == 200){
        // console.log(request.responseText);
        let data = JSON.parse(request.responseText)
        resolve(data)
    }else if(request.readyState == 4) {
        // console.log("Data could not be fetched");
        reject("Error in fetching")
    }
    
})

// Set up the request

request.open("Get",resource)

// Sending request 
request.send()

    })
    

}

// console.log(1);
// console.log(2);


// Chain of todos function(callback) => callback hell
// todos("data.json",(error,data) => {
//     if(error) {
//         // console.log(error);
        
//     } else {
//         // console.log(data);
        
//     }
//     todos("mario.json",(error,data)=>{
//         if(error) {
//             // console.log(error);
            
//         } else {
//             // console.log(data);
            
//         }
//         todos("lurie.json",(error,data)=>{
//             if(error) {
//                 // console.log(error);
                
//             } else {
//                 // console.log(data);
                
//             }
//         })
//     })
// })

// Callback hell(Chain of callback function inside another)
// console.log(3);
// console.log(4);


// todos("data.json").then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
    
// })


// Promise

let getSomething = () => {
    return new Promise((resolve,reject) => {
        // resolve("Some data") //No data to return
        reject("Some error")
    })
}

// todos("data.json").then((data)=>{
//     console.log("Promise 1 resolved", data);
//     return todos("lurie.json")
// }).then((data)=>{
//     console.log("Promise 2 resolved",data);
//     return todos("mario.json")
// }).then((data)=>{
//     console.log("Promise 3 resolved",data);
// }).catch((error)=>{
//     console.log(error);
    
// })



// fetch API

// fetch("data.json").then((response)=>{
//     console.log("Promise resolved",response);
//     return response.json()//returning promise
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
    
// })



// async and await
// Also Non-Blocking
// let getTodos = async()=>{
//     let response = await fetch("data.json")
//     // custom error
//     // if(response.status !== 200){
//     //     throw new Error("Failed to fetch data")
//     // }
//     let data = await response.json()

//     let response2 = await fetch("mario.json")
//     let marioData = await response2.json()
    
//     console.log(data,marioData);
    
// }

// getTodos().then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error.message);
// })


// we dont need to chain anything as previously
// getTodos()




// Error handling using Try Catch Method

// try {
//     let x=4;
//     const y=6;
//     y=x;
// }
// catch(error){
//     console.log(error.message);
    
// }


let getTodos = async()=>{

    try{

        let response = await fetch("data.json")
    // custom error
    // if(response.status !== 200){
    //     throw new Error("Failed to fetch data")
    // }
    let data = await response.json()

    let response2 = await fetch("mario.json")
    let marioData = await response2.json()
    
    console.log(data,marioData);
    }
    catch(error) {
        console.log(error.message);
    }
    
    
}

getTodos()