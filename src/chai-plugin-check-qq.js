const plugin = function plugin(chai, utils) {
    chai.Assertion.addMethod('validQQ', function assertion() {
        const self = this;
        const qq = utils.flag(self, 'object');
        self.assert(qq >= 10001, 'expect #{this} to larger than 10001');
    });
};

module.exports = plugin;