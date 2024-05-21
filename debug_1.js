/*
Abre esta demostración en una pestaña nueva.
Ingresa 5 en el cuadro de texto Número 1.
Ingresa 1 en el cuadro de texto Número 2.
Haz clic en Add Number 1 and Number 2. La etiqueta debajo del botón dice 5 + 1 = 51. El resultado debe ser 6. Este es el error que vas a corregir.
*/

/*
function updateLabel() {
  var addend1 = getNumber1();
  console.log('addend1:', addend1);
  var addend2 = getNumber2();
  console.log('addend2:', addend2);
  var sum = addend1 + addend2;
  console.log('sum:', sum);
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
*/

//ANSWER:

function updateLabel() {
    var addend1 = getNumber1();
    var addend2 = getNumber2();
  
    // Convertimos las cadenas de texto a números
    var num1 = Number(addend1);
    var num2 = Number(addend2);
  
    // Ahora sumamos los números
    var sum = num1 + num2;
  
    console.log('addend1:', num1);
    console.log('addend2:', num2);
    console.log('sum:', sum);
  
    // Actualizamos el contenido de la etiqueta
    label.textContent = num1 + ' + ' + num2 + ' = ' + sum;
  }
  