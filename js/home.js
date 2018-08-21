'use strict';

var qArr = [];

var text = [
  'Question 1: Which image best describes you?',
  'Question 2: Which city is your perfect vacation destination?',
  'Question 3: What is your favorite food?',
  'Question 4: What do you want to be when you grow up?',
  'Question 5: Who is your favorite artist/band/music?',
  'Question 6: What is your perfect weekend activity?',
  'Question 7: What is your spirit/favorite animal?',
  'Question 8: What is your favorite app?',
  'Question 9: What is your favorite color?'
];

function Answers(descriptor, path, staff) {
  this.descriptor = descriptor;
  this.path = path;
  this.staff = staff;
}

function Questions(text) {
  this.text = text;
  qArr.push(this);
  this.qAnswersArr = [];
}

var question1 = new Questions(text[0]);
var question2 = new Questions(text[1]);
var question3 = new Questions(text[2]);
var question4 = new Questions(text[3]);
var question5 = new Questions(text[4]);
var question6 = new Questions(text[5]);
var question7 = new Questions(text[6]);
var question8 = new Questions(text[7]);
var question9 = new Questions(text[8]);

var answer1 = new Answers('Jumpy Nemo', 'img/michelle/michelle.gif', 'Michelle');
question1.qAnswersArr.push(answer1);
var answer2 = new Answers('Flexing Man', 'img/justin/justin-flexing.gif', 'Justin');
question1.qAnswersArr.push(answer2);
var answer3 = new Answers('Inhaling Sweets', 'img/joanna/joanna-gif.gif', 'Joanna');
question1.qAnswersArr.push(answer3);
var answer4 = new Answers('Starry-Eyed Sailer Moon', 'img/suzanne/suzanna-gif.gif', 'Suzanne');
question1.qAnswersArr.push(answer4);
var answer5 = new Answers('San Diego, Califonia', 'img/michelle/san-diego.jpg', 'Michelle');
question2.qAnswersArr.push(answer5);
var answer6 = new Answers('Maui, Hawaii', 'img/justin/maui.jpg', 'Justin');
question2.qAnswersArr.push(answer6);
var answer7 = new Answers('Amalfi Coast, Italy', 'img/joanna/amalfi-coast.jpg', 'Joanna');
question2.qAnswersArr.push(answer7);
var answer8 = new Answers('Home', 'img/suzanne/suzanna-home.jpg', 'Suzanne');
question2.qAnswersArr.push(answer8);
var answer9 = new Answers('High-quality Milk Chocolate', 'img/michelle/milkchocolate.jpg', 'Michelle');
question3.qAnswersArr.push(answer9);
var answer10 = new Answers('Fajitas', 'img/justin/fajitas.jpg', 'Justin');
question3.qAnswersArr.push(answer10);
var answer11 = new Answers('Thai Curry', 'img/joanna/thai-curry.jpg', 'Joanna');
question3.qAnswersArr.push(answer11);
var answer12 = new Answers('Biscuits and Gravy', 'img/suzanne/suzanna-biscuits-and-gravy.jpg', 'Suzanne');
question3.qAnswersArr.push(answer12);
var answer13 = new Answers('Big Sister', 'img/michelle/big-sister.jpg', 'Michelle');
question4.qAnswersArr.push(answer13);
var answer14 = new Answers('Astronaut', 'img/justin/astronaut.jpg', 'Justin');
question4.qAnswersArr.push(answer14);
var answer15 = new Answers('Doctor', 'img/joanna/doctor.jpg', 'Joanna');
question4.qAnswersArr.push(answer15);
var answer16 = new Answers('Ballerina', 'img/suzanne/suzanna-ballerina.jpg', 'Suzanne');
question4.qAnswersArr.push(answer16);
var answer17 = new Answers('Walk the Moon', 'img/michelle/walk-the-moon.jpg', 'Michelle');
question5.qAnswersArr.push(answer17);
var answer18 = new Answers('Beautiful Eulogy', 'img/justin/beautiful-eulogy.jpg', 'Justin');
question5.qAnswersArr.push(answer18);
var answer19 = new Answers('Roisin Murphy', 'img/joanna/roisin-murphy.jpg', 'Joanna');
question5.qAnswersArr.push(answer19);
var answer20 = new Answers('Glass Animals', 'img/suzanne/suzanna-glass-animals.jpg', 'Suzanne');
question5.qAnswersArr.push(answer20);
var answer21 = new Answers('Escape Room', 'img/michelle/escape-room.jpg', 'Michelle');
question6.qAnswersArr.push(answer21);
var answer22 = new Answers('Sleeping', 'img/justin/sleep.jpg', 'Justin');
question6.qAnswersArr.push(answer22);
var answer23 = new Answers('Beach Time', 'img/joanna/beach-time.jpg', 'Joanna');
question6.qAnswersArr.push(answer23);
var answer24 = new Answers('Riding Roller-coasters', 'img/suzanne/suzanna-roller-coaster.jpg', 'Suzanne');
question6.qAnswersArr.push(answer24);
var answer25 = new Answers('Dolphin', 'img/michelle/dolphin.jpg', 'Michelle');
question7.qAnswersArr.push(answer25);
var answer26 = new Answers('Creepy Wispy Dog', 'img/justin/justin-gif.gif', 'Justin');
question7.qAnswersArr.push(answer26);
var answer27 = new Answers('German Sheperd', 'img/joanna/german-sheperd.jpg', 'Joanna');
question7.qAnswersArr.push(answer27);
var answer28 = new Answers('Cat', 'img/suzanne/cat.jpg', 'Suzanne');
question7.qAnswersArr.push(answer28);
var answer29 = new Answers('Minimal Sudoku', 'img/michelle/minimal-sudoku.png', 'Michelle');
question8.qAnswersArr.push(answer29);
var answer30 = new Answers('Amazon', 'img/justin/amazon-logo.png', 'Justin');
question8.qAnswersArr.push(answer30);
var answer31 = new Answers('Trello', 'img/joanna/trello.png', 'Joanna');
question8.qAnswersArr.push(answer31);
var answer32 = new Answers('Netflix', 'img/suzanne/netflix.jpg', 'Suzanne');
question8.qAnswersArr.push(answer32);
var answer33 = new Answers('Purple', 'img/michelle/purple.jpg', 'Michelle');
question9.qAnswersArr.push(answer33);
var answer34 = new Answers('Blue', 'img/justin/blue.jpg', 'Justin');
question9.qAnswersArr.push(answer34);
var answer35 = new Answers('Lime Green', 'img/joanna/lime-green.jpg', 'Joanna');
question9.qAnswersArr.push(answer35);
var answer36 = new Answers('Gray', 'img/suzanne/gray.jpg', 'Suzanne');
question9.qAnswersArr.push(answer36);

