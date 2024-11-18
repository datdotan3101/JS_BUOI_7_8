function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findFirstPrime(array) {
  for (let num of array) {
    if (isPrime(num)) {
      return num;
    }
  }
  return -1;
}

function handleFindPrime() {
  const input = document.getElementById("numberInput").value;
  const numbers = input.split(",").map((num) => parseFloat(num.trim()));

  if (numbers.some(isNaN)) {
    document.getElementById("result").textContent =
      "Vui lòng nhập đúng định dạng số!";
    return;
  }

  const result = findFirstPrime(numbers);
  document.getElementById("result").textContent =
    result !== -1
      ? `Số nguyên tố đầu tiên trong mảng là: ${result}`
      : "Không có số nguyên tố trong mảng.";
}
