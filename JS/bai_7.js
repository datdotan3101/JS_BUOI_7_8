document
  .getElementById("sortButton")
  .addEventListener("click", function sortArray() {
    const input = document.getElementById("numberInput").value;
    const numbers = input.split(",").map((num) => parseFloat(num.trim()));
    if (numbers.some(isNaN)) {
      document.getElementById("result_7").textContent =
        "Vui lòng nhập đúng định dạng số!";
      return;
    }
    numbers.sort((a, b) => a - b);
    document.getElementById("result_7").textContent =
      "Mảng đã sắp xếp: " + numbers.join(", ");
  });
