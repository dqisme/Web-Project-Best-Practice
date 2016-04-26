import unique from 'uniq';

class WhatAClass {
  constructor() {
    let data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
    console.log(unique(data));
  }
}

let whatAClass = new WhatAClass();
