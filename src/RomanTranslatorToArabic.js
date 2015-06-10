var RomanTranslatorToArabic = function () {
    var numbersTable = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000

    }
    this.translate = function (romanString) {
        if (romanString.length === 1)
            return numbersTable[romanString];
        return numbersTable[romanString[0]] +
            this.translate(romanString.slice(1));
    }
}