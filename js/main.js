

function calculatePriceForTheWork(event){
    event.preventDefault();


    let typeOfWork = document.getElementById("inputWork");
    let valueOfSelectedWork = typeOfWork.value;

    valueOfSelectedWork = parseFloat(valueOfSelectedWork);


    let hoursOfWork = document.getElementById("inputNumero").value;
    hoursOfWork = parseFloat(hoursOfWork);

    let price = (valueOfSelectedWork * hoursOfWork) + " " + "£";

    document.getElementById("final_price").innerHTML = "Il costo finale è di" + " " + price;
}