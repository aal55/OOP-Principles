const abstraction = require('../abstraction');

test('person() should return "Name: " + name + ", Age: " + age + ", Job: " + job"', () => {
    expect(abstraction("Steve", 26, "Waiter")).toBe('Name: Steve, Age: 26, Job: Waiter');
});