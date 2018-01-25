import { CONVERT_TO_BASETEN, CONVERT_TO_BINARY } from '../actions/actions';

const reducer = (state, action) => {
    switch(action.type){
        case CONVERT_TO_BASETEN:
            return {
                curRes: "",
                history: [
                    {
                        beg: state.curRes
                    }, 
                    ...state.history
                ]
            };
        case CONVERT_TO_BINARY:
            return {
                curRes: ,
                history: []
            };
        default:
            return state;
    }
}

export default reducer;