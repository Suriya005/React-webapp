declare const _default: import("redux").Reducer<import("redux").CombinedState<{
    resources: any;
    customQueries: any;
    loading: any;
    notifications: any;
    references: any;
    ui: any;
}>, import("redux").AnyAction>;
export default _default;
export declare const getPossibleReferenceValues: (state: any, props: any) => any;
export declare const getResources: (state: any) => any[];
export declare const getReferenceResource: (state: any, props: any) => any;
export { getPossibleReferences } from './references';
