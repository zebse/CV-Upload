$(document).ready(function () {
    $('#university').chosen();
    $('#education').chosen();
    $('#study').chosen();
    $('#martial').chosen();
  });

const form = document.getElementById("form1");
const error1 = document.getElementById("name1");
const errorm = document.getElementById("name2");
const fname = document.getElementById("fname");
const mname = document.getElementById("mname");

form.addEventListener("submit", function(event){
  event.preventDefault();
  const validName = /^[a-zA-Z]+$/;
  const name1 = fname.value;
  const name2 = mname.value;

  //name validation
  if(validName.test(name1) == false){
    error1.textContent = "Please enter valid name";
    error1.style.display = "inline-block";
    return;
  }

  if(validName.test(name2) == false){
    errorm.textContent = "Please enter valid name";
    errorm.style.display = "inline-block";
    return;
  }

  form.submit();
  alert('form submitted Successfully!');
});