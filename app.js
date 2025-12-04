console.log('Hello Universe');

// data storage
// global scope

const rewardCatFood = document.querySelectorAll('.rewardCatFood');
const valueCatFood = document.getElementById('valueCatFood');
const rewardInstances = document.getElementById('rewardInstances');
const counter = document.getElementById("counter");
const catImage = document.getElementById("catImg");

let totalPetCount = 0;
let pps = 0;

// fetch upgrades from api
async function getStuff(){
    const response = await fetch('https://cookie-upgrade-api.vercel.app/api/upgrades');
    const data = await response.json();
    buildButtons(data);
}

// Build buttons
function buildButtons(data){ 
    for (let i = 0 ; i < data.length ; i++){
        const h3Ele = document.createElement('h3');
        h3Ele.innerText = data[i].name;
        const h4Ele = document.createElement('h4');
        h4Ele.className = 'cost';
        h4Ele.innerText = data[i].cost;
        const h6Ele = document.createElement('h6');
        h6Ele.className = 'pps';
        h6Ele.innerText = data[i].increase;
        const divEle = document.createElement('div');
        divEle.className = 'itemContainer';
        // const imgEle = document.createElement('img');
        // imgEle.className = 'rewardImage';
        const btnEle = document.createElement('button');
        btnEle.className = 'rewardContainer';
        const pEle = document.createElement('p');
        pEle.className = 'rewardInstances';
        pEle.innerText = 0;
        divEle.appendChild(h3Ele);
        divEle.appendChild(h4Ele);
        divEle.appendChild(h6Ele);
        // btnEle.appendChild(imgEle);
        btnEle.appendChild(divEle);
        btnEle.appendChild(pEle);
        const buttonsContainer = document.getElementById('shopContainer');
        buttonsContainer.appendChild(btnEle);
    }
}

getStuff();
//     buildButtons(data);
// }


// game logic
// when the user clicks on the cat, the count goes up by 1.

catImage.addEventListener('click', () => {
    totalPetCount += 1;
    counter.innerText = totalPetCount;
});
// when the user clicks on the buy button in an upgrade in the shop, the number of pets goes down by the cost, and the pps goes up.



// we will need functions to contain the game logic.
// to create the logic for the shop upgrades:
// -OPTION 1 for the shop: function to handle each upgrade
// -OPTION 2 reuseable function that works for all upgrades
// rewardCatFood.addEventListener('click', () => {
//     if(totalPetCount > Number(valueCatFood.innerText)){
//         totalPetCount = totalPetCount - Number(valueCatFood.innerText);
//         pps = pps + 0.2;

//     }
// });


// Local storage
// make sure local storage values are updated when user buys from shop and when pets cat.


// let stats = {
//      cookieCount: 0,
//      pps: 0,
// }

// if there is data already in local storage, update states with this data, so the user can pick up where they left off.

// shop upgrades


// create multiple DOM elements to contain the upgrades (loop).

// TODO: create DOM elements for the shop upgrades
// create element
// assign the value to its property (textContent)
// append to the DOM

// after, you should see upgrades in shop container
// TODO: create functions to handle the purchase action
// user needs button to buy items
// subtract cost of upgrade from totalPetCount
// add increase value to pps
// save new values in local storage

// The interval

setInterval(function () {
    totalPetCount += pps;
    // update the DOM to reflect the changes in the values
    // save the vales in local storage.
}, 1000);