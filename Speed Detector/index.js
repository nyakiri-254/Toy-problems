//declare function for demerit points
function getDemeritPoints(excessSpeed) {
    let speedLimit = getDemeritPoints;
    //calculate excess speed
  
    const calculateExcessSpeed = excessSpeed.map(excessSpeed => {
  
      //use if ,else if statements
      if (excessSpeed < 70) {
        return "OK";
      } //if driver get 12 points he gets print written license suspended
      if (excessSpeed > 180) {
        return "license suspended";
  
      } else if (excessSpeed > 75) {
        return "One demerit point";
      } else if (excessSpeed > 80) {
        return "two demerit points";
        
      }
  
    })
    console.log(calculateExcessSpeed);
  }
  getDemeritPoints([200]);
  