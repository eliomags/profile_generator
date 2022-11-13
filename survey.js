const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :) \n', (answer1) => {
  rl.question('What\'s an activity you like doing? \n', (answer2) => {
    rl.question('What do you listen to while doing that? \n', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) \n', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? \n', (answer5) => {
          rl.question('Which sport is your absolute favourite? \n', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! \n', (answer7) => {
   let profile = `Hi, I am ${answer1}. I love listening to ${answer3} while ${answer2}. I need to have ${answer5} for my ${answer4}. I am a big ${answer6} fan. If you mess with me i may use ${answer7} against you.` 
  console.log(profile);
  rl.close();
});
});
});
});
});
});
});


/* Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.

What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/