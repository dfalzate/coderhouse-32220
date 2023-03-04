const numbers = [];
for (let i = 0; i < 10000; i++) {
  numbers.push(Math.floor(Math.random() * 19 + 1));
}

console.log(numbers);

const map = new Map();

numbers.map((number) => {
  if (map.get(number)) {
    const conteoActual = map.get(number);
    map.set(number, conteoActual + 1);
  } else {
    map.set(number, 1);
  }
});

console.log(map);

const obj = Object.fromEntries(map);

console.log(obj);
