console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    } else {
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 == 0) {
        console.log("FIZZ");
    } else if (i % 5 == 0) {
        console.log("BUZZ");
    }
    else {
        console.log(i);
    }
}

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

let i = 1;
while (i <= 100) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

let j = 1;
do {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++;
} while (j <= 100);

let k = 1;
while (k <= 100) {
    if (k % 3 == 0 && k % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (k % 3 == 0) {
        console.log("FIZZ");
    } else if (k % 5 == 0) {
        console.log("BUZZ");
    }
    else {
        console.log(k);
    }
    k++;
}

let l = 1;
do {
    if (l % 3 == 0 && l % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (l % 3 == 0) {
        console.log("FIZZ");
    } else if (l % 5 == 0) {
        console.log("BUZZ");
    }
    else {
        console.log(l);
    }
    l++;
} while (l <= 100);

// Exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500));
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);
// creates a random number between 100 and 500
console.log(value, n);

for (let i = 0; i <= n; i++) {
    if (i = value) {
        console.log("Found value!");
        console.log(`Value is ${i}`);
        break;
    } else {
        console.log("Did not find value");
    }
}