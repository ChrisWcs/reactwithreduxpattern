import { CONVERT_TO_BASETEN, CONVERT_TO_BINARY } from '../actions/actions';
import { convertToBaseten, convertToBinary } from '../utils/utils';

const reducer = (state, action) => {
    switch(action.type){
        case CONVERT_TO_BASETEN:
            return {
                curRes: "",
                history: [
                    {
                        beg: state.curRes,
                        res: convertToBaseten(state.curRes),
                        type: "Binary to Baseten",
                    }, 
                    ...state.history
                ]
            };
        case CONVERT_TO_BINARY:
            return {
                curRes: "",
                history: [
                    {
                        beg: state.curRes,
                        res: convertToBinary(parseInt(state.curRes)),
                        type: "Baseten to Binary",
                    }, 
                    ...state.history
                ]
            };
        default:
            return state;
    }
}

export default reducer;