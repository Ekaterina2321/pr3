'use strict';
//операторы сравнения
// alert('3'=='3'); приводится к числу 3
// alert(true==1); 
// alert(true ==='1'); //строгое сравнение


//условные операторы
// let age = prompt('Введите возраст');
// if(age>=18 && age<60) {
//     alert('привет');
// }else if(age>60) {
//     alert('добро пожаловать');
// }
// else {
//     alert('Вы слишком молоды');
// }

//оператор ?
// let result = (age>=18) ? 'Привет' : 'Вы слишком молоды'
// alert(result);

// let result = (age>=18 && age<60) ? 'Привет' : (age>60) ? 'Добро пожаловать' : 'Вы слишком молоды'
// alert(result);

//!a // не
//a || b // или
//a && b // и



// ||(или)
// alert(true || false); //если оба правдивы, вернет 1 результат, если оба ложные, вернет последний ложный
// alert(true || true);
// alert(false || true); //true
// alert(false || false); //false

// let hour = 8;
// if(hour < 9 || hour > 20) {
//     alert('Магазин закрыт');
// }else {
//     alert('Магазин открыт');
// }

// let name = 'Алина';
// let surname = 'Халиуллина';
// let nickName = 'JKHN';
// alert(name || surname || nickName || 'User'); //выведет то, что пользователь введет



// && (и)
// alert(true && false); // возвращает первую неправду, иначе вернет последний правдивый аргумент
// alert(true && true);
// alert(false && true); //false
// alert(false && false); //true


// let hour = 2;
// let weekDay = 'ПН';
// if(hour >=10 && hour<=18 && weekDay!='ВС'){
//     alert('Открыто');
// }else {
//     alert('Закрыто');
// }


// !(не)
// alert(!true);
// alert(!0); //сначала false, потом стал true

// alert(Boolean('Строка'));

// alert(!!'Строка'); // сначала в булевый тип, потом первый ! true, второй меняет на false


// a ||= b
// a || (a=b) 

// let hasRoot = false;
// hasRoot ||= 'У вас нет прав';
// alert(hasRoot);


// let petsName = '';
// petsName ||= 'Неизвестный питомец'; если имени нет, то выйдет строка, а если имя есмть, то выведет имя
// alert(petsName);


//?? определяет как правду, кроме null && undefind, возвращает определенное значение
// let user = 'Вася';  //undefind  если ничего не указано, выведет аноним, если есть имя, то выведет его
// alert(user?? 'Аноним');


// let name = null;
// let surname;
// let nickName ='';
// alert(name??surname??nickName??'Неизвестный пользователь');




// 1 задание
let stoim = prompt("Введите стоимость товара:");
let money = prompt("Введите количество денег:");

if (stoim > 0 && money > 0 && Number(stoim) && Number(money)) {
    if (stoim == money) {
        alert("Покупка совершена!");
    }
    if (stoim > money) {
        let lackMoney = stoim - money;
        alert(`Для покупки не хватает ${lackMoney} руб`);
    } else if (stoim < money) {
        let change = money - stoim;
        alert(`Покупка совершена! Сдача - ${change}`);
    }
}else {
    alert("Неверный формат!");
}


//2 задание
let num = prompt("Введите число");
if(Number(num) || num == 0) {
    if(num > 0) {
        alert(1);
    }else if(num < 0) {
        alert(-1);
    }else{
        alert(0);
    }
}else {
    alert("Введите корректное значение");
}


//3 задание
let a = 5;
let b = 3;
let result = (a+b < 4) ? 'Мало' : 'Много';
alert(result);

// 4 задание
let login = prompt("Ввведите логин");
let message = (login == "Сотрудник") ? 'Привет' : (login == "Директор") ? 'Здравствуйте' : (login == "") ? 'Нет логина' : '';
alert(message);


//5 задание
let login2 = prompt("Ввведите логин:");
if(login2 == "Админ") {
    let password = prompt("Введите пароль:");
    if(password == "Я главный") { 
        alert("Здравствуйте!");
    }else if (password != "Я главный" || password == ""){
        alert("Неверный пароль!");
    }else{ 
        alert("Отменено");
    }
}else if (login2 == "") {
    alert("Отменено");
}
else{
    alert("Я вас не знаю!");
} 











































