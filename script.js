// var meterUnit= document.querySelector(".input");
// var centiMeterUnit = document.querySelector(".output")




// meterUnit.addEventListener('input', function(){
//     let input = this.value;
//     let output = input * 100;
//     centiMeterUnit.value = output;
// });

// centiMeterUnit.addEventListener('input', function(){
//     let output = this.value;
//     let input = output / 100;
//     meterUnit.value = input;
// });

// var Input= document.querySelector(".input");
// var Output = document.querySelector(".output");
// var inputOption= document.querySelector(".input-option");
// var outputOption = document.querySelector(".output-option");
// var inputOptionValue, outputOptionValue

// Input.addEventListener('keyup', value());
// // output.addEventListener('input', value)
// inputOption.addEventListener('change', value());
// outputOption.addEventListener('change', value());

// inputOptionValue = inputOption.value;
// outputOptionValue = outputOption.value;

// function value(){
    
// var inputOptionValue = inputOption.value;
// var outputOptionValue = outputOption.value;

// if(inputOptionValue === "metre" && outputOptionValue ==="centimeter"){
//    let input = this.value;
//    let output  = input * 100;
//    Output.value = output;

// }

// else if(inputOptionValue === "Kilogram" && outputOptionValue ==="Gram"){
//     output.value = number(input.value) * 1000;
// }

// }


fetch("https://restcountries.com/v3.1/name/nepal")
    .then(function(data){
        return data.json();
    })
    .then(function(data){
        console.log(data)
    });