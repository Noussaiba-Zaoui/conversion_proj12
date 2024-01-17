/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const  unitInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
const resultL = document.getElementById("length-result");
const resultV = document.getElementById("volume-result");
const resultM = document.getElementById("mass-result");


  convertBtn.addEventListener('click',()=>{
    resultL.innerHTML = convert("length-result");
    resultV.innerHTML = convert("volume-result");
    resultM.innerHTML = convert("mass-result");
    
  });

function convert(type){
  
          if(type==="length-result"){
              return `${unitInput.value} meters = ${(Number(unitInput.value)*3.281).toFixed(3)} feet | ${unitInput.value} feet = ${(Number(unitInput.value)/3.281).toFixed(3)} meters `
          }
          
           else if(type==="volume-result"){
              return `${unitInput.value} liters = ${(Number(unitInput.value)*0.264).toFixed(3)} gallon | ${unitInput.value} gallon = ${(Number(unitInput.value)/0.264).toFixed(3)} liters `
          }
          else if(type==="mass-result"){
               return `${unitInput.value} kilogram = ${(Number(unitInput.value)*2.204).toFixed(3)} pound | ${unitInput.value} pound = ${(Number(unitInput.value)/2.204).toFixed(3)} kilogram `
          }
  
    
  
}

