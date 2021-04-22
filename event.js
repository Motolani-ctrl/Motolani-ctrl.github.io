function add(a,b){
    return a + b
}

function division(a,b){
    return a / b
}

function isIdempotent(theRequiredFunction, para1, para2){
    const firstFunctionCall = theRequiredFunction(para1, para2)
    const secondFunctionCall = theRequiredFunction(para2, para1)

    if (firstFunctionCall === secondFunctionCall){
        return true
    }
    
    return false
    
}

console.log( isIdempotent(add, 2, 3) )
console.log( isIdempotent(division, 2, 3) )

function clickMe(e){
    let btn = document.getElementById("btn-top")
    btn.addEventListener("click", (e) =>  {
        alert("button pressed")
        console.log(e)
    })
    // alert("I have been clicked")
    // console.log(e)
}
clickMe()