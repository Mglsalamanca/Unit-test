// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = (valueInEuro)=>{
    let dollars = valueInEuro * oneEuroIs.USD
    return dollars

};
const fromDollarToYen = (valueInDollar)=>{
    let Yens = valueInDollar * 116.32
    return Yens
}
const fromYenToPound = (valueInYen)=>{
    let pound = valueInYen * 0.0066
    return pound
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound}