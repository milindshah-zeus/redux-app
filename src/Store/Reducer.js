const initialState={
    message:'This is the Initial State'
}

const reducer =(state=initialState,action) => {
    const newState={...state}
    if(action.type === 'Message change'){
        newState.message = 'This is the second Message'
    }
    return newState
}

export default reducer;