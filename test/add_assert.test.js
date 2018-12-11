// https://www.chaijs.com/api/assert/
const assert = require('chai').assert;

const add = require('../src/add');

describe('use assert: src/add.js', () => {
    it('assert.equal: add(1,2) === 3', () => {
        assert.equal(add(1, 2), 3);
    });

    it('assert: add(1,2) === 3', () => {
        assert(add(1, 2) === 3);
    });
});
