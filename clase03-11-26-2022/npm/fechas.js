const differenceInDays = require("date-fns/differenceInDays");
const isValid = require("date-fns/isValid");

const resultado = differenceInDays(new Date(), new Date("01-01-2021"));
console.log(resultado);
console.log(isValid(new Date("13-13-2022")));
