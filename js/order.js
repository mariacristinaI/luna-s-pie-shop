window.addEventListener("DOMContentLoaded", function(e){

    let locationBox = document.querySelector("#location");

    let location = {
        latitude: "unknown",
        longitude: "unknown"
    };

    window.navigator.geolocation.getCurrentPosition(
        function(position) {
            location = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            locationBox.value = JSON.stringify(location);
            console.log(`latitude: ${position.coords.latitude}`);
            console.log(`longitude: ${position.coords.longitude}`);
        },
        function(error) {
            locationBox.value = JSON.stringify(location);
            console.log("Error or user did not share location.");
        }
    );

    const order = localStorage.getItem("order");

    if(order) {
        const pieOrder = JSON.parse(order);
        const orderInput = document.querySelector("#pie-order");
        orderInput.value = order;
        const pie = document.querySelector(".pie");
            const title = pie.querySelector(".title");
            const price = pie.querySelector(".price");
            const desc = pie.querySelector(".desc");

            title.innerText = pieOrder.title;
            price.innerText = pieOrder.price;
            desc.innerText= pieOrder.desc;

            const img = pie.querySelector("img");
            img.setAttribute("src", `assets/images/pies/${pieOrder.id}.webp`);
            img.setAttribute("alt", pieOrder.title);
    }
});