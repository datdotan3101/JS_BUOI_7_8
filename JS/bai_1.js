function findPositives() {
  const input = document.getElementById("numbersInput").value;
  const numbers = input.split(",").map(Number);
  if (numbers.some(isNaN)) {
    document.getElementById("result_1").innerHTML =
      "Vui lòng nhập các số hợp lệ!";
    return;
  }
  const positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    }
  }
  document.getElementById("result_1").innerHTML = `
        <p>Các số dương trong mảng là: <strong>${
          positiveNumbers.join(", ") || "Không có số dương nào"
        }</strong></p>
    `;
}
