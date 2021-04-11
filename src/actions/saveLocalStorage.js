import {SAVE_LOCAL_STORAGE} from './types'

const saveLocalStorage =(name)=>{
    return (dispatch) => {
        // console.log("SAVING LOCAL STORAGE", name['basketNumbers']);
        dispatch({
            type: SAVE_LOCAL_STORAGE,
            payload: name
        })
    }

}

export default saveLocalStorage;
