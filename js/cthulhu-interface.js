import { tamagotchi } from './../js/cthulhu.js';

$(function () {
  $('#createAnimal').submit(function(pickles) {
    pickles.preventDefault();
    let animalName = $('#animalName').val();
    //let tamagotchi = tamagotchi;
  });


  $('#feed').click(function() {
    let foodType = $('#foodType').val();
    //create function using foodType
    let foodFunction = tamagotchi + '.' +   foodType + '()';
    foodFunction();
    console.log(tamagotchi.foodLevel);

  });


  $('#sleep').click(function() {
    let sleepType = $('#sleepType').val();
    let sleepFunction = tamagotchi + '.' +   sleepType + '()';
    sleepFunction();
    console.log(tamagotchi.sleepLevel);

  });

  $('#play').click(function() {
    let playType = $('#playType').val();
    let playFunction = tamagotchi + '.' +   playType + '()';
    console.log(tamagotchi.playLevel);
    playFunction();

  });

  $('#poop').click(function() {
    let poopType = $('#poopType').val();
    console.log(poopType);
    let poopFunction = 'tamagotchi' + '.' +   poopType + '();';
    poopFunction;
    // tamagotchi.poopBig();
    console.log(poopFunction);
    return poopFunction;

  });

  $('#getHealthLevel').click(function() {
    $('#healthText').text(tamagotchi.healthLevel);
    $('#sleepText').text(tamagotchi.sleepLevel);
    $('#foodText').text(tamagotchi.foodLevel);
    $('#playText').text(tamagotchi.playLevel);
    $('#poopText').text(tamagotchi.poopLevel);
    console.log(tamagotchi.healthLevel);
  });




});
