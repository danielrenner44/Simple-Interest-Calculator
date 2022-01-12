//the compute function linked to the compute interest button
function compute()
{
    //pulls input value of "value" and assigns to var principal
    var principal = document.getElementById("principal").value;
    if(principal <=0){
        alert("Please enter a postive number");
        principal.focus();
        return false;
    }

    //pulls input value of "rate" and assigns to var rate
    var rate = document.getElementById("rate").value;

    //pulls input value of "years" and assigns to var years
    var years = document.getElementById("years").value;

    //multiplies prin. x years x rate / by 100 +og. prin. and assigns to var result
    var result = principal * years * rate /100;

    //adds years selected from drop down, to current date, displaying completed by year
    var years = new Date().getFullYear()+parseInt(years);

    //final display with highlights
    document.getElementById("p").innerHTML="If you deposit\<mark\>"+principal;
    document.getElementById("ir").innerHTML="At an Interst Rate of\<mark\>"+rate;
    document.getElementById("r").innerHTML="You will recieve an amount of\<mark\>"+result;
    document.getElementById("y").innerHTML="In the year\<mark\>"+years;
}

//displays the current interest rate selected on slider
function getSliderValue()
{
    var rate = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value
}