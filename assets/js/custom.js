let checkBox = document.querySelector('.checkBox')
let lestBox = document.querySelector('.todo-list')

function addTask (){
    if (checkBox.value == ""){
        alert ("You Must Write Sumthing!")
    }else{
        let li = document.createElement('li');
        li.innerHTML = checkBox.value;
        lestBox.appendChild(li);
        let span =document.createElement('span')
        span.innerHTML ="\u00d7";
        li.appendChild(span)
    }
    checkBox.value= ""; 
}

lestBox.addEventListener("click" , function(e){
        if (e.target.tagName === "LI"){
            e.target.classlist.toggle("checked")
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()

    }
   
}, false);