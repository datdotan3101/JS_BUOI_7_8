function swapValues() {
  // Lấy dữ liệu từ người dùng
  const arrayInput = document.getElementById("arrayInput").value;
  const value1 = parseFloat(document.getElementById("value1").value.trim());
  const value2 = parseFloat(document.getElementById("value2").value.trim());

  // Chuyển đổi chuỗi thành mảng
  const array = arrayInput.split(",").map((num) => parseFloat(num.trim()));

  // Kiểm tra tính hợp lệ
  if (array.some(isNaN) || isNaN(value1) || isNaN(value2)) {
    document.getElementById("result").textContent =
      "Vui lòng nhập đúng định dạng số!";
    return;
  }

  // Tìm vị trí của các giá trị cần đổi
  const index1 = array.indexOf(value1);
  const index2 = array.indexOf(value2);

  // Kiểm tra nếu một trong hai giá trị không tồn tại trong mảng
  if (index1 === -1 || index2 === -1) {
    document.getElementById("result").textContent =
      "Một trong hai giá trị không tồn tại trong mảng!";
    return;
  }

  // Đổi chỗ hai giá trị
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;

  // Hiển thị kết quả
  document.getElementById(
    "result"
  ).textContent = `Mảng sau khi đổi chỗ: ${array.join(", ")}`;
}
