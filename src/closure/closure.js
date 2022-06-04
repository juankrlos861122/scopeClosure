const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: COP ${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

const moneyBoxClosure = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox: COP ${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBoxClosure();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
