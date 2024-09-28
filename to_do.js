const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list");
function addTask(){
    if(inputBox.value===''){
        alert("Please write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let del=document.createElement("del");
        del.innerHTML="\u00D7";
        li.appendChild(del);

    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="DEL"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


