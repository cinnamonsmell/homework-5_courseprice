function saleStep() {
    let step = document.getElementById("step").value
    let sale = document.getElementById("sale")
    sale.innerHTML = step + "%"
}

function coursePrice() {
    let courseName = document.getElementById("courseName").value;
    let coursePrice = document.getElementsByClassName("price")[0];
    let step = document.getElementById("step").value
    const PYTHON_PRICE = 12000000;
    const FRONT_PRICE = 14000000;
    const UX_PRICE = 16000000;
    let bestPrice;

    if (courseName == "Python") {
         bestPrice = PYTHON_PRICE;
    } else if (courseName == "Front") {
         bestPrice = FRONT_PRICE;
    } else if (courseName == "UX") {
         bestPrice = UX_PRICE;
    } else {
        coursePrice.value = "";
    }
    let finalPrice = bestPrice * (100 - step) / 100;
    coursePrice.value = finalPrice
    saleStep()
}