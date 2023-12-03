// const username="keerthana"
// const userage=18
// console.log(`Hello,${username}!you are ${userage} years old`)

// const num1=10;
// const num2=5;
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)
// console.log(num1/num2)
// console.log(num1%num2)

function checknumber(number){
    if(number>0){
        console.log("positive")
    }
    else if(number<0){
        console.log("negative")
    }
    else{
        console.log("Zero")
    }
}


// checknumber(10)

function rectangle(length,width){
    console.log(length,width)
    return area=length*width;
}
console.log(rectangle(4,5))

// function voting(userage){
// if(userage>=18){
//     console.log("eligible for voting")
// }
// else{
//     console.log("not eligible for voting")
// }
// }
// voting(23)

// let i=1
// for(i=1;i<=10;i++ ){
//     console.log(`${i}-${i**2}`)
// }

// const array=["rotti","kb","magi palav","chapathi"]
// for(let key in array){
//     console.log(`${key}:${array[key]}`)
// }


const book={
    Title:"one arranged murder",
    Author:"chethan bhagat",
    price:"200",
}
for(let key in book)
console.log(`${key}:${book[key]}`)



