$(function(){
  console.log('DOM is ready, javascript loading!')

  /**Mouse Enter and Leave Function (zoom in and out)**/
  $('img').mouseenter(function(){
    console.log('mouse has entered')
    $(this).fadeTo('slow', .75)
  }).mouseleave(function(){
    console.log('mouse has left')
    $(this).fadeTo('fast',1)
  })

  /**Click Event adding to cart total**/
  let total = 0;
  $(".cardButton").click(function(){
    total = total + 123.45;
    let num = total.toFixed(2);
    console.log(num);
    $(".checkout-price").text('$' + num);
  })

});





//Click handler for dog image
/**function dogInfo() {
  /**let x = document.getElementsByClassName("dogCard")[0].textContent;//.getElementsByTagName("P")[0];
  let lastIndex = x.lastIndexOf(" ");
  x = x.substring(0, lastIndex);
    alert(x);
}**/

//Click handler for dog button
/**let total = 0;
function dogButton() {
  /**total = total + 123.45;
  alert('Your total is: ' + '$'+ total);
  return;
  dogButton();
}
**/
