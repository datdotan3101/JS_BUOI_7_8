/**
 * tìm số nhỏ nhất
 * input: lấy dữ liệu người dùng
 * xử lý: ketQua = 0;
 * lấy giá trị đầu tiên là lớn nhất sau đó so sánh từng số
 * output: in kêt quả ra mà hình
 */
function findMin() {
  const input = document.getElementById("numbersInput").value;
  const numbers = input.split(",").map(Number);

  // Kiểm tra hợp lệ
  if (numbers.some(isNaN)) {
    document.getElementById("result_3").innerHTML =
      "Vui lòng nhập các số hợp lệ!";
    return;
  }

  let minNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
  }
  document.getElementById("result_3").innerHTML = `
      <p>Dãy số bạn đã nhập: <strong>${numbers.join(", ")}</strong></p>
      <p>Số nhỏ nhất trong dãy là: <strong>${minNumber}</strong></p>
  `;
}
