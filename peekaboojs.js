const closedoor=document.querySelector('.close');
const opendoor= document.querySelector ('.open');

closedoor.addEventListener('click',()=>{
  if(opendoor.classList.contains('open')){
    opendoor.classList.add('active');
    closedoor.classList.remove('active');

  }
});

opendoor.addEventListener('click',()=>{
  if(closedoor.classList.contains('close')){
    closedoor.classList.add('active');
    opendoor.classList.remove('active');
  }
});
