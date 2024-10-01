function checkCashRegister(price, cash, cid) {
const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.10],
    ["QUARTER", 0.25],
    ["ONE", 1.00],
    ["FIVE", 5.00],
    ["TEN", 10.00],
    ["TWENTY", 20.00],
    ["ONE HUNDRED", 100.00]
  ];

  // Tính số tiền cần trả lại
  let changeDue = cash - price;

  // Tính tổng số tiền có trong ngăn kéo
  let totalCID = cid.reduce((total, currency) => total + currency[1], 0).toFixed(2);

  // Nếu số tiền trong ngăn kéo nhỏ hơn số tiền cần trả
  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Nếu số tiền trong ngăn kéo bằng với số tiền cần trả
  if (totalCID == changeDue) {
    return { status: "CLOSED", change: cid };
  }

  // Mảng để lưu trữ tiền lẻ trả lại
  let change = [];

  // Duyệt qua các loại tiền từ lớn đến nhỏ
  for (let i = currencyUnits.length - 1; i >= 0; i--) {
    let currencyName = currencyUnits[i][0];
    let currencyValue = currencyUnits[i][1];
    let currencyAvailable = cid[i][1];
    let currencyToReturn = 0;

    // Khi còn tiền lẻ cần trả và còn tiền loại đó trong ngăn kéo
    while (changeDue >= currencyValue && currencyAvailable >= currencyValue) {
      changeDue -= currencyValue;
      changeDue = changeDue.toFixed(2); // Làm tròn để tránh lỗi số học
      currencyAvailable -= currencyValue;
      currencyToReturn += currencyValue;
    }

    // Nếu đã trả lại loại tiền này
    if (currencyToReturn > 0) {
      change.push([currencyName, currencyToReturn]);
    }
  }

  // Nếu sau khi trả vẫn còn tiền lẻ chưa trả đủ
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Trả về kết quả nếu tiền lẻ đã trả đủ và ngăn kéo không trống
  return { status: "OPEN", change: change };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);