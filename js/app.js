import '../styles/main.scss';
import 'retinajs';

const drpdwnBtn = document.getElementById("drpdwnBtn");

console.log(drpdwnBtn);

function drpdwnToggle() { 
    drpdwnContent.classList.toggle('show');
    console.log('clicked');
 }

drpdwnBtn.addEventListener("click", drpdwnToggle);


////continue Shopping



