'use strict';

let cookieClicker = document.getElementById('salmon-cookies');
let tableClicker = document.getElementById('set-the-table');
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


// Function used by all

let renderBot = [];

function cusRand(min, max) {
  //got from instructor who got from MDN docs
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function StoreStats(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  // this.storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
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

  //   let articleElem = document.createElement('article');
  // cookieClicker.appendChild(articleElem);
  // let h2Elem = document.createElement('h2');
  // h2Elem.textContent = this.name;
  // articleElem.appendChild(h2Elem);
  // let ulElem = document.createElement('ul');
  // articleElem.appendChild(ulElem);

  // for (let i = 0; i < storeHours.length; i++) {
  //   let liElem = document.createElement('li');
  //   liElem.textContent = `${storeHours[i]}: ${this.allCook[i]} cookies!`;
  //   ulElem.appendChild(liElem);
  // }
  // let liTotalelem = document.createElement('li');
  // liTotalelem.textContent = `${this.totalCookies} total cookies`;
  // ulElem.appendChild(liTotalelem);

  // let tableCreate = document.createElement('tr');
  // tableClicker.appendChild(tableCreate);
  // tableClicker.appendChild(thElem);

  let trElem = document.createElement('tr');

  for (let n = 0; n < this.allCook.length; n++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.allCook[n];
    trElem.appendChild(tdElem);
  }
  tableClicker.appendChild(trElem);
};

let seattle = new StoreStats('Seattle', '23', '65', '6.3');
let tokyo = new StoreStats('Tokyo', '3', '24', '1.2');
let dubai = new StoreStats('Dubai', '11', '38', '3.7');
let paris = new StoreStats('Paris', '20', '38', '3.7');
let lima = new StoreStats('Lima', '2', '16', '4.6');

renderBot.push(seattle, tokyo, dubai, paris, lima);

function renderNow() {
  let thElem = document.createElement('tr');
  for (let n = 0; n < storeHours.length; n++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = storeHours[n];
    thElem.appendChild(tdElem);
  }
  tableClicker.appendChild(thElem);

  for (let i = 0; i < renderBot.length; i++) {
    renderBot[i].getCust();
    renderBot[i].render();
  }
}

renderNow();

// The old stuff

// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   avgCookies: 6.3,
//   totalCookies: 0,
//   custPerh: [],
//   allCook: [],

//   getCust: function(){
//     for (let j = 0; j < this.storeHours.length; j++){

//       this.custPerh[j] = cusRand(this.minCust, this.maxCust);
//       this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
//       this.totalCookies += this.allCook[j];
//       console.log(this.allCook[j]);
//     }
//   },

//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieClicker.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liTotalelem = document.createElement('li');
//     liTotalelem.textContent = `${this.totalCookies} total cookies`;
//     ulElem.appendChild(liTotalelem);
//   },
// };

// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   avgCookies: 1.2,
//   totalCookies: 0,
//   custPerh: [],
//   allCook: [],

//   getCust: function(){
//     for (let j = 0; j < this.storeHours.length; j++){

//       this.custPerh[j] = cusRand(this.minCust, this.maxCust);
//       this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
//       this.totalCookies += this.allCook[j];
//       console.log(this.allCook[j]);
//     }
//   },

//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieClicker.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liTotalelem = document.createElement('li');
//     liTotalelem.textContent = `${this.totalCookies} total cookies`;
//     ulElem.appendChild(liTotalelem);
//   },
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   avgCookies: 3.7,
//   totalCookies: 0,
//   custPerh: [],
//   allCook: [],

//   getCust: function(){
//     for (let j = 0; j < this.storeHours.length; j++){

//       this.custPerh[j] = cusRand(this.minCust, this.maxCust);
//       this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
//       this.totalCookies += this.allCook[j];
//       console.log(this.allCook[j]);
//     }
//   },

//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieClicker.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liTotalelem = document.createElement('li');
//     liTotalelem.textContent = `${this.totalCookies} total cookies`;
//     ulElem.appendChild(liTotalelem);
//   },
// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   avgCookies: 3.7,
//   totalCookies: 0,
//   custPerh: [],
//   allCook: [],

//   getCust: function(){
//     for (let j = 0; j < this.storeHours.length; j++){

//       this.custPerh[j] = cusRand(this.minCust, this.maxCust);
//       this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
//       this.totalCookies += this.allCook[j];
//       console.log(this.allCook[j]);
//     }
//   },

//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieClicker.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liTotalelem = document.createElement('li');
//     liTotalelem.textContent = `${this.totalCookies} total cookies`;
//     ulElem.appendChild(liTotalelem);
//   },
// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
//   avgCookies: 4.6,
//   totalCookies: 0,
//   custPerh: [],
//   allCook: [],

//   getCust: function(){
//     for (let j = 0; j < this.storeHours.length; j++){

//       this.custPerh[j] = cusRand(this.minCust, this.maxCust);
//       this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
//       this.totalCookies += this.allCook[j];
//       console.log(this.allCook[j]);
//     }
//   },

//   render: function(){
//     let articleElem = document.createElement('article');
//     cookieClicker.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     for(let i = 0; i < this.storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
//       ulElem.appendChild(liElem);
//     }

//     let liTotalelem = document.createElement('li');
//     liTotalelem.textContent = `${this.totalCookies} total cookies`;
//     ulElem.appendChild(liTotalelem);
//   },
// };

// seattle.getCust();
// seattle.render();
// tokyo.getCust();
// tokyo.render();
// dubai.getCust();
// dubai.render();
// paris.getCust();
// paris.render();
// lima.getCust();
// lima.render();
// console.log(seattle.custPerh);
// console.log(seattle.allCook);