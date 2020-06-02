const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ? ', (name) => {
  rl.question("What's an activity you like to do ? ",(activity) => {
    rl.question("What do you listen to while doing that activity ? ", (listen) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (mealTime) => {
        rl.question("What's your favourite thing to eat for that meal ? ", (meal) => {
          rl.question("Which sport is your absolute favourite ? ", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superPower) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${meal} for ${mealTime}, prefer ${sport} over any other sport, and is amazing at ${superPower}.`);
              rl.close();
              
            });
          });
        });
      });
    });
  });
});

