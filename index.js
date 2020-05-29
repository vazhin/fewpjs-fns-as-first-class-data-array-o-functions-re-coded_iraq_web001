
function wakeDog(dogName, dogBreed) {
<<<<<<< HEAD
  return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

function walkHome(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]

function exerciseDog(dogName, dogBreed) {
  let arrayOfSteps = [];
  for (let i = 0; i < 6; i++){
    routine[i](dogName, dogBreed);
    let step = routine[i]
    step(dogName, dogBreed);
=======
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
}
function walkDog(dogName, dogBreed) {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
}
function playWithDog(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}
function walkHomeDog(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
}
function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [
  wakeDog(dogName, dogBreed),
  leashDog(dogName, dogBreed),
  walkDog(dogName, dogBreed),
  playWithDog(dogName, dogBreed),
  walkHomeDog(dogName, dogBreed),
  unleashDog(dogName, dogBreed)
]

function exerciseDog(dogName, dogBreed) {
  for (let i = 0; i < routine.length; i++){
    let step = routine[i]
    step(dogName, dogBreed);
    let arrayOfSteps = [];
>>>>>>> c9fd57e963c5eb718eea0b7ed507d36e9bb6450d
    arrayOfSteps.push(step(dogName, dogBreed));
  }
  return arrayOfSteps;
}
