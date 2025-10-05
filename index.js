class Calculadora {
  sumar(num1, num2) {
    this.validarNumeros(num1, num2);
    return num1 + num2;
  }

  restar(num1, num2) {
    this.validarNumeros(num1, num2);
    return num1 - num2;
  }

  multiplicar(num1, num2) {
    this.validarNumeros(num1, num2);
    return num1 * num2;
  }

  dividir(num1, num2) {
    this.validarNumeros(num1, num2);
    if (num2 === 0) throw new Error('No se puede dividir por cero');
    return num1 / num2;
  }

  validarNumeros(...numeros) {
    numeros.forEach(num => {
      if (typeof num !== 'number') {
        throw new Error('Todos los argumentos deben ser números');
      }
    });
  }
}

module.exports = Calculadora;