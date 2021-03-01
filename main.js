//Click handler for dog image
function dogInfo() {
  let x = document.getElementsByClassName("dogCard")[0].textContent;//.getElementsByTagName("P")[0];
  let lastIndex = x.lastIndexOf(" ");
  x = x.substring(0, lastIndex);
    alert(x);
}

//Click handler for dog button
let total = 0;
function dogButton() {
  total = total + 123.45;
  alert('Your total is: ' + '$'+ total);
  return;
  dogButton();
}


