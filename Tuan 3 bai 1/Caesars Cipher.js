function rot13(str) {
   let result = "";

  // Duyệt qua từng ký tự trong chuỗi đầu vào
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // Nếu là ký tự từ 'A' đến 'Z'
    if (char >= 'A' && char <= 'Z') {
      // Dịch chuyển ký tự 13 vị trí, vòng quanh bảng chữ cái (từ A đến Z)
      let charCode = char.charCodeAt(0); // Lấy mã ASCII của ký tự
      let newCharCode = ((charCode - 65 + 13) % 26) + 65; // Dịch chuyển 13 vị trí
      result += String.fromCharCode(newCharCode); // Chuyển mã ASCII thành ký tự
    } else {
      // Nếu ký tự không phải là chữ cái (ví dụ: dấu cách, dấu chấm câu), giữ nguyên
      result += char;
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");