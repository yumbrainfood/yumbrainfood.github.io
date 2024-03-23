
var filter = document.getElementById('filter')
function incrementOpacity(element) {
  // Get current opacity
  let currentOpacity = parseFloat(getComputedStyle(element).opacity);

  // Increment opacity by 25%
  let newOpacity = currentOpacity + 0.2;

  // Ensure opacity does not exceed 1
  if (newOpacity > 1) newOpacity = 1;

  // Apply the new opacity
  element.style.opacity = newOpacity;
}

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
      // Hide the choice box
      yesButton.style.display = 'none';
      // Enable the next button
      nextButton2.removeAttribute('disabled');
  });

  // clears the scenario when you click NEXT
  nextButton2.addEventListener('click', function() {
    canvas2.style.display = 'none';
    video2.style.display = 'none';
    nextButton2.style.display = 'none'; // 'this' refers to nextButton1
    promptBox.style.display = 'none';

  });
});


// MISS TRAIN SCENE 3 -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var canvas3 = document.getElementById('canvas3')
  var video3 = document.getElementById('video3');
  var nextButton3 = document.getElementById('next-button3');

  var goodButton3 = document.getElementById('canvas3-good');
  var badButton3 = document.getElementById('canvas3-bad');
  var promptBox3 = document.getElementById('prompt-box3');

  var goodnoti3 = document.getElementById('prompt3-good-noti')
  var badnoti3 = document.getElementById('prompt3-bad-noti')

  // Event listener for video ending
  video3.addEventListener('ended', function() {
    var prompt3 = document.getElementById('prompt-box3')
    //shows the prompt
    prompt3.style.display = 'flex'

  });


    // Add click event listener to the Yes button----------------------------------------
    goodButton3.addEventListener('click', function() {
      goodButton3.style.display = 'none';
      badButton3.style.display = 'none';
      
      goodnoti3.style.display = 'initial';

      // Enable the next button
      nextButton3.removeAttribute('disabled');
  });

    // Add click event listener to the No button--------------------------------
    badButton3.addEventListener('click', function() {
      goodButton3.style.display = 'none';
      badButton3.style.display = 'none';

      //filter 
      incrementOpacity(filter);

      badnoti3.style.display = 'initial';

      // Enable the next button
      nextButton3.removeAttribute('disabled');
  });

  // clears the scenario when you click NEXT
  nextButton3.addEventListener('click', function() {
    canvas3.style.display = 'none';
    video3.style.display = 'none';
    nextButton3.style.display = 'none'; // 'this' refers to nextButton1
    promptBox3.style.display = 'none';

  });
});


// CLASS CANCELLED SCENE 34 -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var canvas4 = document.getElementById('canvas4')
  var video4 = document.getElementById('video4');
  var nextButton4 = document.getElementById('next-button4');

  var goodButton4 = document.getElementById('canvas4-good');
  var badButton4 = document.getElementById('canvas4-bad');
  var promptBox4 = document.getElementById('prompt-box4');

  var goodnoti4 = document.getElementById('prompt4-good-noti')
  var badnoti4 = document.getElementById('prompt4-bad-noti')

  // Event listener for video ending
  video4.addEventListener('ended', function() {
    var prompt4 = document.getElementById('prompt-box4')
    //shows the prompt
    prompt4.style.display = 'flex'

  });


    // Add click event listener to the Yes button----------------------------------------
    goodButton4.addEventListener('click', function() {
      goodButton4.style.display = 'none';
      badButton4.style.display = 'none';
      
      goodnoti4.style.display = 'initial';

      // Enable the next button
      nextButton4.removeAttribute('disabled');
  });

    // Add click event listener to the No button--------------------------------
    badButton4.addEventListener('click', function() {
      goodButton4.style.display = 'none';
      badButton4.style.display = 'none';

      //filter 
      incrementOpacity(filter);

      badnoti4.style.display = 'initial';

      // Enable the next button
      nextButton4.removeAttribute('disabled');
  });

  // clears the scenario when you click NEXT
  nextButton4.addEventListener('click', function() {
    canvas4.style.display = 'none';
    video4.style.display = 'none';
    nextButton4.style.display = 'none'; // 'this' refers to nextButton1
    promptBox4.style.display = 'none';

  });
});
