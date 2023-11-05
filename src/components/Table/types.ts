import { ReactElement } from 'react';

interface TableColumn<T> {
    title: string;
    render: (item: T) => ReactElement;
}

export type TableColumns<T> = TableColumn<T>[];

export interface TableProps {
    columns: TableColumns<any>;
    data: any;
}
