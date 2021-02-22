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
                    {id: Math.random().toString(32), status: 0, todo: 'but a house'},
                ]);
                resolve(getData());
            }, 500);
        });
    }

    return {
        getData, setData, fetchToDoFromDb
    }
}

module.exports = todoService;