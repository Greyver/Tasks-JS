const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

Перевірка:

1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
1 - 5
2 - 10
3 - 15
4 - 20
5 - 25
6 - 30
7 - 35
8 - 40
9 - 45
10 - 50
