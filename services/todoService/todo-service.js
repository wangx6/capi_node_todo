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
                    {id: Math.random().toString(32), status: 0, description: 'asdfasdf'},
                    {id: Math.random().toString(32), status: 0, description: 'asdfasdf'},
                    {id: Math.random().toString(32), status: 0, description: 'asdfasdf'},
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