let inputBx= document.querySelector("#inputbx")
let taskList= document.querySelector("#task-list")

let addBtn= document.querySelector("#add")

// -----------countdown---------

let dateInp=document.querySelector("#date-input")

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

let intervalId;
let running = false;  
let targetDate = 0;





function updateCountdown() {
  if (targetDate <= new Date().getTime()) {
    
    clearInterval(intervalId);
    running = false;
    startBtn.textContent = 'Start';
    updateDisplay(0);
  } else {
    const timeRemaining = targetDate - new Date().getTime();
    updateDisplay(timeRemaining);
  }
}

function updateDisplay(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  document.getElementById('cntdays').textContent = String(days).padStart(2, '0');
  document.getElementById('cnthours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cntminutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('cntseconds').textContent = String(seconds).padStart(2, '0');
}

startBtn.addEventListener('click', function () {
  if (!running) {
    targetDate =new Date(dateInp.value).getTime();
    console.log(targetDate)
   
    if (isNaN(targetDate)) {
      alert("Invalid date and time format. Please use the correct format.");
      return;
    }
    const currentDate = new Date().getTime();
    if (targetDate <= currentDate) {
        document.getElementById('error').textContent = "Selected date and time must be in the future.";
        return;
      }

    

      document.getElementById('error').textContent = "";
    intervalId = setInterval(updateCountdown, 1000);
    running = true;
    this.textContent = 'Pause';
    updateCountdown();
  } else {
    clearInterval(intervalId);
    running = false;
    this.textContent = 'Resume';
  }
});

resetBtn.addEventListener('click', function () {
    // console.log("hi")
  clearInterval(intervalId);
  running = false;
  startBtn.textContent = 'Start';
  targetDate = 0;
 dateInp.value = '';
  updateCountdown();
});

updateCountdown(); // Initialize the display


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
      
       
        if(iconName.includes(searchTerm)){
            icon.style.display='block'
            
        }



        else
        {
            icon.style.display='none'
        }
        

    })


   
    
})

const deleteButtons = document.querySelectorAll('.delete-icon');

        // Attach a click event listener to each delete button
        deleteButtons.forEach(deleteButton => {
            deleteButton.addEventListener('click', function() {
                const iconContainer = deleteButton.parentElement; // Get the parent container
                iconContainer.remove(); // Remove the entire container
            });
        });




  

