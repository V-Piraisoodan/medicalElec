var name = prompt('Enter your name !');
var welcome = "Welcome"
if(name){
    document.getElementById("name").innerHTML = "Welcome" + " " +name
}
else{
    var name = prompt('Enter your name !');
    document.getElementById("name").innerHTML = "Welcome" + " " +name
}

var numbers = [0,1,2,3,4,5,6,7,8,9]

function suffle(array) {
    for(let i = array.length-1 ;i>0;i--){
        var j = Math.floor(Math.random()*(i+1))
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
    // console.log(ans[0],ans[1],ans)
}
var ans = suffle(numbers).slice(0,4).join("");
console.log(ans)

function myFunc(){
    var num = document.getElementById("input-num").value;
    document.getElementById("input-num").value = ""
    console.log(num,"ans",ans)

    console.log(ans.split(""))
    console.log(num.split(""))

    var pushData = ''
    for(let i=0;i<4;i++){
   
        if(ans[i] === num[i]){
            pushData+="+"
        }
        else{
            pushData+="*"
        }
    }
    document.getElementById("ans").innerHTML = pushData
  
    return num
}

// console.log("num",num)


