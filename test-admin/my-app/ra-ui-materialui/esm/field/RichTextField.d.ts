import { FC } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { InjectedFieldProps, PublicFieldProps } from './types';
export declare const removeTags: (input: string) => string;
declare const RichTextField: FC<RichTextFieldProps>;
export interface RichTextFieldProps extends PublicFieldProps, InjectedFieldProps, TypographyProps {
    stripTags?: boolean;
}
export default RichTextField;
