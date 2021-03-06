import { ListProps, ListControllerProps } from './useListController';
import { Translate } from '../types';
interface ListControllerComponentProps extends ListControllerProps {
    translate: Translate;
}
interface Props extends ListProps {
    children: (params: ListControllerComponentProps) => JSX.Element;
}
/**
 * Render prop version of the useListController hook.
 *
 * @see useListController
 * @example
 *
 * const ListView = () => <div>...</div>;
 * const List = props => (
 *     <ListController {...props}>
 *        {controllerProps => <ListView {...controllerProps} {...props} />}
 *     </ListController>
 * )
 */
declare const ListController: ({ children, ...props }: Props) => JSX.Element;
export default ListController;
