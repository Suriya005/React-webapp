import { LinearProgressProps as ProgressProps } from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
/**
 * Progress bar formatted to replace an input or a field in a form layout
 *
 * Avoids visual jumps when replaced by value or form input
 *
 * @see ReferenceField
 * @see ReferenceInput
 *
 * @param {Object} classes CSS class names
 */
declare const LinearProgress: {
    ({ timeout, ...props }: LinearProgressProps): JSX.Element;
    propTypes: {
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        timeout: PropTypes.Requireable<number>;
    };
    displayName: string;
};
export interface LinearProgressProps extends ProgressProps {
    timeout?: number;
}
export default LinearProgress;
