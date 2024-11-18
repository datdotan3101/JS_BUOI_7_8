function countPositives() {
  const input = document.getElementById("numbersInput").value;
  console.log("Dữ liệu đầu vào:", input);

  const numbers = input
    .split(",") // Tách chuỗi bằng dấu phẩy
    .map((num) => num.trim()) // Loại bỏ khoảng trắng
    .map(Number); // Chuyển từng phần tử thành số

  console.log("Mảng sau khi chuyển đổi:", numbers);

  // Kiểm tra hợp lệ
  if (numbers.some(isNaN)) {
    document.getElementById("result").innerHTML =
      "Vui lòng nhập các số hợp lệ!";
    return;
  }

  // Đếm số dương
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    console.log(`Kiểm tra phần tử ${numbers[i]}`);
    if (numbers[i] > 0) {
      count++;
    }
  }

  console.log("Số lượng số dương:", count);

  // Hiển thị kết quả
  document.getElementById("result").innerHTML = `
        <p>Số lượng số dương trong mảng là: <strong>${count}</strong></p>
    `;
}
