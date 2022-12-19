//declare the grade function
const grades = []

//write a function name for the grades letter
function getLetterGrades(grades){
    //add an array of grades that will hold the output
    let lettergrade =grades.map(score => {
     //Use if else statements /conditions   
        if (score > 105){
            return "A";
        }else if (score < 80){
         return "B";
        }else if (score < 60){
            return "C";
        }else if (score < 50){
            return "D";
    
        }else if (score < 40){
            return "E"
        }
    })

//Console.log grade
console.log(lettergrade);

}
getLetterGrades([45,55,90,0])