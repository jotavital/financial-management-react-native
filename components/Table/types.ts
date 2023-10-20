import { ReactElement } from 'react';

interface TableColumn {
    title: string;
    render: (item: any) => ReactElement;
}

export type TableColumns = TableColumn[];

export interface TableProps {
    columns: TableColumns;
    data: any; //TODO: tipar
}
