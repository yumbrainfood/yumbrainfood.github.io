const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}




var goodchoices = 0;
var badchoices = 0;

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
    nextButton1.style.display = 'initial'
    nextButton1.textContent = "next";
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
      nextButton2.textContent = "next";

      nextButton2.style.display = 'initial'
      nextButton2.textContent = "next";
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
      goodchoices++;

      nextButton3.style.display = 'initial'
      nextButton3.textContent = "next";
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
      badchoices++;

      nextButton3.style.display = 'initial'
      nextButton3.textContent = "next";
  });

  // clears the scenario when you click NEXT
  nextButton3.addEventListener('click', function() {
    canvas3.style.display = 'none';
    video3.style.display = 'none';
    nextButton3.style.display = 'none'; 
    promptBox3.style.display = 'none';

  });
});


// CLASS CANCELLED SCENE 4 -------------------------------------------------------------------

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
      goodchoices++;

      nextButton4.style.display = 'initial';
      nextButton4.textContent = "next";
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
      badchoices++;

      nextButton4.style.display = 'initial';
      nextButton4.textContent = "next";
  });

  // clears the scenario when you click NEXT
  nextButton4.addEventListener('click', function() {
    canvas4.style.display = 'none';
    video4.style.display = 'none';
    nextButton4.style.display = 'none';
    promptBox4.style.display = 'none';

  });
});



// No FOOD SCENE 5 -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var canvas5 = document.getElementById('canvas5')
  var video5 = document.getElementById('video5');
  var nextButton5 = document.getElementById('next-button5');

  var goodButton5 = document.getElementById('canvas5-good');
  var badButton5 = document.getElementById('canvas5-bad');
  var promptBox5 = document.getElementById('prompt-box5');

  var goodnoti5 = document.getElementById('prompt5-good-noti')
  var badnoti5 = document.getElementById('prompt5-bad-noti')

  // Event listener for video ending
  video5.addEventListener('ended', function() {
    var prompt5 = document.getElementById('prompt-box5')
    //shows the prompt
    prompt5.style.display = 'flex'

  });


    // Add click event listener to the Yes button----------------------------------------
    goodButton5.addEventListener('click', function() {
      goodButton5.style.display = 'none';
      badButton5.style.display = 'none';
      
      goodnoti5.style.display = 'initial';

      // Enable the next button
      nextButton5.removeAttribute('disabled');
      goodchoices++;

      nextButton5.style.display = 'initial';
      nextButton5.textContent = "next";
  });

    // Add click event listener to the No button--------------------------------
    badButton5.addEventListener('click', function() {
      goodButton5.style.display = 'none';
      badButton5.style.display = 'none';

      //filter 
      incrementOpacity(filter);

      badnoti5.style.display = 'initial';

      // Enable the next button
      nextButton5.removeAttribute('disabled');
      badchoices++;

      nextButton5.style.display = 'initial';
      nextButton5.textContent = "next";
  });

  // clears the scenario when you click NEXT
  nextButton5.addEventListener('click', function() {
    canvas5.style.display = 'none';
    video5.style.display = 'none';
    nextButton5.style.display = 'none'; 
    promptBox5.style.display = 'none';

  });
});




// lay down SCENE 6 -------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
  var canvas6 = document.getElementById('canvas6');
  var video6 = document.getElementById('video6');
  var nextButton6 = document.getElementById('next-button6');

  var yesButton6 = document.getElementById('canvas6-good');
  var promptBox6 = document.getElementById('prompt-box6');


  var canvas7 = document.getElementById('canvas7');
  var canvas7message1 = document.getElementById('canvas7-message1');
  var canvas7message2 = document.getElementById('canvas7-message2');
  var canvas7message3 = document.getElementById('canvas7-message3');
  var canvas7message4 = document.getElementById('canvas7-message4');
  var canvas7message5 = document.getElementById('canvas7-message5');

  // Event listener for video ending
  video6.addEventListener('ended', function() {
    var prompt6 = document.getElementById('prompt-box6')
    //shows the prompt
    prompt6.style.display = 'flex'

  });


    // Add click event listener to the Yes button
  yesButton6.addEventListener('click', function() {
      // Hide the choice box
      yesButton6.style.display = 'none';
      // Enable the next button
      nextButton6.removeAttribute('disabled');
      nextButton6.textContent = "next";

      nextButton6.style.display = 'initial'
  });

  // clears the scenario when you click NEXT
  nextButton6.addEventListener('click', function() {
    canvas6.style.display = 'none';
    video6.style.display = 'none';
    nextButton6.style.display = 'none';
    promptBox6.style.display = 'none';

    setTimeout(function() {
        canvas7.style.display = 'initial';
        canvas7message1.style.display = 'block';
    }, 1000); 
    setTimeout(function() {
      canvas7message2.style.display = 'block';
    }, 3000); 
    setTimeout(function() {
      canvas7message3.style.display= 'block';
      canvas7message3.textContent = `Number of Good Thoughts : ${goodchoices}`;
    }, 5000); 
    setTimeout(function() {
      canvas7message4.style.display= 'block';
      canvas7message4.textContent = `Number of Bad Thoughts : ${badchoices}`;
    }, 7000); 

    if (goodchoices === 0) {
      setTimeout(function() {
        canvas7message5.style.display= 'block';
        canvas7message5.textContent = `You chose ${goodchoices} reactions that were good for your mind. The mind visualizer pro was created to help individuals make better decisions. Please continue to use our software so that you’re able to master your thoughts.`;
      }, 9000); 
    }

    if (goodchoices === 1) {
      setTimeout(function() {
        canvas7message5.style.display= 'block';
        canvas7message5.textContent = `You chose ${goodchoices} reaction that were good for your mind. The mind visualizer pro was created to help individuals make better decisions. Continued usage of our software is recommended so that you’re able to master your thoughts.`;
      }, 9000); 
    }

    if (goodchoices === 2) {
      setTimeout(function() {
        canvas7message5.style.display= 'block';
        canvas7message5.textContent = `You chose ${goodchoices} reactions that were good for your mind. The mind visualizer pro was created to help individuals make better decisions. You are on the right track. `;
      }, 9000); 
    }

    if (goodchoices === 3) {
      setTimeout(function() {
        canvas7message5.style.display= 'block';
        canvas7message5.textContent = `You chose ${goodchoices} reactions that were good for your mind. The mind visualizer pro was created to help individuals make better decisions. Considering your credible ability to distinguish between good and bad thoughts, we recommend you to help others that may benefit from our solutions.`;
      }, 9000); 
    }


});
});



