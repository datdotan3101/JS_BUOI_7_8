function findLastEven() {
  const input = document.getElementById("arrayInput").value;
  const arr = input.split(",").map((num) => parseFloat(num.trim())); // Chuyển chuỗi thành mảng số
  let lastEven = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      lastEven = arr[i];
      break;
    }
  }
  const result =
    lastEven !== -1
      ? `Số chẵn cuối cùng là: ${lastEven}`
      : "Không có số chẵn trong mảng.";
  document.getElementById("result_5").innerText = result;
}
