var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import PropTypes from 'prop-types';
import { CreateContextProvider, useCheckMinimumRequiredProps, useCreateController, } from 'ra-core';
import { CreateView } from './CreateView';
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
export var Create = function (props) {
    useCheckMinimumRequiredProps('Create', ['children'], props);
    var controllerProps = useCreateController(props);
    return (React.createElement(CreateContextProvider, { value: controllerProps },
        React.createElement(CreateView, __assign({}, props, controllerProps))));
};
Create.propTypes = {
    actions: PropTypes.element,
    aside: PropTypes.element,
    children: PropTypes.element,
    classes: PropTypes.object,
    className: PropTypes.string,
    hasCreate: PropTypes.bool,
    hasEdit: PropTypes.bool,
    hasShow: PropTypes.bool,
    resource: PropTypes.string.isRequired,
    title: PropTypes.node,
    record: PropTypes.object,
    hasList: PropTypes.bool,
    successMessage: PropTypes.string,
    onSuccess: PropTypes.func,
    onFailure: PropTypes.func,
    transform: PropTypes.func,
};
export default Create;
