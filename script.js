let Title = document.querySelector(".title")
let StoryOpening = document.querySelector(".story-opening")
let Island1button = document.querySelector(".option1")
let Island2button = document.querySelector(".option2")
let Option1buttons = document.querySelector(".buttons1")
let BackButtons = document.querySelector(".backbuttons")
let Backbutton1 = document.querySelector(".back1")
let Backbutton2 = document.querySelector(".back2")
let ContinueButtons = document.querySelector(".contintuebuttons")
let Continuebutton1 = document.querySelector(".continue1")
let Continuebutton2 = document.querySelector(".continue2")
let IslandOne = document.querySelector(".option-one-screen")
let IslandTwo = document.querySelector(".option-two-screen")
let IslandOne1 = document.querySelector(".option-one")
let IslandTwo2 = document.querySelector(".option-two")
let EndText = document.querySelector(".endtext")


Island1button.onclick = function() {
  IslandOne.style.display = "block";
  StoryOpening.style.display = "none";
  Title.style.display = "none";
  Option1buttons.style.display ="none";
  Backbutton1.style.display = "block";
  Continuebutton1.style.display = "block";
};

Island2button.onclick = function() {
  IslandTwo.style.display = "block";
  StoryOpening.style.display = "none";
  Title.style.display = "none";
  Option1buttons.style.display ="none";
  Backbutton2.style.display = "block";
  Continuebutton2.style.display = "block";
};

Backbutton1.onclick = function() {
  IslandOne.style.display = "none";
  StoryOpening.style.display = "flex";
  Title.style.display = "block";
  Option1buttons.style.display = "block";
  Backbutton1.style.display = "none";
  Continuebutton1.style.display = "none";
};

Backbutton2.onclick = function() {
  IslandTwo.style.display = "none";
  StoryOpening.style.display = "flex";
  Title.style.display = "block";
  Option1buttons.style.display = "block";
  Backbutton2.style.display = "none";
  Continuebutton2.style.display = "none";
};

Continuebutton1.onclick = function() {
  IslandOne.style.display = "none";
  Backbutton1.style.display = "none";
  IslandOne1.style.display = "block";
  Continuebutton1.style.display = "none";
  EndText.style.display = "block"
};

Continuebutton2.onclick = function() {
  IslandTwo.style.display = "none";
  Backbutton2.style.display = "none";
  IslandTwo2.style.display = "block";
  Continuebutton2.style.display = "none";
  EndText.style.display = "block"
};