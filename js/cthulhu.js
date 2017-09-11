export let tamagotchi = {
  foodLevel: 10,
  playLevel: 10,
  sleepLevel: 10,
  poopLevel: 10,
  growthLevel: 6,
  healthLevel: 10,
  animalType: 'Cat',
  //playLevel  haveYouPlayedRecently()
  //sleepLevel  haveYouSlept()
  //growthLevel egg/baby/child/teen/adult/dead  haveYouGrown()
  //cleanPoop
  //healthLevel checkIfAlive() checkIfSick()
  setStatus: function() {
    const statusInterval = setInterval(() => {
      this.foodLevel--;
      this.playLevel--;
      this.sleepLevel--;
      this.poopLevel--;
      if (this.loseHealthLevel() == true) {
        clearInterval(statusInterval);
        return "Your Tamagotchi has lost a health level.";
      }
    }, 1000);
  },


loseHealthLevel: function() {
  if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0 || this.poopLevel <= 0) {
    this.healthLevel--;
    return true;
    }
    return false;
},

feed: function(amount) {
  let that = this;
  return function(food) {
    that.foodLevel += amount;
    return `The tamagotchi ate the ${food}! Food level goes up ${amount}!`;
  };
},

grow: function() {
  const test = setInterval(() => {
    this.growthLevel--;
    if (this.growthLevel <= 0) {
      //this.growthLevel = 'Your pet died';
      clearInterval(test);
    }
  }, 10000);
},

play: function(amount) {
  let that = this;
  return function(toy) {
    that.playLevel += amount;
    return `The tamagotchi played with the ${toy}! Play level goes up ${amount}!`;
  };
},

sleep: function(amount) {
  let that = this;
  return function(bed) {
    that.sleepLevel += amount;
    return `The tamagotchi went to sleep in the ${bed}. Sleep level goes up ${amount}!`;
  };
},

poop: function(amount) {
  let that = this;
  return function(toilet) {
    that.poopLevel += amount;
    return `The tamagotchi went to poop in the ${toilet}. Poop level goes up ${amount}!`;
  };
},


};

tamagotchi.eatSmall = tamagotchi.feed(5);
tamagotchi.eatMedium = tamagotchi.feed(10);
tamagotchi.eatLarge = tamagotchi.feed(15);
tamagotchi.eatPoop = tamagotchi.feed(-10);
tamagotchi.eatPowerUp = tamagotchi.feed(50);
tamagotchi.eatSpecialBonus = tamagotchi.feed(100);
tamagotchi.eatWeirdThing = tamagotchi.feed(Math.floor((Math.random() * 20) + 1));

tamagotchi.playSmall = tamagotchi.play(5);
tamagotchi.playMedium = tamagotchi.play(10);
tamagotchi.playLarge = tamagotchi.play(15);
tamagotchi.playSpecialBonus = tamagotchi.play(100);

tamagotchi.sleepSpecialBonus = tamagotchi.sleep(100);
tamagotchi.sleepSmall = tamagotchi.sleep(5);

tamagotchi.poopBig = tamagotchi.poop(100);
