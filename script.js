$(document).ready(function () {
  $('#university').chosen();
  $('#education').chosen();
  $('#study').chosen();
  $('#martial').chosen();
});

const form = document.getElementById("form1");
const error1 = document.getElementById("name1");
const errorm = document.getElementById("name2");
const error3 = document.getElementById("name3");
const fname = document.getElementById("fname");
const mname = document.getElementById("mname");
const lname = document.getElementById("lname");
const cv = document.getElementById("cv");
const cverror = document.getElementById("cverr");
const typeError = document.getElementById("type");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const validName = /^[a-zA-Z]+$/;
  const name1 = fname.value;
  const name2 = mname.value;
  const name3 = lname.value;

  //name validation
  if (validName.test(name1) == false) {
    error1.textContent = "Please enter valid name";
    error1.style.display = "inline-block";
    error1.scrollIntoView({ behavior: 'smooth', block: 'start' });
    fname.classList.add('input-error');
    return;
  }else{
    error1.textContent = "";
    error1.style.display = "none";
    fname.classList.remove('input-error');
  }

  if (validName.test(name2) == false) {
    errorm.textContent = "Please enter valid name";
    errorm.style.display = "inline-block";
    errorm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    mname.classList.add('input-error');
    return;
  }

  if (validName.test(name3) == false) {
    error3.textContent = "Please enter valid name";
    error3.style.display = "inline-block";
    error3.scrollIntoView({ behavior: 'smooth', block: 'start' });
    lname.classList.add('input-error');
    return;
  }

  //CV file size valdation
  const file = cv.files[0];
  const fileSize = file.size / (1024 * 1024);
  if (fileSize > 5) {
    cverror.textContent = "Your CV file size should not be more than 5MB";
    cverror.style.display = "inline-block";
    return;
  }

  //CV file type validation
  const allowedExtension = "pdf";
  const fileType = file.type.toLowerCase();
  const validFileType = fileType === "application/pdf" || fileType.endsWith(`.${allowedExtension}`);

  if (!validFileType) {
    //alert("Your CV Should be in PDF format.");
    typeError.textContent = "Your CV should be in PDF format";
    typeError.style.display = "inline-block";
    return;
  }

  form.submit();
  alert('form submitted Successfully!');
});

function validateFirstName(){
  
}