function render() {
  for (var i = 0; i < qArr.length; i++) {
    var question = document.getElementsByTagName('h2')[i];
    question.textContent = qArr[i].text;
    var michelleImg = document.getElementsByClassName('michelleImg')[i];
    var michelleText = document.getElementsByClassName('michelleText')[i];
    var justinImg = document.getElementsByClassName('justinImg')[i];
    var justinText = document.getElementsByClassName('justinText')[i];
    var suzanneImg = document.getElementsByClassName('suzanneImg')[i];
    var suzanneText = document.getElementsByClassName('suzanneText')[i];
    var joannaImg = document.getElementsByClassName('joannaImg')[i];
    var joannaText = document.getElementsByClassName('joannaText')[i];
    for(var j = 0; j < qArr[i].qAnswersArr.length; j++) {
      if(qArr[i].qAnswersArr[j].staff === 'Michelle') {
        michelleImg.src = qArr[i].qAnswersArr[j].path;
        michelleText.textContent = qArr[i].qAnswersArr[j].descriptor;
      } else if (qArr[i].qAnswersArr[j].staff === 'Justin') {
        justinImg.src = qArr[i].qAnswersArr[j].path;
        justinText.textContent = qArr[i].qAnswersArr[j].descriptor;
      } else if (qArr[i].qAnswersArr[j].staff === 'Suzanne') {
        suzanneImg.src = qArr[i].qAnswersArr[j].path;
        suzanneText.textContent = qArr[i].qAnswersArr[j].descriptor;
      } else if (qArr[i].qAnswersArr[j].staff === 'Joanna') {
        joannaImg.src = qArr[i].qAnswersArr[j].path;
        joannaText.textContent = qArr[i].qAnswersArr[j].descriptor;
      }
    }
  }
}

// constructor for staff member object with name, img, bio, then push to staff array
function Staff(name, img, bio) {
  this.name = name;
  this.img = img;
  this.bio = bio;
  staffArr.push(this);
}

var staffArr = [];

//create staff objects for each staff member
var michelle = new Staff('Michelle', 'img/michelle/michelle-portrait.png', 'Michelle is your Spirit Animal');
var justin = new Staff('Justin', 'img/justin/justin-flexing.gif', 'Justin is your Spirit Animal');
var joanna = new Staff('Joanna', 'img/joanna/joanna-profile.png', 'Joanna is your Spirit Animal');
var suzanne = new Staff('Suzanne', 'img/suzanne/suzanne-profile.png', 'Suzanne is your Spirit Animal');

// Event listener for submit button that will tally answers
document.getElementById('button').addEventListener('click', function() {
  // Variables to keep tally of answers that pertain to Staff member
  var michelleAnswers = 0;
  var justinAnswers = 0;
  var joannaAnswers = 0;
  var suzanneAnswers = 0;

  for (var i = 0; i <= 8; i++) {
    console.log(`question ${i + 1}`);
    if(document.getElementsByClassName('michelle')[i].checked) {
      michelleAnswers++;
      console.log('a1 checked');
    } else if(document.getElementsByClassName('justin')[i].checked) {
      justinAnswers++;
      console.log('a2 checked');
    } else if(document.getElementsByClassName('joanna')[i].checked) {
      joannaAnswers++;
      console.log('a3 checked');
    } else if(document.getElementsByClassName('suzanne')[i].checked) {
      suzanneAnswers++;
      console.log('a4 checked');
    } else {
      return alert('You must have a selection for each question!');
    }
  }
  //Place answer tallies into new array
  var staffAnswerArr = [michelleAnswers, justinAnswers, joannaAnswers, suzanneAnswers];
  //Determine which staff had most votes
  var finalAnswer = staffAnswerArr.indexOf(Math.max.apply(Math, staffAnswerArr));
  localStorage.setItem('staffWinner', JSON.stringify(staffArr[finalAnswer]));

  location.href = 'results.html';
});

render();
