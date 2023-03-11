const suma = require("./suma.js");

describe("Pruebas de la función suma", () => {
  test("La función debe devolver null si algún parámetro no es numérico", () => {
    expect(suma(2, 3, 4, 5, "a")).toBeNull();
  });
  test("la función debe devolver 0 si no se pasa ningún parámetro", () => {
    expect(suma()).toBe(0);
  });
  test("la función debe poder realizar la suma correctamente", () => {
    expect(suma(1,2,3,4,5)).toBe(15)
    expect(suma(1,2)).toBe(3)
    expect(suma(1,2,-4,5)).toBe(4)
  })
});
