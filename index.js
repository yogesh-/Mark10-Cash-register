const totalBill = document.querySelector("#total-bill");
const cashGiven = document.querySelector("#cash-given");
const calcButton = document.querySelector("#calculate");
const message = document.querySelector("error-message");



calcButton.addEventListener("click",function inputValidation() {
    if  (totalBill > 0){
        if (cashGiven >= totalBill){
             const differenceValue = cashGiven - totalBill;
             console.log(differenceValue);
        }else{
            showMessage("Dear customer you need to pay in full");
        }

    }else{
        showMessage("Invalid Bill Amount");
    }
});


function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}