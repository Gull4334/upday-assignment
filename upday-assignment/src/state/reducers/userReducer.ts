import { IBoard } from "../../components/Common";
import { ActionType } from "../action-types";
import { Action, ActionNews, myStore, userLoginPayload } from "../actions/actions";

const apiData: IBoard[] =
        [{
            id: 1,
            title: 'Sports',
            newsList: [
                { id: 1, title: 'Shoaib Malik opens a cafe in DHA' },
                { id: 2, title: 'Hafeez announce a retirement from ODI' }]
        },
        {
            id: 2,
            title: 'Entertainment',
            newsList: [
                { id: 3, title: 'Science Meuseam catches attraction of Karachi' },
                { id: 4, title: 'This quiz will tell you how big a movie buff you are' }]
        },
        {
            id: 3,
            title: 'LifeStyle',
            newsList: [
                { id: 3, title: 'Zodiac alert: What’s in store for Capricorns in 2022?' },
                { id: 4, title: 'He lost fingers in an accident. Now it’s inspiring his art.' }]
        },
        {
            id: 4,
            title: 'Opinion',
            newsList: [
                { id: 3, title: 'Motherhood question: No, I’d rather not' },
                { id: 4, title: 'How women cadets benefit the army' }]
        }
        ];

const initialState:myStore = {userName:"", password:"", boards:apiData};


const userReducer = (state = initialState, action:ActionNews) => {
    switch (action.type){
        case ActionType.LOGINUSER: {
            debugger;
            let {userName,password} = action.payload;
            let newUserObject = {
                ...state,
                userName: userName,
                password: password
            }
            return newUserObject;
        }
        case ActionType.UPDATENEWS: {
            debugger;
            let {boards} = action.payload;
            let updatedNewsObject = {
                ...state,
                boards: boards
            }
            return updatedNewsObject;
        }
        case ActionType.ADDNEWS: {
            debugger;
            let {boards} = action.payload;
            let updatedNewsObject = {
                ...state,
                boards: boards
            }
            return updatedNewsObject;
        }
        case ActionType.DELNEWS: {
            debugger;
            let {boards} = action.payload;
            let updatedNewsObject = {
                ...state,
                boards: boards
            }
            return updatedNewsObject;
        }    
        default:
            return state;
    }
}

export default userReducer;