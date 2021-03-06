import React, { FC, ReactElement } from 'react';
import { TableRowProps } from '@material-ui/core';
import { Identifier, Record } from 'ra-core';
import useDatagridStyles from './useDatagridStyles';
declare const DatagridRow: FC<DatagridRowProps>;
export interface DatagridRowProps extends Omit<TableRowProps, 'id' | 'classes'> {
    classes?: ReturnType<typeof useDatagridStyles>;
    basePath?: string;
    className?: string;
    expand?: ReactElement | FC<{
        basePath: string;
        id: Identifier;
        record: Record;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    hover?: boolean;
    id?: Identifier;
    onToggleItem?: (id: Identifier) => void;
    record?: Record;
    resource?: string;
    rowClick?: RowClickFunction | string;
    selected?: boolean;
    style?: any;
    selectable?: boolean;
}
export declare type RowClickFunction = (id: Identifier, basePath: string, record: Record) => string;
export declare const PureDatagridRow: React.NamedExoticComponent<DatagridRowProps>;
export default DatagridRow;
