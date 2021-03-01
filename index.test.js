const { getTodo, postAuthentication } = require('./index.js');
console.log(getTodo);
console.log(postAuthentication);

const todoService = require('./services/todoService/todo-service');
jest.mock('./services/todoService/todo-service');

console.log(todoService);

describe('test', () => {
    it('should', () => {
        expect(1).toBe(1);
    })
})
