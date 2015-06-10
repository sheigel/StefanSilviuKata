/**
 * Created by silviue on 8/10/13.
 */
describe("RomanTranslator", function () {
    var translator;

    beforeEach(function () {
        translator = new RomanTranslatorToArabic();
    });

    it("translates single digits", function () {
        expect(translator.translate("I")).toEqual(1);
        expect(translator.translate("V")).toEqual(5);
        expect(translator.translate("X")).toEqual(10);
        expect(translator.translate("L")).toEqual(50);
        expect(translator.translate("C")).toEqual(100);
        expect(translator.translate("D")).toEqual(500);
        expect(translator.translate("M")).toEqual(1000);
    });
    it("translates additive numbers", function () {
        expect(translator.translate("II")).toEqual(2);
        expect(translator.translate("XI")).toEqual(11);

        expect(translator.translate("MDCLXVI")).toEqual(1666);
    })

    it("translates substractive numbers", function () {
        expect(translator.translate("IX")).toEqual(9);
    })
});
