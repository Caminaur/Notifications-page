
const notifications = document.querySelectorAll('.notification');
const removeAllBtn = document.getElementById('removeall');

for (const notification of notifications) {
  notification.addEventListener('click',(e)=>{
    notification.classList.remove('unread');
  });
}

removeAllBtn.addEventListener('click',(e)=>{
  for (const notification of notifications) {
      notification.classList.remove('unread');
  }
});