// If you prefer Codepen link is below
// https://codepen.io/raza403/pen/ZvapYO

function billingFunction(){
    if(document.getElementById("same").checked == true){
        document.getElementById("billingName").value = document.getElementById("shippingName").value;
        document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
    }
    else{
        document.getElementById("billingName").value = "";
        document.getElementById("billingZip").value = "";
    }
}