
// prologue -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var canvas1 = document.getElementById('canvas1')
  var video1 = document.getElementById('video1');
  var nextButton1 = document.getElementById('next-button1');

  // Event listener for video ending
  video1.addEventListener('ended', function() {
    nextButton1.removeAttribute('disabled');
  });

  // Event listener for button click
  nextButton1.addEventListener('click', function() {
    canvas1.style.display = 'none';
    video1.style.display = 'none';
    this.style.display = 'none'; // 'this' refers to nextButton1

  });
});

// pre scene 1 -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var canvas2 = document.getElementById('canvas2')
  var video2 = document.getElementById('video2');
  var nextButton2 = document.getElementById('next-button2');

  var yesButton = document.getElementById('canvas2-yes');
  var promptBox = document.getElementById('prompt-box');

  // Event listener for video ending
  video2.addEventListener('ended', function() {
    var prompt = document.getElementById('prompt-box')
    //shows the prompt
    prompt.style.display = 'flex'

  });


    // Add click event listener to the Yes button
  yesButton.addEventListener('click', function() {
      // Hide the prompt box
      promptBox.style.display = 'none';

      // Enable the next button
      nextButton2.removeAttribute('disabled');
  });

  // clears the scenario when you click NEXT
  nextButton2.addEventListener('click', function() {
    canvas2.style.display = 'none';
    video2.style.display = 'none';
    this.style.display = 'none'; // 'this' refers to nextButton1

  });
});