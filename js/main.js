let arrayScontiValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let arrayScontiUtilizzati = [];












//--------FUNZIONI--------

function calculatePriceForTheWork(event){
    event.preventDefault();

    let discountInsert = document.getElementById("inputCodeDiscount").value;

    let typeOfWork = document.getElementById("inputWork");
    let valueOfSelectedWork = typeOfWork.value;

    valueOfSelectedWork = parseFloat(valueOfSelectedWork);


    let hoursOfWork = document.getElementById("inputNumero").value;
    hoursOfWork = parseFloat(hoursOfWork);

    let price = (valueOfSelectedWork * hoursOfWork);
    price = parseFloat(price).toFixed(2);

    let discountedPrice = price - (price * 25 / 100);
    discountedPrice = parseFloat(discountedPrice).toFixed(2);

    if (discountInsert == "YHDNU32") {

        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + `<span class="text-decoration-line-through">${price} £</span>` + " " + discountedPrice + " " + "£";

    }
    else {
        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + price + " " + "£";
    }

}