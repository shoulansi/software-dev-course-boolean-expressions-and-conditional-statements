/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasYo = false;
console.log("You are tasked with defeating the evil goblins. You were told they're in the mountains.");
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate to the dark mountains where the goblin's lair is. They notice you enter, as you go to draw your weapon, you realize. You don't have one. You get beat up.");
  console.log('LOSE');
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");

  const villageChoice1 = readline.question("Do you want to go to the 'tavern' or the 'shop'?");
  if (villageChoice1 === 'tavern'){
    console.log("You enter the blood of the vine tavern, the innkeeper is at the bar.");
    const tavernQuest1 = readline.question("Do you want to 'buy a room' or 'buy a drink'?");
       if (tavernQuest1 === 'buy a room'){
        console.log("You get a nice rest, waking up while dodging the dangers of the night.... and your quest...");
        console.log('LOSE');
      }   else if (tavernQuest1 === 'buy a drink'){
          console.log("You get a little too carried away with the drinks, start a bar fight, and get thrown into the streets, where you are robbed...");
          console.log('LOSE');
      }
    }else if (villageChoice1 === 'shop') {
    console.log("You enter the merchant shop, the owner is cleaning a shelf.");
    const villageChoice2 = readline.question("Do you want to 'buy a weapon' or 'buy a yo-yo'?");
      if (villageChoice2 === 'buy a weapon') {
        console.log("You purchase a finely crafted sword fit for fighting, you thank the shopkeeper and head out the door.");
        const weaponChoice1 = readline.question("Do you want to go to the 'tavern' or the 'mountains'?");
         if (weaponChoice1 === 'tavern') {
            console.log("You enter the blood of the vine tavern, the innkeeper is at the bar.");
            const tavernQuest2 = readline.question("Do you want to 'buy a room' or 'buy a drink'?");
            if (tavernQuest2 === 'buy a room'){
            console.log("You get a nice rest, waking up while dodging the dangers of the night.... and your quest...");
            console.log('LOSE');
          }   else if (tavernQuest2 === 'buy a drink') {
                console.log("You have one drink, then two, then three, before you get into a sword fight with a fellow patron, destroying the tavern in the process, you are arrested and thrown in a cell.");
                console.log("LOSE");
            }  
          
         }else if(weaponChoice1 === 'mountains') {
            console.log("You find you way to the goblins lair, sword in hand. You strike the goblin king, defeating him and causing the others to flee.");
            console.log("You return to the village, hailed as a hero.");
            console.log("WIN");
         }
        }else if (villageChoice2 === 'buy a yo-yo') {
          console.log("You see a finely crafted, yo-yo, calling to your very soul. You purchase the yo-yo, thanking the shopkeeper while leaving.");
          const weaponChoice2 = readline.question("Do you want to go to the 'tavern' or the 'mountains'?");
      
          if (weaponChoice2 === 'tavern') {
            console.log("You enter the blood of the vine tavern, the innkeeper is at the bar. He notices your cool new yo-yo.");
            const tavernQuest3 = readline.question("Do you want to 'buy a room' or 'buy a drink'?");
              if (tavernQuest3 === 'buy a room') {
                console.log("You dream of all the cool things you can do with your cool new yo-yo. As you blissfully sleep, the town is attacked by goblins. Your dreams were nice though...");
                console.log('LOSE');
              }   else if (tavernQuest3 === 'buy a drink') {
                  console.log("You get a few drinks in you, bringing you the confidence to show off your cool new yo-yo skills. You perform wonderfully until you have one too many, hit the barkeep in the head, then get your cool new yo-yo confiscated.");
                  console.log("MASSIVE LOSS");
              }
          } else if (weaponChoice2 === 'mountains') {
              console.log("You make your way to the goblin camp in the mountains with your cool new yo-yo. You walk into the camp with confidence and start performing tricks with your cool new yo-yo. The goblins all freeze and stare in amazement. The king walks up to you and appoints you new goblin king.");
              console.log("COOL NEW YO-YO EPIC WIN");
          }
        }
      
       
      
      }
    }else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/