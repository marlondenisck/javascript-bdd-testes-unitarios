describe("Suite de testes toEqual", () => {
  let v1 = true;
  let v2 = true;
  let obj1 = { valor: v1 };
  let obj2 = { valor: v1 };

  it("deve validar o uso de matcher 'toEqual'", () => {
    expect(v1).toEqual(true);
    expect(v1).toEqual(v2);
    expect(obj1).toEqual(obj2);
  });
});
