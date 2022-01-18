import { IBoard, INews } from "../../components/Common";

export interface userLoginPayload {
    userName: string,
    password: string
}

export interface Action {
    type: string,
    payload: userLoginPayload
}

export interface ActionNews {
    type: string,
    payload: myStore
}

export interface myStore extends userLoginPayload {
    boards: IBoard[]
}