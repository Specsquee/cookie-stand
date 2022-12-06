'use strict';

let cookieClicker = document.getElementById('salmon-cookies');

// Function used by all

function cusRand (min,max){
  //got from instructor who got from MDN docs
  return Math.floor(Math.random() * (max - min +1) + min);
}

// Objects

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookies: 6.3,
  totalCookies: 0,
  custPerh: [],
  allCook: [],

  getCust: function(){
    for (let j = 0; j < this.storeHours.length; j++){

      this.custPerh[j] = cusRand(this.minCust, this.maxCust);
      this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
      this.totalCookies += this.allCook[j];
      console.log(this.allCook[j]);
    }
  },

  render: function(){
    let articleElem = document.createElement('article');
    cookieClicker.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
      ulElem.appendChild(liElem);
    }

    let liTotalelem = document.createElement('li');
    liTotalelem.textContent = `${this.totalCookies} total cookies`;
    ulElem.appendChild(liTotalelem);
  },
};

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookies: 1.2,
  totalCookies: 0,
  custPerh: [],
  allCook: [],

  getCust: function(){
    for (let j = 0; j < this.storeHours.length; j++){

      this.custPerh[j] = cusRand(this.minCust, this.maxCust);
      this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
      this.totalCookies += this.allCook[j];
      console.log(this.allCook[j]);
    }
  },

  render: function(){
    let articleElem = document.createElement('article');
    cookieClicker.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
      ulElem.appendChild(liElem);
    }

    let liTotalelem = document.createElement('li');
    liTotalelem.textContent = `${this.totalCookies} total cookies`;
    ulElem.appendChild(liTotalelem);
  },
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookies: 3.7,
  totalCookies: 0,
  custPerh: [],
  allCook: [],

  getCust: function(){
    for (let j = 0; j < this.storeHours.length; j++){

      this.custPerh[j] = cusRand(this.minCust, this.maxCust);
      this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
      this.totalCookies += this.allCook[j];
      console.log(this.allCook[j]);
    }
  },

  render: function(){
    let articleElem = document.createElement('article');
    cookieClicker.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
      ulElem.appendChild(liElem);
    }

    let liTotalelem = document.createElement('li');
    liTotalelem.textContent = `${this.totalCookies} total cookies`;
    ulElem.appendChild(liTotalelem);
  },
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookies: 3.7,
  totalCookies: 0,
  custPerh: [],
  allCook: [],

  getCust: function(){
    for (let j = 0; j < this.storeHours.length; j++){

      this.custPerh[j] = cusRand(this.minCust, this.maxCust);
      this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
      this.totalCookies += this.allCook[j];
      console.log(this.allCook[j]);
    }
  },

  render: function(){
    let articleElem = document.createElement('article');
    cookieClicker.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
      ulElem.appendChild(liElem);
    }

    let liTotalelem = document.createElement('li');
    liTotalelem.textContent = `${this.totalCookies} total cookies`;
    ulElem.appendChild(liTotalelem);
  },
};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  avgCookies: 4.6,
  totalCookies: 0,
  custPerh: [],
  allCook: [],

  getCust: function(){
    for (let j = 0; j < this.storeHours.length; j++){

      this.custPerh[j] = cusRand(this.minCust, this.maxCust);
      this.allCook[j] = Math.floor(this.custPerh[j] * this.avgCookies);
      this.totalCookies += this.allCook[j];
      console.log(this.allCook[j]);
    }
  },

  render: function(){
    let articleElem = document.createElement('article');
    cookieClicker.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${this.storeHours[i]}: ${this.allCook[i]} cookies!`;
      ulElem.appendChild(liElem);
    }

    let liTotalelem = document.createElement('li');
    liTotalelem.textContent = `${this.totalCookies} total cookies`;
    ulElem.appendChild(liTotalelem);
  },
};

seattle.getCust();
seattle.render();
tokyo.getCust();
tokyo.render();
dubai.getCust();
dubai.render();
paris.getCust();
paris.render();
lima.getCust();
lima.render();
console.log(seattle.custPerh);
console.log(seattle.allCook);



