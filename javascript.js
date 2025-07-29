// 40 line of code 10 line of code is logical other is the 30 line is the general.
document.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        myFunctionForLargest();
    }
    if(e.key == "Enter"){
        myFunctionForSmallest
    }
})
function myFunctionForLargest() {
    let input = document.getElementById('input').value;
    let array = input.split('');
    let len = array.length
    let result = "";
    let largest = array[0];
    for(i=1; i<len; i++){7
        if(largest<array[i]){
              largest=  array[i];
        }
    }
    result = largest;
    document.getElementById('output').style.display = "flex";
    document.getElementById('output').innerHTML = result;
}
function myFunctionForSmallest() {
    let input = document.getElementById('input').value;
    let array = input.split('');
    let len = array.length
    let result = "";
    let smallest = array[0];
    for(i=1; i<len; i++){7
        if(smallest>array[i]){
              smallest=  array[i];
        }
    }
    result = smallest;
    document.getElementById('output2').style.display = "flex";
    document.getElementById('output2').innerHTML = result;
}