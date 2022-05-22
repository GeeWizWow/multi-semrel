const { div } = require('@geewizwow/multi-semrel-lib-b');

module.exports = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    div: (a, b) => div(a, b),
    blue: () => 'blue',
};
