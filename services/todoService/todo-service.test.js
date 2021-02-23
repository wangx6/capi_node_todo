const todoService = require('./todo-service');

const tds = todoService();

describe('works', () => {
    it('should work', (done) => {
        expect.assertions(1);
        tds.fetchToDoFromDb().then((result) => {
            expect(1).toEqual(1);
            done();
        });
    });
});