function convertToRoman(num) {
 const romanNumerals = [
    { roman: "M", value: 1000 },
    { roman: "CM", value: 900 },
    { roman: "D", value: 500 },
    { roman: "CD", value: 400 },
    { roman: "C", value: 100 },
    { roman: "XC", value: 90 },
    { roman: "L", value: 50 },
    { roman: "XL", value: 40 },
    { roman: "X", value: 10 },
    { roman: "IX", value: 9 },
    { roman: "V", value: 5 },
    { roman: "IV", value: 4 },
    { roman: "I", value: 1 }
  ];

  let result = "";

  // Duyệt qua từng cặp La Mã - Ả Rập
  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      result += romanNumerals[i].roman;  // Thêm số La Mã tương ứng vào kết quả
      num -= romanNumerals[i].value;    // Trừ đi giá trị Ả Rập tương ứng
    }
  }

  return result;

}

convertToRoman(36);