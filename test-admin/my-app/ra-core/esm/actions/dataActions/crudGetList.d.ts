import { Record, PaginationPayload, SortPayload } from '../../types';
import { GET_LIST } from '../../core';
import { FETCH_END, FETCH_ERROR } from '../fetchActions';
import { NotificationSideEffect } from '../../sideEffect';
export declare const crudGetList: (resource: string, pagination: PaginationPayload, sort: SortPayload, filter: object) => CrudGetListAction;
interface RequestPayload {
    pagination: PaginationPayload;
    sort: SortPayload;
    filter: object;
}
export declare const CRUD_GET_LIST = "RA/CRUD_GET_LIST";
export interface CrudGetListAction {
    readonly type: typeof CRUD_GET_LIST;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        fetch: typeof GET_LIST;
        onFailure: {
            notification: NotificationSideEffect;
        };
    };
}
export declare const CRUD_GET_LIST_LOADING = "RA/CRUD_GET_LIST_LOADING";
export interface CrudGetListLoadingAction {
    readonly type: typeof CRUD_GET_LIST_LOADING;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
    };
}
export declare const CRUD_GET_LIST_FAILURE = "RA/CRUD_GET_LIST_FAILURE";
export interface CrudGetListFailureAction {
    readonly type: typeof CRUD_GET_LIST_FAILURE;
    readonly error: string | object;
    readonly payload: string;
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        notification: NotificationSideEffect;
        fetchResponse: typeof GET_LIST;
        fetchStatus: typeof FETCH_ERROR;
    };
}
export declare const CRUD_GET_LIST_SUCCESS = "RA/CRUD_GET_LIST_SUCCESS";
export interface CrudGetListSuccessAction {
    readonly type: typeof CRUD_GET_LIST_SUCCESS;
    readonly payload: {
        data: Record[];
        total: number;
    };
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        fetchResponse: typeof GET_LIST;
        fetchStatus: typeof FETCH_END;
    };
}
export {};
