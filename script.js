"use strict";

function nbYear(p0, percent, aug, p) {
    percent = percent / 100;
    let count = 0;
      while(p0 < p){
        p0 = p0 + p0 * percent + aug;
        count++;
      }
    return count;
  }