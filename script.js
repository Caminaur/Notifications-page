
const notifications = document.querySelectorAll('.notification');
const removeAllBtn = document.getElementById('removeall');
counter = document.getElementById('counter');


for (const notification of notifications) {
  notification.addEventListener('click',(e)=>{
    notification.classList.remove('unread');
    counter.dataset.value = (counter.dataset.value>0) ? counter.dataset.value -1 : 0;
    setCounter();
  });
}

removeAllBtn.addEventListener('click',(e)=>{
  for (const notification of notifications) {
      notification.classList.remove('unread');
  }
  counter.dataset.value = 0;
  setCounter();
});

function setCounter(){
  counter.innerHTML = counter.dataset.value;
}