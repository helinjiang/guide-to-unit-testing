const expect = require('chai').expect;

const add = require('../src/add');

describe('use expect: src/add.js', () => {
    it('add(1,2) === 3', () => {
        expect(add(1, 2)).to.equal(3);
    });
});