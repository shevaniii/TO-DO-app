const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

function addtask(){
    if(inputBox.value===''){
        alert("You have to write Something!");
        savedata();
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); 
        span.innerHTML= "\u00d7";     //code to add cross (X)
        li.appendChild(span);
        savedata();
    }
    inputBox.value= "";
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");   //checked is a class name in css.
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
      e.target.parentElement.remove();
      savedata();
    }
    
},false);  //false is for apply event first on child in bubble ups form.

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showdata();