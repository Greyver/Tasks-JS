const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const userPassword = prompt("Введіть пароль:");

if (userPassword === null) {
message = "Скасовано користувачем!";
} else if (userPassword === ADMIN_PASSWORD) {
message = "Ласкаво просимо!";
} else {
message = "Доступ заборонений, невірний пароль!";
}

alert(message);