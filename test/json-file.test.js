const path = require('path')
const chai = require('chai');
const expect = chai.expect;

chai.use(require('chai-json'));

describe('try chai plugin: chai-json', () => {
    it('package.json is a json file', () => {
        expect(path.join(__dirname, '../package.json')).to.be.a.jsonFile();
    });

    it('README.md is a json file', () => {
        expect(path.join(__dirname, '../README.md')).to.be.not.a.jsonFile();
    });
});
