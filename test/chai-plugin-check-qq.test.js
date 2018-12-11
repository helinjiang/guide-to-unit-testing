const path = require('path')
const chai = require('chai');
const expect = chai.expect;

chai.use(require('../src/chai-plugin-check-qq'));

describe.only('.src/chai-plugin-check-qq', () => {
    it('1 is not valid', () => {
        expect(1).to.be.not.a.validQQ();
    });

    it('10001 is valid', () => {
        expect(10001).to.be.a.validQQ();
    });

    it('"10001" is valid', () => {
        expect("10001").to.be.a.validQQ();
    });
});
