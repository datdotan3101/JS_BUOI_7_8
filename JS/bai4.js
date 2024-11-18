function findSmallestPositive() {
  const input = document.getElementById("arrayInput").value;
  const arr = input.split(",").map((num) => parseFloat(num.trim())); // Chuyển chuỗi thành mảng số

  // Lọc số dương
  const positiveNumbers = arr.filter((num) => num > 0);

  // Kiểm tra nếu không có số dương
  if (positiveNumbers.length === 0) {
    document.getElementById("result_4").innerText =
      "Không có số dương trong mảng.";
    return;
  }

  // Tìm số nhỏ nhất
  const smallestPositive = Math.min(...positiveNumbers);
  document.getElementById(
    "result_4"
  ).innerText = `Số dương nhỏ nhất là: ${smallestPositive}`;
}
