const encapsulation = require('../encapsulation');

test('encap() should return "changed"', () => {
    expect(encapsulation('changed')).toBe('changed');
});