let arrayScontiValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let arrayScontiUtilizzati = [];












//--------FUNZIONI--------

function calculatePriceForTheWork(event){
    event.preventDefault();

    let typeOfWork = document.getElementById("inputWork");
    let valueOfSelectedWork = typeOfWork.value;

    valueOfSelectedWork = parseFloat(valueOfSelectedWork);


    let hoursOfWork = document.getElementById("inputNumero").value;
    hoursOfWork = parseFloat(hoursOfWork);

    let price = (valueOfSelectedWork * hoursOfWork);
    price = parseFloat(price).toFixed(2);

    // sezione per individuare e calcolare sconto
    
    let discountInsert = document.getElementById("inputCodeDiscount").value;

    let discountedPrice = price - (price * 25 / 100);
    discountedPrice = parseFloat(discountedPrice).toFixed(2);
    

    if (arrayScontiValidi.includes(discountInsert) && !arrayScontiUtilizzati.includes(discountInsert)) {

        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + `<span class="text-decoration-line-through">${price} £</span>` + " " + discountedPrice + " " + "£";
        arrayScontiUtilizzati.push(discountInsert);
    } 
    else if(arrayScontiValidi.includes(discountInsert) && arrayScontiUtilizzati.includes(discountInsert)){
        alert("Hai già utilizzato questo codice!");
        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + price + " " + "£";
        document.getElementById("inputCodeDiscount").innerHTML = `<span class="text-danger">${discountInsert}</span>`;
    }
    else if(!arrayScontiValidi.includes(discountInsert)){
        alert("Il codice inserito non è valido");
        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + price + " " + "£";
        document.getElementById("inputCodeDiscount").innerHTML = `<span class="text-danger">${discountInsert}</span>`;
    }
    else {
        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + price + " " + "£";
    }

}