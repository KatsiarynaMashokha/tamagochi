import { tamagotchi } from './../js/cthulhu.js';

describe('HungryBear', function() {
  let fuzzy = tamagotchi;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.playLevel = 10;
    fuzzy.sleepLevel = 10;
    fuzzy.name = "Fuzzy";
    fuzzy.setStatus();
    console.log(fuzzy.sleepLevel);

  });

  afterEach(function() {
    jasmine.clock().uninstall();
    fuzzy.sleepLevel = 10;
    fuzzy.foodLevel = 10;
    fuzzy.playLevel = 10;
    fuzzy.poopLevel = 10;



  });

  it('should have a name and all stat levels of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
    expect(fuzzy.playLevel).toEqual(10);
    expect(fuzzy.sleepLevel).toEqual(10);
    expect(fuzzy.poopLevel).toEqual(10);
    expect(fuzzy.healthLevel).toEqual(10);
    expect(fuzzy.growthLevel).toEqual(6);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
    expect(fuzzy.playLevel).toEqual(7);
    expect(fuzzy.sleepLevel).toEqual(7);
    expect(fuzzy.poopLevel).toEqual(7);
  });

  it('should return true if the food or play or sleep or poop level drops below or equal to zero', function() {
  fuzzy.foodLevel = 1;
  fuzzy.playLevel = 1;
  fuzzy.sleepLevel = 0;
  fuzzy.poopLevel = 1;
  expect(fuzzy.loseHealthLevel()).toEqual(true);
});

it('should get very hungry if 10 seconds pass without feeding', function() {
  jasmine.clock().tick(10001);
  expect(fuzzy.loseHealthLevel()).toEqual(true);
});

it('should return that the tamagotchi ate blueberries and the food level should go up 5', function() {
  expect(fuzzy.eatSmall("blueberries")).toEqual("The tamagotchi ate the blueberries! Food level goes up 5!");
  expect(fuzzy.foodLevel).toEqual(15);
});

it('should change a growth level by 1 after 10000', function() {
  fuzzy.grow();
  jasmine.clock().tick(10001);
  expect(fuzzy.growthLevel).toEqual(5);
});

it('should return that the tamagotchi was played with and the play level should go up 5', function() {
  expect(fuzzy.playSmall("slide")).toEqual("The tamagotchi played with the slide! Play level goes up 5!");
  expect(fuzzy.playLevel).toEqual(15);
});

it('should return the tamagotchi sleep level of 15 after going to sleep for 5 units', function() {
  expect(fuzzy.sleepSmall("bed")).toEqual('The tamagotchi went to sleep in the bed. Sleep level goes up 5!');
  expect(fuzzy.sleepLevel).toEqual(15);
});

it('should return the tamagotchi poop level of 110 after going to poop for 100 units', function() {
  expect(fuzzy.poopBig("toilet")).toEqual('The tamagotchi went to poop in the toilet. Poop level goes up 100!');
  expect(fuzzy.poopLevel).toEqual(110);
});



});
