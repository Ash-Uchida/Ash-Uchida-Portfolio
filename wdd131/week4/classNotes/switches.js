// a switch is an shortcut for if/else statments

function door(state){
    let result = "Unkouwn"

    switch(state){
        case 0:
            result = "Closed";
            break;
        case 1:
            result = "Open";
            break;
    }
    return result;
}

// or They are the same thing

function door(state){
    switch(state){
        case 0:
            return "Closed";
        case 1:
            return "Open";
        default:
            // return "Invaild State";
            throw new Error("invaild door state");
    }
}
// ------------------------------------------------------------

function fruitColor(fruit) {
    let color = "unkouwn";
    switch (fruit){
        case "apple":
        case "cherry":
        case "strawberry":
            color = "red";
            break;

        case "banana":
        case "lemon":
            color = "yellow";
            break;

        default:
            break;
    }
    return color;
}
// ------------------------------------------------------------

function grade(score){
    let grade = "Invalid Score";
    switch (true) {
        case score > 100:
            break;
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        case score >= 0:
            grade = "F";
            break;

        default:
            break;
    }
    return grade;
}

// ------------------------------------------------------------\

console.log("grade(90 ->", grade(90));