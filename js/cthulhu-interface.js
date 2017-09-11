import { tamagotchi } from './../js/cthulhu.js';

$(function (event) {
  event.preventDefault();
  $('#createAnimal').click(function() {
    var animalType = $('#animalType').val();
    var tamagotchiPet = new tamagotchi();
  });


  $('#feed').click(function() {
    var foodType = $('#foodType').val();
    //create function using foodType
    var foodFunction = tamagotchiPet + '.' +   foodType + '()';
    functionCall();
  });


  $('#sleep').click(function() {
    var sleepType = $('#sleepType').val();
    var sleepFunction = tamagotchiPet + '.' +   sleepType + '()';
    sleepFunction();
  });

  $('#play').click(function() {
    var playType = $('#playType').val();
    var playFunction = tamagotchiPet + '.' +   playType + '()';
    playFunction();
  });

  $('#poop').click(function() {
    var poopType = $('#poopType').val();
    var poopFunction = tamagotchiPet + '.' +   poopType + '()';
    poopFunction();
  });

  $('#getHealthLevel').click(function() {
    $('#health').text(tamagotchiPet.healthLevel);
  });


});
