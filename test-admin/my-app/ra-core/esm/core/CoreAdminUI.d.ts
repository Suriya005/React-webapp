import { FunctionComponent, ComponentType } from 'react';
import { TitleComponent, LoginComponent, LayoutComponent, AdminChildren, CatchAllComponent, CustomRoutes, DashboardComponent, LoadingComponent } from '../types';
export declare type ChildrenFunction = () => ComponentType[];
export interface AdminUIProps {
    catchAll?: CatchAllComponent;
    children?: AdminChildren;
    customRoutes?: CustomRoutes;
    dashboard?: DashboardComponent;
    disableTelemetry?: boolean;
    layout?: LayoutComponent;
    loading?: LoadingComponent;
    loginPage?: LoginComponent | boolean;
    logout?: ComponentType;
    menu?: ComponentType;
    ready?: ComponentType;
    theme?: object;
    title?: TitleComponent;
}
export declare type CoreAdminUIProps = AdminUIProps;
declare const CoreAdminUI: FunctionComponent<AdminUIProps>;
export default CoreAdminUI;
