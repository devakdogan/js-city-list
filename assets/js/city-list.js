const textEl = document.querySelector("#txtNumber");
const addButton = document.querySelector("#add-button");
const sortButton = document.querySelector("#sort-button");
const reverseButton = document.querySelector("#reverse-button");
const removeFirstButton = document.querySelector("#remove-first-button");
const removeLastButton = document.querySelector("#remove-last-button");
const removeAllButton = document.querySelector("#remove-all-button");
const mixButton = document.querySelector("#mix-button");
const citiesEl = document.querySelector("#cities")
const cities = [];
const cityNames = [];
const resultEl = document.querySelector(".result")
import {citiesData} from "../data/citiesData.js";

(function (){
    for (const city of citiesData){
        cityNames.push(city.name)
    }     
    })();

addButton.addEventListener("click", () => {
    console.log(cities)
    let city = textEl.value[0].toLocaleUpperCase() + textEl.value.substring(1).toLocaleLowerCase();
    console.log(city)
    if(cities.includes(city.toLocaleUpperCase())){
        alert("You can't add same city twice!")
        textEl.value="";
    }else if(city && isNaN(city) && cityNames.includes(city)){
    cities.push(city.toLocaleUpperCase())
    textEl.value="";
    arrayToTable();
    resultEl.classList.replace("result","show-result")
    }else {
        textEl.value="";
        alert("Please input valid city name") 
    }
})
textEl.addEventListener("keypress", (event) => {
    if(event.key === "Enter"){
     addButton.click();  
    }
})
sortButton.addEventListener("click",()=>{
    cities.sort();
    arrayToTable();
    arrayToTable();
})

reverseButton.addEventListener("click",()=>{
    cities.reverse();
    arrayToTable();
})

removeFirstButton.addEventListener("click",()=>{
    cities.shift();
    arrayToTable();
    if(cities.length==0){
        resultEl.classList.replace("show-result","result");
    }
})

removeLastButton.addEventListener("click",()=>{
    cities.pop();
    arrayToTable();
    if(cities.length==0){
        resultEl.classList.replace("show-result","result");
    }
})

removeAllButton.addEventListener("click",()=>{
    cities.splice(0,cities.length);
    arrayToTable();
    resultEl.classList.replace("show-result","result");
})

mixButton.addEventListener("click",()=>{
    cities.sort(()=> Math.random() - 0.5);
    arrayToTable();
})

const arrayToTable = () => {
    let row = "";
    for(let i in cities){
        row += `<tr><td>${cities[i]}</td></tr>`;
    }
    citiesEl.innerHTML = row;
}
