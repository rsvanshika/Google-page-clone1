let inputBx= document.querySelector("#inputbx")
let taskList= document.querySelector("#task-list")

let addBtn= document.querySelector("#add")

// -----------countdown---------

let dateInp=document.querySelector("#date-input")
let timeInp=document.querySelector("#time-input")
let startBtn=document.querySelector(".start")
let resetBtn=document.querySelector(".reset")
// let startBtn=document.querySelector("#")

//----------search bar-----------

const searchBar = document.getElementById('search-input');
const icons = document.querySelectorAll('.icon');



function addTask(){
    if(inputBx.value === ''){
        alert("Task should not be empty!")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBx.value;
        taskList.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
       
    }
    inputBx.value="";
    saveData();
}


addBtn.addEventListener("click",addTask)

taskList.addEventListener("click",function(e){


    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}
)
//to save data in local storage
function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}

function showtask(){
    taskList.innerHTML=localStorage.getItem("data")
}

showtask();




/* ----------countdown----- */

function startCountDown(){
    const date= dateInp.value;
    const time= timeInp.value;
    // console.log(date)

    const endTime= new Date( date + " "+ time)

    setInterval(()=>calculateTime(endTime),1000)


function calculateTime(){
    const currentTime= new Date();
    const days= document.querySelector("#cntdays")
    const hours= document.querySelector("#cnthours")
    const minutes= document.querySelector("#cntminutes")
    const seconds= document.querySelector("#cntseconds")
  

    if(endTime> currentTime){
        const timeLeft= (endTime-currentTime)/1000;

        days.innerText=Math.floor(timeLeft/(24*60*60))
        hours.innerText=Math.floor(timeLeft/(60*60)%24)
        minutes.innerText=Math.floor(timeLeft/(60)%60)
        seconds.innerText=Math.floor(timeLeft%(60))
    }
    else{
        days.innerText=0
        hours.innerText=0
        minutes.innerText=0
        seconds.innerText=0

    }
}
}




startBtn.addEventListener("click",startCountDown)
resetBtn.addEventListener("click",()=>{


    document.querySelector("#cntdays").innerText=0;
    document.querySelector("#cnthours").innerText=0;
    document.querySelector("#cntminutes").innerText=0;
    document.querySelector("#cntseconds").innerText=0;

})


// ------------clock-----------

const clock=document.getElementById('clock');



//
setInterval(function(){

    let date = new Date();
    

    clock.innerHTML=date.toLocaleTimeString();

},1000)



// -------search bar---------



searchBar.addEventListener('keyup', function () {
    const searchTerm = searchBar.value.toLowerCase();
    console.log(searchTerm)

    icons.forEach(icon=>{
        const iconName = icon.getAttribute('id');
      
       
        console.log(link)
        if(iconName.includes(searchTerm)|| aTag.href.includes(searchTerm)){
            icon.style.display='block'
            
        }



        else
        {
            icon.style.display='none'
        }
        

    })

   
    
})



  

