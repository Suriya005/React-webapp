import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { CreateProps } from '../types';
/**
 * Page component for the Create view
 *
 * The `<Create>` component renders the page title and actions.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleForm>`),
 * to which it passes pass the `record` as prop.
 *
 * The <Create> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - successMessage
 * - title
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Create, SimpleForm, TextInput } from 'react-admin';
 *
 * export const PostCreate = (props) => (
 *     <Create {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 *
 * import { PostCreate } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" create={PostCreate} />
 *     </Admin>
 * );
 * export default App;
 */
export declare const Create: {
    (props: CreateProps & {
        children: ReactElement;
    }): ReactElement;
    propTypes: {
        actions: PropTypes.Requireable<PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        hasCreate: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        resource: PropTypes.Validator<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        record: PropTypes.Requireable<object>;
        hasList: PropTypes.Requireable<boolean>;
        successMessage: PropTypes.Requireable<string>;
        onSuccess: PropTypes.Requireable<(...args: any[]) => any>;
        onFailure: PropTypes.Requireable<(...args: any[]) => any>;
        transform: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export default Create;
