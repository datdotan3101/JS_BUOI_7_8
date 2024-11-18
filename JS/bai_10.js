function comparePositiveAndNegative() {
  const input = document.getElementById("numberInput").value;
  const numbers = input.split(",").map((num) => parseFloat(num.trim()));
  if (numbers.some(isNaN)) {
    document.getElementById("result").textContent =
      "Vui lòng nhập đúng định dạng số!";
    return;
  }
  const positiveCount = numbers.filter((num) => num > 0).length;
  const negativeCount = numbers.filter((num) => num < 0).length;
  let resultMessage = ` ${positiveCount} `;
  if (positiveCount > negativeCount) {
    resultMessage += `> ${negativeCount}`;
  } else if (positiveCount < negativeCount) {
    resultMessage += `< ${negativeCount})`;
  } else {
    resultMessage += `= ${negativeCount}`;
  }

  document.getElementById("result").textContent = resultMessage;
}
