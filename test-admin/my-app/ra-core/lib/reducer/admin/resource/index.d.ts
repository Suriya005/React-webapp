import { RegisterResourceAction, UnregisterResourceAction, RefreshViewAction } from '../../../actions';
declare type ActionTypes = RegisterResourceAction | UnregisterResourceAction | RefreshViewAction | {
    type: 'OTHER_ACTION';
    payload?: any;
    meta?: {
        resource?: string;
    };
};
declare const _default: (previousState: {}, action: ActionTypes) => {};
export default _default;
export declare const getResources: (state: any) => any[];
export declare const getReferenceResource: (state: any, props: any) => any;
