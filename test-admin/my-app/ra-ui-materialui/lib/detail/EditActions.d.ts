import PropTypes from 'prop-types';
import { Record } from 'ra-core';
/**
 * Action Toolbar for the Edit view
 *
 * Internal component. If you want to add or remove actions for a Edit view,
 * write your own EditActions Component. Then, in the <Edit> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@material-ui/core/Button';
 *     import { TopToolbar, ShowButton, Edit } from 'react-admin';
 *
 *     const PostEditActions = ({ basePath, record, resource }) => (
 *         <TopToolbar>
 *             <ShowButton basePath={basePath} record={record} />
 *             // Add your custom actions here
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostEdit = (props) => (
 *         <Edit actions={<PostEditActions />} {...props}>
 *             ...
 *         </Edit>
 *     );
 */
declare const EditActions: {
    ({ className, ...rest }: EditActionsProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        data: PropTypes.Requireable<object>;
        hasShow: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
    };
};
export interface EditActionsProps {
    basePath?: string;
    className?: string;
    data?: Record;
    hasShow?: boolean;
    hasList?: boolean;
    resource?: string;
}
export default EditActions;
