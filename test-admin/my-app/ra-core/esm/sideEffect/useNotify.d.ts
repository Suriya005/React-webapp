import { NotificationType } from '../actions/notificationActions';
/**
 * Hook for Notification Side Effect
 *
 * @example
 *
 * const notify = useNotify();
 * // simple message (info level)
 * notify('Level complete');
 * // specify level
 * notify('A problem occurred', 'warning')
 * // pass arguments to the translation function
 * notify('Deleted %{count} elements', 'info', { smart_count: 23 })
 * // show the action as undoable in the notification
 * notify('Post renamed', 'info', {}, true)
 */
declare const useNotify: () => (message: string, type?: NotificationType, messageArgs?: any, undoable?: boolean, autoHideDuration?: number) => void;
export default useNotify;
