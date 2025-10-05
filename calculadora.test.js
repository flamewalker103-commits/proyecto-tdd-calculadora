const Calculadora = require('./index');

describe('Calculadora', () => {
  let calculadora;

  beforeEach(() => {
    calculadora = new Calculadora();
  });

  test('suma de dos números', () => {
    expect(calculadora.sumar(1, 2)).toBe(3);
  });

  test('resta de dos números', () => {
    expect(calculadora.restar(5, 2)).toBe(3);
  });

  test('multiplicación de dos números', () => {
    expect(calculadora.multiplicar(3, 4)).toBe(12);
  });

  test('división de dos números', () => {
    expect(calculadora.dividir(10, 2)).toBe(5);
  });

  test('división con un divisor cero', () => {
    expect(() => calculadora.dividir(10, 0)).toThrow('No se puede dividir por cero');
  });
});