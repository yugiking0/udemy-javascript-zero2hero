function transform(arr) {
  // your code here
  return arr.map(function (x) {
    let b = 0;
    switch (x) {
      case 'a':
        b = 1;
      case 'A':
        b = 1;
        break;
      case 'b':
        b = 2;
      case 'B':
        b = 2;
      default:
        b = 0;
    }
    return b;
  });
}
// console.log(transform(['A', 'b', 'a', 'B', 'd']));
function sum(x) {
  // viết code ở đây.
  let sumX = 0;
  let i = 1;
  while (i < x) {
    sumX += i;
    i += 2;
  }
  return sumX;
}

// console.log(sum(5));

//------------------------------------------
function boiChungLN(n, arr) {
  var boiChung;
  while (n > 0) {
    let all = true;
    for (let i of arr) {
      if (n % i != 0) {
        all = false;
        break;
      }
    }
    if (all == true) {
      boiChung = n;
      break;
    }
    n--;
  }
  return boiChung;
}

function uocChungNN(n, arr) {
  var uocChung;
  let x = 1;
  while (x <= n) {
    let all = true;
    for (let i of arr) {
      if (x % i != 0) {
        all = false;
        break;
      }
    }
    if (all == true) {
      uocChung = x;
      break;
    }
    x++;
  }
  return uocChung;
}

console.log(boiChungLN(10000, [2, 3, 5, 6, 7, 8, 9]));
console.log(uocChungNN(10000, [2, 3, 5, 6, 7, 8, 9]));
