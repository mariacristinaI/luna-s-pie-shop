// PIES Page
let numberOfPies = [1, 2];
for (let i = 0; i < numberOfPies.length; i++) {
    console.log(numberOfPies[i]);
};

window.addEventListener("DOMContentLoaded", function(e){
    const orderButtons = document.querySelectorAll("button[data-order]");
    orderButtons.forEach(function(button){

        button.addEventListener("click", function(e){
            const button = e.currentTarget;
            const container = button.parentNode;

            const order = {
                id: button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText,
                price: container.querySelector(".price").innerText,
                desc: container.querySelector(".desc").innerText
            };

            localStorage.setItem("order", JSON.stringify(order));

            const url = window.location.href.replace("pies.html", "order.html");
            window.location.href = url;
        });
    });
    console.log("The pies are loaded.");
});

const today = new Date();
let currentYear = today.getFullYear();
document.getElementById("year").innerHTML = currentYear;