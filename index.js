let btn=document.getElementById("btn");

let inputtext=document.getElementById("text");
let listcontainer=document.getElementById("list-container");

btn.addEventListener("click",()=>{

    if(inputtext.value==='')
    {
        alert("Must Write Something!!")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputtext.value;
        listcontainer.appendChild(li);
        inputtext.value='';
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    saveData();
});


listcontainer.addEventListener("click",function(e){
        if(e.target.tagName=="LI")
        {
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName=="SPAN")
        {
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData(){
        localStorage.setItem("data",listcontainer.innerHTML);
    }

    function showTask(){
        listcontainer.innerHTML=localStorage.getItem("data");
    }
    showTask();