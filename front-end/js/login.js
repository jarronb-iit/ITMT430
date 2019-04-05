function validateForm(){
  var x = document.forms["email"]["pass"].value;
  if (x==""){
    alert("Please fill in the blank spaces!");
    return false;
  }
}
