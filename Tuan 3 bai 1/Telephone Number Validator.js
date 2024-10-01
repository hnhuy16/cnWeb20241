function telephoneCheck(str) {
 // Biểu thức chính quy để kiểm tra số điện thoại hợp lệ
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
  // Kiểm tra chuỗi đầu vào có khớp với biểu thức chính quy hay không
  return regex.test(str);
}

telephoneCheck("555-555-5555");