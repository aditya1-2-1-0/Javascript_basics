// forEach method of array

// Its another type of loop which we used to traverse
// over the array

let dishes = ["Pizza","Biryani","Panipuri","Burger"]

// using for loop

for(let i=0;i<dishes.length;i++){
    console.log(dishes[i]);
    
}

console.log("****************")

// using forEach method

dishes.forEach(function(element){
    console.log(element);
})

// Objects inside array

let blockList = [{userName:"john",reason:"Abusive content"},{userName:"mona",reason:"Copyright content"}]

console.log(blockList);

for(let i=0;i<blockList.length;i++){
    // console.log(blockList[i].reason);
    console.log(`User ${blockList[i].userName} is blocked due to reason ${blockList[i].reason}`);
    
}