let arrayScontiValidi = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let arrayScontiUtilizzati = [];


let arrayWorkDonePreviusly = [
    {
        img : `src="./img/cabin.png" alt="log cabin"`,
        work: "Cabin Website"
    },
    {
        img : `src="./img/cake.png" alt="foto completo verde"`,
        work: "Cake Website"
    },
    {
        img : `src="./img/circus.png" alt="log cabin"`,
        work: "Circus Website"
    },
    {
        img : `src="./img/game.png" alt="gamepad"`,
        work: "Game Website"
    },
    {
        img : `src="./img/safe.png" alt="grey safe"`,
        work: "Safe Website"
    },
    {
        img : `src="./img/submarine.png" alt="yellow submarine"`,
        work: "Submarine Website"
    },

]

arrayWorkDonePreviusly.forEach(function (arrayWorkDonePreviusly) {

    let card = 
    `<div class="col-lg-4 col-md-6 col-12 mb-5 card-hov">
        <img class="img-fluid" ${arrayWorkDonePreviusly.img}">

        <div class="text-center border pt-2 shadow">
            <h5>${arrayWorkDonePreviusly.work}</h5>
            <div class="pb-2">
                <button type="button" class="btn btn-info m-2">Preview</button>
                <button type="button" class="btn btn-outline-info m-2">Visit site</button>
            </div>
        </div>
    </div>`

    document.getElementById("card_row").innerHTML += card;

});




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

        document.getElementById("discount_box").innerHTML = `<label for="inputCodeDiscount" class="form-label">Discount Code</label>
        <input type="text" class="form-control" id="inputCodeDiscount" value="${discountInsert}"> `;
    } 
    else if(arrayScontiValidi.includes(discountInsert) && arrayScontiUtilizzati.includes(discountInsert)){
        alert("Hai già utilizzato questo codice!");
        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + price + " " + "£";

        document.getElementById("discount_box").innerHTML = `<label for="inputCodeDiscount" class="form-label">Discount Code</label>
        <input type="text" class="form-control text-danger" id="inputCodeDiscount" value="${discountInsert}"> `;
    }
    else if(!arrayScontiValidi.includes(discountInsert) && discountInsert != ""){
        alert("Il codice inserito non è valido");
        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + price + " " + "£";

        document.getElementById("discount_box").innerHTML = `<label for="inputCodeDiscount" class="form-label">Discount Code</label>
        <input type="text" class="form-control text-danger" id="inputCodeDiscount" value="${discountInsert}"> `;
    }
    else {
        document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + price + " " + "£";
    }

}