const addComment = require('./script')

test('case 1', () => {
    expect(addComment()).toBe(1);
})

test('case 2', () => {
    expect(addComment("He", 1)).toBe(1);
})

test('case 3', () => {
    expect(addComment("Hello world")).toBe(1);
})

test('case 4', () => {
    expect(addComment("Hello world", 2)).toBe(0);
})

test('case 5', () => {
    expect(addComment(3)).toBe(1);
})

test('case 6', () => {
    expect(addComment("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 4)).toBe(1);
})
