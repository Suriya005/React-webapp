import { useState, useCallback, } from 'react';
import { useDelete } from '../../dataProvider';
import { CRUD_DELETE } from '../../actions';
import { useRefresh, useNotify, useRedirect, } from '../../sideEffect';
import { useResourceContext } from '../../core';
/**
 * Prepare a set of callbacks for a delete button guarded by confirmation dialog
 *
 * @example
 *
 * const DeleteButton = ({
 *     resource,
 *     record,
 *     basePath,
 *     redirect,
 *     onClick,
 *     ...rest
 * }) => {
 *     const {
 *         open,
 *         loading,
 *         handleDialogOpen,
 *         handleDialogClose,
 *         handleDelete,
 *     } = useDeleteWithConfirmController({
 *         resource,
 *         record,
 *         redirect,
 *         basePath,
 *         onClick,
 *     });
 *
 *     return (
 *         <Fragment>
 *             <Button
 *                 onClick={handleDialogOpen}
 *                 label="ra.action.delete"
 *                 {...rest}
 *             >
 *                 {icon}
 *             </Button>
 *             <Confirm
 *                 isOpen={open}
 *                 loading={loading}
 *                 title="ra.message.delete_title"
 *                 content="ra.message.delete_content"
 *                 translateOptions={{
 *                     name: resource,
 *                     id: record.id,
 *                 }}
 *                 onConfirm={handleDelete}
 *                 onClose={handleDialogClose}
 *             />
 *         </Fragment>
 *     );
 * };
 */
var useDeleteWithConfirmController = function (props) {
    var record = props.record, redirectTo = props.redirect, basePath = props.basePath, onClick = props.onClick, onSuccess = props.onSuccess, onFailure = props.onFailure;
    var resource = useResourceContext(props);
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var notify = useNotify();
    var redirect = useRedirect();
    var refresh = useRefresh();
    var _b = useDelete(resource, null, null, {
        action: CRUD_DELETE,
        onSuccess: function (response) {
            setOpen(false);
            if (onSuccess === undefined) {
                notify('ra.notification.deleted', 'info', { smart_count: 1 });
                redirect(redirectTo, basePath);
                refresh();
            }
            else {
                onSuccess(response);
            }
        },
        onFailure: function (error) {
            setOpen(false);
            if (onFailure === undefined) {
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
            }
            else {
                onFailure(error);
            }
        },
        undoable: false,
    }), deleteOne = _b[0], loading = _b[1].loading;
    var handleDialogOpen = function (e) {
        setOpen(true);
        e.stopPropagation();
    };
    var handleDialogClose = function (e) {
        setOpen(false);
        e.stopPropagation();
    };
    var handleDelete = useCallback(function (event) {
        deleteOne({
            payload: { id: record.id, previousData: record },
        });
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [deleteOne, onClick, record]);
    return { open: open, loading: loading, handleDialogOpen: handleDialogOpen, handleDialogClose: handleDialogClose, handleDelete: handleDelete };
};
export default useDeleteWithConfirmController;
