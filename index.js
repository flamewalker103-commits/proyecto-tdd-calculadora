class Calculadora {
  sumar(num1, num2) {
    return num1 + num2;
  }

  restar(num1, num2) {
    return num1 - num2;
  }

  multiplicar(num1, num2) {
    return num1 * num2;
  }

  dividir(num1, num2) {
    if (num2 === 0) throw new Error('No se puede dividir por cero');
    return num1 / num2;
  }
}

module.exports = Calculadora;