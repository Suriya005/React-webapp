import { useCallback } from 'react';
import { useDelete } from '../../dataProvider';
import { CRUD_DELETE } from '../../actions';
import { useRefresh, useNotify, useRedirect, } from '../../sideEffect';
import { useResourceContext } from '../../core';
/**
 * Prepare callback for a Delete button with undo support
 *
 * @example
 *
 * import React from 'react';
 * import ActionDelete from '@material-ui/icons/Delete';
 * import { Button, useDeleteWithUndoController } from 'react-admin';
 *
 * const DeleteButton = ({
 *     resource,
 *     record,
 *     basePath,
 *     redirect,
 *     onClick,
 *     ...rest
 * }) => {
 *     const { loading, handleDelete } = useDeleteWithUndoController({
 *         resource,
 *         record,
 *         basePath,
 *         redirect,
 *         onClick,
 *     });
 *
 *     return (
 *         <Button
 *             onClick={handleDelete}
 *             disabled={loading}
 *             label="ra.action.delete"
 *             {...rest}
 *         >
 *             <ActionDelete />
 *         </Button>
 *     );
 * };
 */
var useDeleteWithUndoController = function (props) {
    var record = props.record, basePath = props.basePath, _a = props.redirect, redirectTo = _a === void 0 ? 'list' : _a, onClick = props.onClick, onSuccess = props.onSuccess, onFailure = props.onFailure;
    var resource = useResourceContext(props);
    var notify = useNotify();
    var redirect = useRedirect();
    var refresh = useRefresh();
    var _b = useDelete(resource, null, null, {
        action: CRUD_DELETE,
        onSuccess: onSuccess !== undefined
            ? onSuccess
            : function () {
                notify('ra.notification.deleted', 'info', { smart_count: 1 }, true);
                redirect(redirectTo, basePath);
                refresh();
            },
        onFailure: onFailure !== undefined
            ? onFailure
            : function (error) {
                notify(typeof error === 'string'
                    ? error
                    : error.message || 'ra.notification.http_error', 'warning', {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                });
                refresh();
            },
        undoable: true,
    }), deleteOne = _b[0], loading = _b[1].loading;
    var handleDelete = useCallback(function (event) {
        event.stopPropagation();
        deleteOne({
            payload: { id: record.id, previousData: record },
        });
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [deleteOne, onClick, record]);
    return { loading: loading, handleDelete: handleDelete };
};
export default useDeleteWithUndoController;
