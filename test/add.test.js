const chai = require('chai');
const expect = chai.expect;

const add = require('../src/add');

describe('/src/add.js', () => {
    it('add(1,2) === 3', () => {
        expect(add(1, 2)).to.equal(3);
    });
});
