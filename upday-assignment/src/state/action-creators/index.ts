import { ActionType } from "../action-types"
import { Action, ActionNews, myStore } from "../actions/actions";
import { userLoginPayload } from "../actions/actions"
import { Dispatch } from "redux";
import { INews } from "../../components/Common";

export const loginUserAction = (userObject: userLoginPayload) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGINUSER,
            payload: userObject
        })
    }
}

export const UpdateNews = (storeObject: myStore) => {
    return (dispatch:Dispatch<ActionNews>) => {
        dispatch({
            type: ActionType.UPDATENEWS,
            payload: storeObject
        })
    }
}

export const AddNews = (storeObject: myStore) => {
    return (dispatch:Dispatch<ActionNews>) => {
        dispatch({
            type: ActionType.ADDNEWS,
            payload: storeObject
        })
    }
}

export const DeleteNews = (storeObject: myStore) => {
    debugger;
    return (dispatch:Dispatch<ActionNews>) => {
        dispatch({
            type: ActionType.DELNEWS,
            payload: storeObject
        })
    }
}

export const AddBoard = (storeObject: myStore) => {
    return (dispatch:Dispatch<ActionNews>) => {
        dispatch({
            type: ActionType.ADDBOARD,
            payload: storeObject
        })
    }
}