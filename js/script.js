const inputElement = document.getElementById("celsiusInput");
const buttonElement = document.getElementById("convertBtn");
const resultElement = document.getElementById("result");

buttonElement.addEventListener("click", function () {
  const celsiusText = inputElement.value;

  if (celsiusText === "") {
    resultElement.textContent = "Пожалуйста, введите число!";
    return;
  }

  const celsius = parseFloat(celsiusText);
  const fahrenheit = (celsius * 9) / 5 + 32;

  resultElement.textContent = `Результат: ${celsius}°C = ${fahrenheit.toFixed(1)}°F`;

  // --- НОВЫЙ БЛОК: Управляем цветом фона страницы ---

  if (celsius >= 28) {
    // Если жарко — красим фон в мягкий красно-оранжевый
    document.body.style.backgroundColor = "#ffebd9";
    //--resultElement.backgroundColor = "#ffebd9";--
  } else if (celsius <= 0) {
    // Если мороз — красим в светло-синий
    document.body.style.backgroundColor = "#e3f2fd";
  } else {
    // Если температура обычная — возвращаем стандартный серый фон
    document.body.style.backgroundColor = "#f4f4f9";
  }

  // ------------------------------------------------
});
