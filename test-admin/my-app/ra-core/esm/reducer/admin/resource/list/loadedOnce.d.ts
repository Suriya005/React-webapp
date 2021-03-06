import { Reducer } from 'redux';
declare type State = boolean;
/**
 * This resource reducer is false until the list loads successfully
 */
declare const loadedOnce: Reducer<State>;
export default loadedOnce;
