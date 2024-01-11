const form=document.getElementById("registration form");
form.addEventListener("submit",function(event){
    event.preventDefault();

    const email=document.getElementById("email").value;
    const creditCardNumber=document.getElementById("creditcardnumber").value;
    const expiryDate=document.getElementById("expirydate").value;
    const cvv=document.getElementById("cvv").value;


    const creditCardPattern=/^\d{16}$/;
    if(!creditCardPattern.test(creditCardNumber)){
        alert("Inavalid Credit Card Number: It Should be 16 Digits.");
        return;
    }

    const expiryDatePattern=/^(0[1-9]|1[0-2])\/\d{2}$/;
    if(!expiryDatePattern.test(expiryDate)){
        alert("Invalid Expiry Date: Plaese use the format MM/YY");
        return;
    }

    const cvvPattern=/^\d{3}$/;
    if(!cvvPattern.test(cvv)){
        alert("Invalid Cvv: It should be a Three digit number.");
        return;
    }

    const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!emailPattern.test(email)){
        alert("Enter a valid Email.");
        return;
    }

    alert("Form Submitted Successfully.");

});