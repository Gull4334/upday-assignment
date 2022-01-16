export interface INews {
    id: number,
    title: string
}

export interface IBoard extends INews {
    newsList: INews[]
}