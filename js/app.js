'use strict';

let tableClicker = document.getElementById('set-the-table');
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let formFinder = document.getElementById('cookieForm');

cookieForm.addEventListener('submit', handleSubmit);

// Function used by all

let renderBot = [];

let tFoot = document.createElement('tfoot');

function cusRand(min, max) {
  //got from instructor who got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function handleSubmit(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgCookies = event.target.avgCookies.value;

  let newStore = new StoreStats(name, minCust, maxCust, avgCookies);

  renderBot.push(newStore);
  newStore.getCust();
  newStore.render();
  tFoot.innerHTML= '';
  footerRender();
}

function StoreStats(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.custPerh = [];
  this.allCook = [];
}

StoreStats.prototype.getCust = function () {
  for (let j = 0; j < storeHours.length; j++) {
    this.custPerh[j] = cusRand(this.minCust, this.maxCust);
    this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
    this.totalCookies += this.allCook[j];
    console.log(this.allCook[j]);
  }
};

StoreStats.prototype.render = function () {

  let trElem = document.createElement('tr');

  let storeElem = document.createElement('td');
  storeElem.textContent = this.name;
  trElem.appendChild(storeElem);

  let storeTotal = 0;

  for (let n = 0; n < this.allCook.length; n++) {
    storeTotal += this.allCook[n];
    let tdElem = document.createElement('td');
    tdElem.textContent = this.allCook[n];
    trElem.appendChild(tdElem);
  }
  let storeTD = document.createElement('td');
  storeTD.textContent = storeTotal;
  trElem.appendChild(storeTD);
  tableClicker.appendChild(trElem);
};

let seattle = new StoreStats('Seattle', '23', '65', '6.3');
let tokyo = new StoreStats('Tokyo', '3', '24', '1.2');
let dubai = new StoreStats('Dubai', '11', '38', '3.7');
let paris = new StoreStats('Paris', '20', '38', '3.7');
let lima = new StoreStats('Lima', '2', '16', '4.6');

renderBot.push(seattle, tokyo, dubai, paris, lima);

function footerRender() {
  let footRow = document.createElement('tr');
  let cookTD = document.createElement('td');
  cookTD.textContent = "Totals";
  footRow.appendChild(cookTD);

  let totalOfTotals = 0;

  for (let i = 0; i < storeHours.length; i++) {
    let hourlyTotal = 0;
    for (let n = 0; n < renderBot.length; n++) {
      hourlyTotal += renderBot[n].allCook[i];
      totalOfTotals += renderBot[n].allCook[i];
    }
    let lengthTD = document.createElement('td');
    lengthTD.textContent = hourlyTotal;
    footRow.appendChild(lengthTD);
  }

  let tOft = document.createElement('td');
  tOft.textContent = totalOfTotals;
  footRow.appendChild(tOft);
  tFoot.appendChild(footRow);
  tableClicker.appendChild(tFoot);
}

function renderNow() {
  let thElem = document.createElement('tr');
  let emptyTD = document.createElement('td');
  thElem.appendChild(emptyTD);

  for (let n = 0; n < storeHours.length; n++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = storeHours[n];
    thElem.appendChild(tdElem);
  }
  let footTd2 = document.createElement('td');
  thElem.appendChild(footTd2);
  tableClicker.appendChild(thElem);

  for (let i = 0; i < renderBot.length; i++) {
    renderBot[i].getCust();
    renderBot[i].render();
  }
}

renderNow();
footerRender();
