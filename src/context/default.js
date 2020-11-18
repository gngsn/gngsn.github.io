const initState = {
    type: null,
    theme: 'light'
}

const initReducer = function (state, {
    type,
    theme,
    payload
}) {
    const newReducer = {
        ...state,
        [type]: payload
    }
    console.log(type, payload)
    return newReducer
}

export {
    initState,
    initReducer
}