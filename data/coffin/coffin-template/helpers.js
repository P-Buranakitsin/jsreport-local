const jsreport = require('jsreport-proxy')
await jsreport.assets.registerHelpers('thaibath.js')
const fns = require('date-fns')
const {
    th
} = require('date-fns/locale')

Handlebars.registerHelper('isFirstItem', function(value) {
    return value === 0;
});

function isRenderDepositOrPayAllowance (price) {
    return price > 0;
}

function addComma (value) {
    return `${new Intl.NumberFormat("th-TH").format(value || 0)}`
}

function formatDate(date) {
    const dateObj = new Date(date || 0)
    const formattedDate = fns.format(dateObj.setFullYear(dateObj.getFullYear() + 543), "dd MMM yyyy", { locale: th });
    return formattedDate
}

function getNumberText(payFuneral, payAllowance, payRegister, deposit) {
    const total = totalPrice(payFuneral, payAllowance, payRegister, deposit)
    return  ArabicNumberToText(total)
}

function totalPrice(payFuneral, payAllowance, payRegister, deposit) {
    return addComma(payAllowance + payFuneral + payRegister + deposit)
}