const formatString = function (string) {
  if (string.length <= 40) { // якщо довжина менше 40 символів
    return string; // повернути вхідний рядок без змін
  }
  else { // якщо довжина більше 40 символів
    return string.slice(0, 40) + '...'; // повернути укорочену версію з додаванням трьох крапок в кінці
  }
};

/*
 * Перевірка роботи функції
 */

console.log(formatString('Curabitur ligula sapien, tincidunt non.')); // поверне оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.')); // поверне форматований рядок

console.log(formatString('Curabitur ligula sapien.')); // поверне оригінальний рядок

console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.')); // поверне форматований рядок
