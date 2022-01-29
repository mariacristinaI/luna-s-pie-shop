// HOME Page
function greet() {
    let name = "Luna";
    if (name === "Luna"){
        console.log("Hello customer! Go to the Pies page.");
    } else {
        console.log("The cat is missing?");
    }
}

greet();
function goodbye() {
    return "See you there!";
}
let message = goodbye();
console.log(message);

const today = new Date();
let currentYear = today.getFullYear();
document.getElementById("year").innerHTML = currentYear;