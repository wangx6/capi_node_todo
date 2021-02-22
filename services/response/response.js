function response() {
    function fail(errors) {
        if(!Array.isArray(errors)) errors = [errors];
        return {ok: false, errors};
    }

    function done(data=[]) {
        return {ok: true, data}
    }
    return {
        fail,done
    }
}

module.exports = response;