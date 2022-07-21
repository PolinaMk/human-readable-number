const a = ['','one','two','three','four', 'five','six','seven','eight','nine'];
const b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const c = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
    if (number == 0) return 'zero';
    if (number < 10) return a[number];
    if (number >= 10 && number < 20) return b[number % 10];
    if (number >= 20 && number < 100) {
        if (number % 10 == 0) return c[number / 10];
        else return c[Math.trunc(number / 10)] + ' ' + a[number % 10];
    }

    if (number >= 100 && number < 1000) {
        if (number % 100 == 0) return a[number / 100] + ' hundred';
        else if (Math.trunc(number % 100 / 10) == 1) return a[Math.trunc(number / 100)] + ' hundred ' + b[number % 10];
        else if (Math.trunc(number % 100 / 10) == 0) return a[Math.trunc(number / 100)] + ' hundred ' + a[number % 10];
        else return (a[Math.trunc(number / 100)] + ' hundred ' + c[Math.trunc(number % 100 / 10)] + ' ' + a[number % 10]).trim();
    }
}

console.log(module.exports);
