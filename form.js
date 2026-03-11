const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const toggle = document.getElementById("toggle");
const strengthBar = document.getElementById("strengthBar");
const form = document.getElementById("form");
const strengthText = document.getElementById("passwordStrength");

function checkPassword(){

let pass = passwordInput.value;

let strongPattern =
/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$/;

if(pass.length === 0){
strengthText.innerText="";
}
else if(strongPattern.test(pass)){
strengthText.innerText="Strong Password";
strengthText.style.color="green";
}
else{
strengthText.innerText="Weak Password";
strengthText.style.color="red";
}

}

passwordInput.addEventListener("input",checkPassword);
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passError = document.getElementById("passError");

function validateName(){
let value=nameInput.value.trim();

if(value.length<3){
nameError.innerText="Name must be at least 3 characters";
return false;
}

nameError.innerText="";
return true;
}

function validateEmail(){
let pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!pattern.test(emailInput.value)){
emailError.innerText="Invalid email";
return false;
}

emailError.innerText="";
return true;
}

function validatePhone(){
let pattern=/^[0-9]{10}$/;

if(!pattern.test(phoneInput.value)){
phoneError.innerText="Phone must be 10 digits";
return false;
}

phoneError.innerText="";
return true;
}

nameInput.addEventListener("input",validateName);
emailInput.addEventListener("input",validateEmail);
phoneInput.addEventListener("input",validatePhone);
passwordInput.addEventListener("input",checkPassword);

toggle.addEventListener("click",()=>{
if(passwordInput.type==="password"){
passwordInput.type="text";
toggle.innerText="Hide";
}else{
passwordInput.type="password";
toggle.innerText="Show";
}
});

form.addEventListener("submit",(e)=>{
e.preventDefault();

if(!validateName() || !validateEmail() || !validatePhone()){
return;
}

let submission={
name:nameInput.value,
email:emailInput.value,
phone:phoneInput.value,
password:passwordInput.value
};

let submissions=JSON.parse(localStorage.getItem("submissions")) || [];

submissions.push(submission);

localStorage.setItem("submissions",JSON.stringify(submissions));

alert("Registration Successful!");

form.reset();
strengthBar.style.width="0%";
});