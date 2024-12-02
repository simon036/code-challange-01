//function to check the speed
function checkSpeed(speed){ //constants declaring different factors 
    const speedLimit = 70; 
    const kmPerPoint = 5 ;
    const maxPoints = 12 ;
      
    if (speed <= speedLimit){ //condition for speed under limit and should return ok
        return "Ok";

    }
    // finction to calculate points

    const points =Math.floor((speed -speedLimit) / kmPerPoint);
if (points > maxPoints){ // condition to check if the licence should be suspended
    return "Your License is suspended";

}
return `Points: ${points}`; //returns points  if the licence is not suspended
     
}
//testing different speed values
console.log(checkSpeed(60));
console.log(checkSpeed(80));
console.log(checkSpeed(140));


