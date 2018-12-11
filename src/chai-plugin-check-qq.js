const plugin = function plugin(chai, utils) {
    chai.Assertion.addProperty('validQQ', function assertion() {
        const self = this;
        const qq = utils.flag(self, 'object');

        // 校验是否为数字
        // 校验是否为整数
        // 校验是否大于或等于10001
        self.assert((typeof qq === 'number') && (qq % 1 === 0) && (qq >= 10001), 'expect #{this} to be a integer and >= 10001', 'expect #{this} to not be a integer or < 10001');
    });
};

module.exports = plugin;