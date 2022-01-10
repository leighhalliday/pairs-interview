const time = require("./time");
const total = 20000;
const half = total / 2;
const numbers = require("./numbers")(total);

/*
  Find all pairs of numbers that add to 100
*/

time("Find", () => {
  const pairs = [];
  numbers.forEach((num) => {
    const match = numbers.find((n) => num + n === total && num < n);
    if (match) {
      pairs.push([num, match]);
    }
  });
});

time("Half", () => {
  const pairs = [];
  const under = numbers.filter((num) => num < half);
  const above = numbers.filter((num) => num > half);

  under.forEach((num) => {
    const match = above.find((n) => num + n === total && num < n);
    if (match) {
      pairs.push([num, match]);
    }
  });
});

time("Includes", () => {
  const pairs = [];
  const under = numbers.filter((num) => num < half);
  const above = numbers.filter((num) => num > half);

  under.forEach((num) => {
    if (above.includes(total - num)) {
      pairs.push([num, total - num]);
    }
  });
});

time("Map", () => {
  const pairs = [];
  const under = numbers.filter((num) => num < half);
  const above = new Map(numbers.map((num) => [num, true]))

  under.forEach((num) => {
    if (above.has(total - num)) {
      pairs.push([num, total - num]);
    }
  });
});

time("Set", () => {
  const pairs = [];
  const under = numbers.filter((num) => num < half);
  const above = new Set(numbers);

  under.forEach((num) => {
    if (above.has(total - num)) {
      pairs.push([num, total - num]);
    }
  });
});

time("Object", () => {
  const pairs = [];
  const under = numbers.filter((num) => num < half);
  // const above = Object.fromEntries(numbers.map((num) => [num, true]));
  const above = numbers.reduce((acc, num) => {
    acc[num] = true;
    return acc;
  }, {});

  under.forEach((num) => {
    if (above[total - num]) {
      pairs.push([num, total - num]);
    }
  });
});
