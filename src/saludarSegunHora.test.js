import saludarSegunHora from "./saludarSegunHora";


describe("saludarSegunHora", () => { 
  it("debería saludar 'Buenos dias' si la hora es menor a 12", () => {
    expect(saludarSegunHora("Edson", "es", 8)).toContain("Buenos dias");
  });
  it("debería saludar 'Buenas tardes' si la hora es entre 12 y 18", () => {
    expect(saludarSegunHora("Edson", "es", 15)).toContain("Buenas tardes");
  });
  it("debería saludar 'Buenas noches' si la hora es entre 18 y 24", () => {
    expect(saludarSegunHora("Edson", "es", 20)).toContain("Buenas noches");
  });
  it("debería saludar 'Buen madruge' si la hora es mayor a 24", () => {
    expect(saludarSegunHora("Edson", "es", 25)).toContain("Buen madruge");
  });
});

/*
describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
});
*/

