'use strict'

var money = 0,                  // деньги
    click = 1,                  // сколько денег за 1 клик
    cost = 10,                  // стоимость одного апгрейда клика
    cost_10 = cost * 8,         // стоимость 10 апгрейдов клика
    cost_MoneyPerTime = 100,    // стоимость улучшения получения денег в ед времени
    cost_time = 100,            // стоимость улучшения ед времени
    MoneyPerTime = 0,           // сколько прибавляется в 1 временное значение денег
    time = 10000;               // обьявление ед. времени пибавления клика(денег), 1sec = 1,000

document.getElementById('money').value = money;     //вывод денег
document.getElementById('yluch').value = click;     //вывод сколько приносит клик
document.getElementById('cost').value = cost;       //вывод сколько стоит 1 улучшение клика
document.getElementById('cost_10').value = cost_10; //вывод сколько стоит 10 улучшений клика

// обьявление функции для увеличения денег в единицу времени
var ClickPerTime = setInterval(() => PerTime(), time)

function PerTime() {
    money = money + MoneyPerTime;

    UpdateCost();
}
//

function UpdateCost() {                                 //обновление стоимости

    document.getElementById('money').value = money;     //вывод денег
    document.getElementById('yluch').value = click;     //вывод сколько приносит клик
    document.getElementById('cost').value = cost;       //вывод сколько стоит 1 улучшение клика
    document.getElementById('cost_10').value = cost_10; //вывод сколько стоит 10 улучшений клика
    document.getElementById('cost_PerTime').value = cost_MoneyPerTime;
    document.getElementById('cost_TimeUpgrade').value = cost_time;
}

function clear() {               //возврат пустоты в сообщение об ошибке
    document.getElementById('NoMoney').innerHTML = '<p></p>'
}

function NoMoney() {             //сообщение о том, что недостаточно средств
    document.getElementById('NoMoney').innerHTML = '<p>Недостаточно средств</p>';
    setTimeout(clear, 1000);
}

function pyk() {                //pyk - защитывание 1 клика

    money = money + click;      //Прибавление денег при клике
    UpdateCost();               //Обновление стоимости
}

function ylych_1() {            //1 улучшение клика 

    if (money >= cost) {        //Проверка, хватает ли денег

        click += 1;             //+1 к клику
        money = money - cost;   //вычитание стоимости из имевшихся денег
        cost += 10;             //стоимость +1lvl увеличивается
        cost_10 += 10;          //стоимость +10lvl увеличивается 

        UpdateCost();           //Обновление стоимости

    } else {                    //Если не хватает денег

        NoMoney();              //сообщение, что недостаточно средств
    }
}

function ylych_10() {           //10 улучшений кликов
    if (money >= cost_10) {     //Проверка, хватает ли денег
        click += 10;            //+10 к клику
        money = money - cost_10;//вычитание стоимости из имевшихся денег
        cost = cost + cost_10;  //стоимость +1lvl увеличивается
        cost_10 = cost * 8;     //стоимость +10lvl увеличивается 

        UpdateCost();           //Обновление стоимости

    } else {                    //Если не хватает денег

        NoMoney();              //сообщение, что недостаточно средств
    }
}

function ylych_PerTime() {
    if (money >= cost_MoneyPerTime) {

        MoneyPerTime += 1;
        money -= cost_MoneyPerTime;
        cost_MoneyPerTime += 100;

        UpdateCost();
    } else {
        NoMoney();
    }
}
function TimeUpgrade() {
    if (money >= cost_time) {

        time -= 1000;
        money -= cost_time;
        cost_time += 100;
        UpdateCost();
    } else {
        NoMoney();
    }
}