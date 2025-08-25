

import verificarGeneroYeDad from "./verificarGeneroYeDad";

describe("verificarGeneroYeDad", () => {
  it("debería decir 'muy joven y masculino' si es hombre menor de 30 (español)", () => {
    const resultado = verificarGeneroYeDad("masculino", 25, "es");
    expect(resultado).toEqual(" eres muy joven y masculino");
  });

  it("debería decir 'muy masculino señor' si es hombre mayor de 30 (español)", () => {
    const resultado = verificarGeneroYeDad("masculino", 40, "es");
    expect(resultado).toEqual(" es usted muy masculino señor");
  });

  it("should say 'young man' if male under 30 (english)", () => {
    const resultado = verificarGeneroYeDad("masculino", 20, "en");
    expect(resultado).toEqual(" you are a young man.");
  });

  it("should say 'mature man' if male over 30 (english)", () => {
    const resultado = verificarGeneroYeDad("masculino", 50, "en");
    expect(resultado).toEqual(" you are a very mature man.");
  });
});