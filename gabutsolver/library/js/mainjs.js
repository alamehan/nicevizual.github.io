//---------- Auto Popup Modal

$('#exampleModal').modal({
  show: true
})

//---------- Spinning Wheel

/* Sumber Library : http://dougtesting.net/ */

// Create new wheel object specifying the parameters at creation time.
let theWheel = new Winwheel({
  'numSegments': 32, // Specify number of segments.
  'outerRadius': 214, // Set radius to so wheel fits the background.
  'innerRadius': 68, // Set inner radius to make wheel hollow.
  'textFontSize': 11, // Set font size accordingly.
  'textMargin': 0, // Take out default margin.
  'segments': // Define segments including colour and text.
    [{
        'fillStyle': '#9E82EC',
        'text': 'Perbaiki barang rumah'
      },
      {
        'fillStyle': '#9E82EC',
        'text': 'Video call seseorang'
      },
      {
        'fillStyle': '#FCCB55',
        'text': 'Berolahraga/workout'
      },
      {
        'fillStyle': '#FCCB55',
        'text': 'Meneliti suatu topik'
      },
      {
        'fillStyle': '#2BB6E8',
        'text': 'Sumbang barang bekas'
      },
      {
        'fillStyle': '#2BB6E8',
        'text': 'Mempelajari trik sulap'
      },
      {
        'fillStyle': '#37CBA1',
        'text': 'Mendengarkan podcast'
      },
      {
        'fillStyle': '#37CBA1',
        'text': 'Membuat kerajinan DIY'
      },
      {
        'fillStyle': '#9E82EC',
        'text': 'Bermain card game'
      },
      {
        'fillStyle': '#9E82EC',
        'text': 'Berkebun/bertani'
      },
      {
        'fillStyle': '#FCCB55',
        'text': 'Bermain TTS'
      },
      {
        'fillStyle': '#FCCB55',
        'text': 'Memasak resep baru'
      },
      {
        'fillStyle': '#2BB6E8',
        'text': 'Ikut Kursus Online'
      },
      {
        'fillStyle': '#2BB6E8',
        'text': 'Membuka album lama'
      },
      {
        'fillStyle': '#37CBA1',
        'text': 'Sharing ide/skill'
      },
      {
        'fillStyle': '#37CBA1',
        'text': 'Mendengar musik klasik'
      },
      {
        'fillStyle': '#9E82EC',
        'text': 'Pergi hunting foto'
      },
      {
        'fillStyle': '#9E82EC',
        'text': 'Menelepon teman lama'
      },
      {
        'fillStyle': '#FCCB55',
        'text': 'Menanam sayuran/bunga'
      },
      {
        'fillStyle': '#FCCB55',
        'text': 'Membeli/meminjam buku'
      },
      {
        'fillStyle': '#2BB6E8',
        'text': 'Menulis artikel/jurnal'
      },
      {
        'fillStyle': '#2BB6E8',
        'text': 'Mengirim surat tangan'
      },
      {
        'fillStyle': '#37CBA1',
        'text': 'Bertemu orang baru'
      },
      {
        'fillStyle': '#37CBA1',
        'text': 'Mengatakan I Love You'
      },
      {
        'fillStyle': '#9E82EC',
        'text': 'Beri hadiah ke seseorang'
      },
      {
        'fillStyle': '#9E82EC',
        'text': 'Mengatur furnitur rumah'
      },
      {
        'fillStyle': '#FCCB55',
        'text': 'Menatap bintang'
      },
      {
        'fillStyle': '#FCCB55',
        'text': 'Mendaur ulang barang'
      },
      {
        'fillStyle': '#2BB6E8',
        'text': 'Menulis komentar positif'
      },
      {
        'fillStyle': '#2BB6E8',
        'text': 'Membuat scrapbook'
      },
      {
        'fillStyle': '#37CBA1',
        'text': 'Join dengan komunitas'
      },
      {
        'fillStyle': '#37CBA1',
        'text': 'Bermain board game'
      },
    ],
  'animation': // Define spin to stop animation.
  {
    'type': 'spinToStop',
    'duration': 5,
    'spins': 8,
    'callbackFinished': alertPrize,
    'callbackSound': playSound,
  }
});

// Vars used by the code in this page to do power controls.
let wheelPower = 0;
let wheelSpinning = false;
let audio = new Audio('assets/tick.mp3');

// -------------------------------------------------------
// Function to handle the onClick on the power buttons.
// -------------------------------------------------------
function powerSelected(powerLevel) {
  // Ensure that power can't be changed while wheel is spinning.
  if (wheelSpinning == false) {
    // Reset all to grey incase this is not the first time the user has selected the power.
    document.getElementById('pw1').className = "";
    document.getElementById('pw2').className = "";
    document.getElementById('pw3').className = "";

    // Now light up all cells below-and-including the one selected by changing the class.
    if (powerLevel >= 1) {
      document.getElementById('pw1').className = "pw1";
    }

    if (powerLevel >= 2) {
      document.getElementById('pw2').className = "pw2";
    }

    if (powerLevel >= 3) {
      document.getElementById('pw3').className = "pw3";
    }

    // Set wheelPower var used when spin button is clicked.
    wheelPower = powerLevel;

    // Light up the spin button by changing it's source image and adding a clickable class to it.
    document.getElementById('spin_button').src = "spin_on.png";
    document.getElementById('spin_button').className = "clickable";
  }
}

// -------------------------------------------------------
// Click handler for spin button.
// -------------------------------------------------------
function startSpin() {
  // Ensure that spinning can't be clicked again while already running.
  if (wheelSpinning == false) {
    // Based on the power level selected adjust the number of spins for the wheel, the more times is has
    // to rotate with the duration of the animation the quicker the wheel spins.
    if (wheelPower == 1) {
      theWheel.animation.spins = 3;
    } else if (wheelPower == 2) {
      theWheel.animation.spins = 8;
    } else if (wheelPower == 3) {
      theWheel.animation.spins = 15;
    }

    // Disable the spin button so can't click again while wheel is spinning.
    document.getElementById('spin_button').src = "assets/spin_off.png";
    document.getElementById('spin_button').className = "";

    // Begin the spin animation by calling startAnimation on the wheel object.
    theWheel.startAnimation();

    // Set to true so that power can't be changed and spin button re-enabled during
    // the current animation. The user will have to reset before spinning again.
    wheelSpinning = true;
  }
}

// -------------------------------------------------------
// Function for reset button.
// -------------------------------------------------------
function resetWheel() {
  theWheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
  theWheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
  theWheel.draw(); // Call draw to render changes to the wheel.

  document.getElementById('pw1').className = ""; // Remove all colours from the power level indicators.
  document.getElementById('pw2').className = "";
  document.getElementById('pw3').className = "";

  wheelSpinning = false; // Reset to false to power buttons and spin can be clicked again.
}

// -------------------------------------------------------
// Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
// note the indicated segment is passed in as a parmeter as 99% of the time you will want to know this to inform the user of their prize.
// -------------------------------------------------------
function alertPrize(indicatedSegment) {
  // Do basic alert of the segment text. You would probably want to do something more interesting with this information.
  window.alert("Hari ini kamu: " + indicatedSegment.text); // INI WINDOWS ALERT, BUKAN JAVASCRIPT ALERT YA
}

function playSound() {
  // Stop and rewind the sound (stops it if already playing).
  audio.pause();
  audio.currentTime = 0;

  // Play the sound.
  audio.play();
}

// Particle Background (Homepage)
