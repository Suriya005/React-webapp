import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import { EditControllerProps } from 'ra-core';
import { EditProps } from '../types';
export declare const EditView: {
    (props: EditViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        component: (props: any, propName: any, componentName: any) => Error;
        defaultTitle: PropTypes.Requireable<any>;
        hasList: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        record: PropTypes.Requireable<object>;
        redirect: PropTypes.Requireable<string | boolean>;
        resource: PropTypes.Requireable<string>;
        save: PropTypes.Requireable<(...args: any[]) => any>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        version: PropTypes.Requireable<number>;
        onSuccess: PropTypes.Requireable<(...args: any[]) => any>;
        onFailure: PropTypes.Requireable<(...args: any[]) => any>;
        setOnSuccess: PropTypes.Requireable<(...args: any[]) => any>;
        setOnFailure: PropTypes.Requireable<(...args: any[]) => any>;
        setTransform: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        classes: {};
        component: typeof Card;
    };
};
interface EditViewProps extends EditProps, Omit<EditControllerProps, 'resource'> {
    children: ReactElement;
}
export {};
