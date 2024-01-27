let result = document.getElementById('inputValue');

let calculate = (number) =>{
    console.log(number);
    result.value += number
}

let Result = () =>{
try{
    if(result.value.includes('/0')){
        alert("invalid input")
    }else{
        result.value = new Function(`return ${result.value}`)();
    }
}catch(error){
    console.log(error);
}
}

let cleared = () =>{
    console.log("clear");
    result.value = '';
}
let deleted = ()=>{
    console.log(result.value);
    console.log(result.value.slice());
    result.value = result.value.slice(0,-1)
}