let n = 3;
let string1 = "";
let string = "";


// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string1 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      string1 += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string1 += "*";
      }
      else {
        string1 += " ";
      }
    }
  }
  string1 += "\n";
}
console.log(string1);