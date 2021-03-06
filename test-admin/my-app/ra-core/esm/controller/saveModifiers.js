import * as React from 'react';
import { createContext, useRef } from 'react';
export var SideEffectContext = createContext({});
export var SideEffectContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return (React.createElement(SideEffectContext.Provider, { value: value }, children));
};
/**
 * Get modifiers for a save() function, and the way to update them.
 *
 * Used in useCreateController and useEditController.
 *
 * @example
 *
 * const {
 *     onSuccessRef,
 *     setOnSuccess,
 *     onFailureRef,
 *     setOnFailure,
 *     transformRef,
 *     setTransform,
 * } = useSaveModifiers({ onSuccess, onFailure, transform });
 */
export var useSaveModifiers = function (_a) {
    var onSuccess = _a.onSuccess, onFailure = _a.onFailure, transform = _a.transform;
    var onSuccessRef = useRef(onSuccess);
    var setOnSuccess = function (onSuccess) {
        onSuccessRef.current = function (response) {
            // reset onSuccess for next submission
            onSuccessRef.current = undefined;
            return onSuccess(response);
        };
    };
    var onFailureRef = useRef(onFailure);
    var setOnFailure = function (onFailure) {
        onFailureRef.current = function (error) {
            // reset onSuccess for next submission
            onFailureRef.current = undefined;
            return onFailure(error);
        };
    };
    var transformRef = useRef(transform);
    var setTransform = function (transform) {
        transformRef.current = function (data) {
            // reset transform for next submission
            transformRef.current = undefined;
            return transform(data);
        };
    };
    return {
        onSuccessRef: onSuccessRef,
        setOnSuccess: setOnSuccess,
        onFailureRef: onFailureRef,
        setOnFailure: setOnFailure,
        transformRef: transformRef,
        setTransform: setTransform,
    };
};
