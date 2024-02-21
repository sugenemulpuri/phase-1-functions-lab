// Code your solution in this file!
function distanceFromHqInBlocks(yourStreet) {
    //returns the number of blocks given a value
    const homeStreet = 42;
    

    let distance = Math.abs(yourStreet - homeStreet);

    return distance;

  }

  distanceFromHqInBlocks(50);

  function distanceFromHqInFeet(yourFeet) {
    const feet = distanceFromHqInBlocks(yourFeet) * 264;

    return feet;

    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    let distance = Math.abs(start - destination);

    let feet = distance * 264;

    return feet;

  }

  function calculatesFarePrice(start, destination) {

    let feet = distanceTravelledInFeet(start, destination)

    //get distance in feet
  
    //first 400 feet are free
    if (feet < 400) {
      return 0;
    } else if(feet >= 400 && feet <= 2000) {
      //between 400 and 2000, .02 per foot
      return (feet - 400) * .02;
    }
    else if (feet >= 2000 && feet <= 2500) {

    //2000 - 2500 feet is flat fare of $25
    return 25;

    }
    else {
      return 'cannot travel that far';
    }
  }