function convert() {
    const inputNumber = document.getElementById("inputNumber").value.trim();
    const inputFormat = document.getElementById("inputFormat").value;
    const outputFormat = document.getElementById("outputFormat").value;
    const outputContainer = document.getElementById("outputContainer");
    const resultElement = document.getElementById("result");

    let decimalValue;

    try {
      if (inputFormat === "decimal") {
        decimalValue = parseInt(inputNumber, 10);
      } else if (inputFormat === "binary") {
        decimalValue = parseInt(inputNumber, 2);
      } else if (inputFormat === "hexadecimal") {
        decimalValue = parseInt(inputNumber, 16);
      }
      if (isNaN(decimalValue)) {
        throw new Error("Número inválido");
      }
      let result;
      if (outputFormat === "decimal") {
        result = decimalValue.toString(10);
      } else if (outputFormat === "binary") {
        result = decimalValue.toString(2);
      } else if (outputFormat === "hexadecimal") {
        result = decimalValue.toString(16).toUpperCase();
      }
      resultElement.textContent = result;
      outputContainer.classList.add("visible");
    } catch (error) {
      alert("Por favor, ingresa un número válido en el formato seleccionado.");
      resultElement.textContent = "-";
      outputContainer.classList.remove("visible"); 
    }
  }