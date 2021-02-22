const todoService = () => {

    let data = [];

    const getData = () => data;
    const setData = (val) => {
        data = val;
    }

    const fetchToDoFromDb = () => {
        return new Promise((resolve, reject) => {
            // calling the bapi
            setTimeout(() => {
                setData([
                    {id: Math.random().toString(32), status: 1, todo: 'donate 1 billion'},
                    {id: Math.random().toString(32), status: 1, todo: 'buy a sport car'},
                    {id: Math.random().toString(32), status: 0, todo: 'buy a house'},
                    {id: Math.random().toString(32), status: 0, todo: 'buy a plan'},
                    {id: Math.random().toString(32), status: 0, todo: 'buy a rocket'},
                    {id: Math.random().toString(32), status: 1, todo: 'buy a trip to mars'},
                    {id: Math.random().toString(32), status: 0, todo: 'buy an island'},
                    {id: Math.random().toString(32), status: 0, todo: 'buy a 200 billion of tesla'},
                    {id: Math.random().toString(32), status: 0, todo: 'sell google'},
                    {id: Math.random().toString(32), status: 0, todo: 'give facebook away for free'},
                ]);
                resolve(getData());
            },70);
        });
    }

    return {
        getData, setData, fetchToDoFromDb
    }
}

module.exports = todoService;