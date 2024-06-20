//Pull ten times:
function tenPull() {
  let threeStarCount = 0;
  let fourStarCount = 0;
  let fiveStarCount = 0;

  for (let i = 0; i < 10; i++) {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    if (randomNumber <= 0.01) fiveStarCount++;
    else if (randomNumber <= 0.2) fourStarCount++;
    else threeStarCount++;
  }
  console.log(`Results of 10 pull:`);
  console.log(`Three-star units: ${threeStarCount}`);
  console.log(`Four-star units: ${fourStarCount}`);
  console.log(`Five-star units: ${fiveStarCount}`);
}

//Pull until you hit a five-star:
function pullSend() {
  let pullCount = 0;

  while (true) {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    pullCount++;

    // If user hits 80 pulls and doesn't get a five star, they hit pity.
    if (pullsCount === 80) {
      console.log(
        `You hit pity and pulled a five-star unit in ${pullsCount} pulls!`
      );
      break;
    }

    if (randomNumber <= 0.01) {
      console.log(`You pulled a five-star unit in ${pullCount} pulls!`);
      break; // Exit the loop if a five-star unit is pulled
    } else if (randomNumber <= 0.2) {
      console.log("You pulled a four-star unit!");
    } else {
      console.log("You pulled a three-star unit!");
    }
  }
}
