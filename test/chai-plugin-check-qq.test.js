const chai = require('chai');
const expect = chai.expect;

// 扩展
chai.use(require('../src/chai-plugin-check-qq'));

describe.only('.src/chai-plugin-check-qq', () => {
    it('1 is not qq', () => {
        expect(1).to.not.be.a.validQQ;
    });

    it('10001 is qq', () => {
        expect(10001).to.be.a.validQQ;
    });

    it('"10001" is not qq', () => {
        expect("10001").to.not.be.a.validQQ;
    });

    it('10001.86 is not qq', () => {
        expect(10001.86).to.not.be.a.validQQ;
    });
});
