const totalBill = document.querySelector("#total-bill");
const cashGiven = document.querySelector("#cash-given");
const calcButton = document.querySelector("#calculate");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelector(".no-of-notes");

const availableDenominations = [2000,500,100,20,10,5,1];

calcButton.addEventListener("click",function inputValidation() {
     hideMessage();
    if  (totalBill.value > 0){
        if (cashGiven.value >= totalBill.value){
             const differenceValue = cashGiven.value - totalBill.value;
             calculateChange(differenceValue);
             console.log(differenceValue);
        }else{
            showMessage("Dear customer you need to pay in full");
        }

    }else{
        showMessage("Invalid Bill Amount");
    }
});

//200/1000 = 800

function calculateChange(differenceValue){
    for (i=0;i< availableDenominations.length;i++){
        const numberOfNotes = Math.trunc(differenceValue / availableDenominations[i]);
        differenceValue = differenceValue % availableDenominations[i]; 
        noOfNotes[i].innerText = numberOfNotes; 
    }

}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}