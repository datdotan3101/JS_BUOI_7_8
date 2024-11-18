function isInteger(num) {
  return Number.isInteger(num);
}

function countIntegers() {
  const input = document.getElementById("numberInput").value;
  const numbers = input.split(",").map((num) => parseFloat(num.trim()));
  if (numbers.some(isNaN)) {
    document.getElementById("result").textContent =
      "Vui lòng nhập đúng định dạng số!";
    return;
  }
  const integerCount = numbers.filter(isInteger).length;
  document.getElementById(
    "result"
  ).textContent = `Số lượng số nguyên trong mảng: ${integerCount}`;
}
