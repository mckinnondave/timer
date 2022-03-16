// INSTRUCTIONS
// 1. If user presses "b" we get a beep.
// 2. If user selects 1 - 9, a timer is set and will beep after that many seconds has passed.
// 3. User can close out of timer2 by pressing control c. They will receive a goodbye message.


const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {
  if (key === "\u0062") {
    console.log("BEEP!");
  }

  if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds`);
    setTimeout(() => {
      console.log("BEEP!");
    }, key * 1000);
  }

  if (key === '\u0003') {
    console.log("\nThanks for using me, ciao!\n");
    process.exit();
  }
});

console.log('after callback');