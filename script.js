const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");



const romanNumbers = [
  {value: 1000, symbolo:"M"},
  {value: 900, symbolo:"CM"},
  {value: 500, symbolo:"D"},
  {value: 400, symbolo:"CD"},
  {value: 100, symbolo:"C"},
  {value: 90, symbolo:"XC"},
  {value: 50, symbolo:"L"},
  {value: 40, symbolo:"XL"},
  {value: 10, symbolo:"X"},
  {value: 9, symbolo:"IX"},
  {value: 5, symbolo:"V"},
  {value: 4, symbolo:"IV"},
  {value: 1, symbolo:"I",}

];

convertBtn.addEventListener("click", () => {

let value = number.value;
  
  if (!value){
    output.innerText ="Please enter a valid number"
  } else if (value <=0){
    output.innerText ="Please enter a number greater than or equal to 1"
  } else if (value >=4000){
    output.innerText ="Please enter a number less than or equal to 3999"
  } else {
    
    let result = "";
    let i=0;
     

    for (i=0; i < romanNumbers.length; i++){
      while (value >= romanNumbers[i].value){

             result += romanNumbers[i].symbolo;
             value -= romanNumbers[i].value;

      }
      
    
   output.innerText = result;
    }
  }
});
