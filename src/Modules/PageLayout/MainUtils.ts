export interface IMenuLinks {
    Link: string,
    text: string,
    IsExtended: boolean,
    ParentID: number,
    MenuID: number,
    icon:string
}

export interface IState {
    collapsed: boolean
}

export type IRouterData = {
    id: number;
    path: string;
    fileLocation: string;
    name: string;
    isActive: boolean;
    params?: any;
}