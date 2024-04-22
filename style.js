let hrs = document.getElementById("hrs");
let min= document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(()=>{

    let currentTime =  new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();


},1000)
/* cards */
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter >4){
        counter = 1;
    }
},5000);

var errorEl = document.getElementById('error')
var form = document.getElementById('form')
var textName = document.getElementById('textName')
var textEmail = document.getElementById('textEmail')
var textMas = document.getElementById('textMas')


form.addEventListener('submit',function(event){
    let error =[];
if(textName.value.length <6){
        error.push('username less than 6')
    }

    if(textEmail.value ==='' || textEmail == null){    
        error.push('emai required')
    }

    if(textMas.value.length > 20){
        error.push('massage greaterthan 20')
    }
if(error.length > 0 ){
    event.preventDefault();
    errorEl.innerHTML = error.join('<br> ')
    }
})

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const darkMode = document.querySelector(".dark-mode");

toggle.addEventListener("click", function () {
this.classList.toggle("bi-moon-fill");
if (this.classList.contains("bi-moon-fill")) {
    body.style.background = "black";
    darkMode.style.color = "white";
    todosListEl.style.color = "white";
    localStorage.setItem("darkMode", "true");
} else {
    body.style.background = "white";
    darkMode.style.color = "black";
    todosListEl.style.color = "black";
    localStorage.setItem("darkMode", "false");
}
});

var $count = document.getElementById('count');
$textarea =document.getElementById('text');
$maxLength = $textarea.getAttribute('maxlength');

$textarea.oninput = function (){
$count.innerHTML =$maxLength -this.value.length;
    if($count.innerHTML == 0){
        $count.classList.add('zero');
    }else {
        $count.classList.remove('zero');
    }
};


