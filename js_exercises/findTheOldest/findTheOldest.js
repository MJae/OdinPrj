let findTheOldest = function(a) {
  let oldest = a[0];
  let oldestAge = 0;

  for (i in a) {
    let age = 0;
    if (a[i].hasOwnProperty("yearOfDeath")) {
      age = a[i].yearOfDeath - a[i].yearOfBirth;
    } else {
      let d = new Date();
      let y = d.getFullYear();

      age = y - a[i].yearOfBirth;
    }

    if (age > oldestAge) {
      oldest = a[i];
      oldestAge = age;
    }
  }
  
  return oldest;
}

module.exports = findTheOldest
