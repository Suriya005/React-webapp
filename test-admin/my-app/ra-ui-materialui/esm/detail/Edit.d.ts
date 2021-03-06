import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { EditProps } from '../types';
/**
 * Page component for the Edit view
 *
 * The `<Edit>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleForm>`),
 * to which it passes pass the `record` as prop.
 *
 * The <Edit> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - successMessage
 * - title
 * - undoable
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Edit, SimpleForm, TextInput } from 'react-admin';
 *
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 *
 * import { PostEdit } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" edit={PostEdit} />
 *     </Admin>
 * );
 * export default App;
 */
export declare const Edit: {
    (props: EditProps & {
        children: ReactElement;
    }): ReactElement;
    propTypes: {
        actions: PropTypes.Requireable<PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        hasCreate: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        id: PropTypes.Validator<any>;
        resource: PropTypes.Validator<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        successMessage: PropTypes.Requireable<string>;
        onSuccess: PropTypes.Requireable<(...args: any[]) => any>;
        onFailure: PropTypes.Requireable<(...args: any[]) => any>;
        transform: PropTypes.Requireable<(...args: any[]) => any>;
        undoable: PropTypes.Requireable<boolean>;
    };
};
