function studentGrade(){ //declaring the function for student grades
    let marks=39; // declaring the variable for the marks
    //using switch statement to determine the grade
    switch (true){
        case marks >79:
            return "A";
            case marks >=60:
                return "B";
                case marks >=49:
                    return "C";
                    case marks >=40:
                        return "D";
                        default:
                            return "E"

    }
    
}
console.log(studentGrade()); //testing the function
