import { ThemeOptions } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
declare const _default: {
    palette: {
        secondary: {
            light: string;
            main: string;
            dark: string;
            contrastText: string;
        };
    };
    typography: {
        h6: {
            fontWeight: number;
        };
    };
    sidebar: {
        width: number;
        closedWidth: number;
    };
    overrides: {
        MuiFilledInput: {
            root: {
                backgroundColor: string;
                '&$disabled': {
                    backgroundColor: string;
                };
            };
        };
        MuiButtonBase: {
            root: {
                '&:hover:active::after': {
                    content: string;
                    display: string;
                    width: string;
                    height: string;
                    position: string;
                    top: number;
                    right: number;
                    backgroundColor: string;
                    opacity: number;
                    borderRadius: string;
                };
            };
        };
    };
    props: {
        MuiButtonBase: {
            disableRipple: boolean;
        };
    };
};
export default _default;
export interface RaThemeOverrides extends Overrides {
    [key: string]: any;
}
export interface RaThemeOptions extends ThemeOptions {
    sidebar: {
        width: number;
        closedWidth: number;
    };
    overrides: RaThemeOverrides;
}
