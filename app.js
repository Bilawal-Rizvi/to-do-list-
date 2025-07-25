const add=document.querySelector('.add');
let input=document.querySelector('.input');
let maintask=document.querySelector('.main-tasks');
  
function AddingTask(){
add.addEventListener('click',(e)=>{
let  inputValue=input.value.trim();
  if(inputValue.length==0){
    alert('Please ENter a task');
   
  }  
  
  // create elements
    let div=document.createElement('div');
    let del =document.createElement('i')  ;
    let tasklist=document.createElement('li');
    // adding classes
     del.classList.add('fa-trash','fa-solid');
    div.classList.add('task');

  //  appending childs in maintask div
    tasklist.textContent=inputValue;
    maintask.appendChild(div);
    div.appendChild(tasklist);
    div.appendChild(del);
     input.value='';

})

  }

    maintask.addEventListener('click',(e)=>{

   if(e.target && e.target.tagName==='LI'){ 
e.target.style.textDecoration="line-through";

  }else if(e.target && e.target.tagName==='I'){
    const div=e.target.parentElement;
    maintask.removeChild(div);
  }
     
    })


AddingTask();
