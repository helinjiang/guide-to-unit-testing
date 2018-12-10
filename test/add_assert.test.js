const assert = require('chai').assert;

const add = require('../src/add');

describe('use assert: src/add.js', () => {
    it('add(1,2) === 3', () => {
        assert.equal(add(1, 2), 3);
    });
});
