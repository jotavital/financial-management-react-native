import { ReactElement } from 'react';

interface TableColumn<T> {
    title: string;
    render: (item: T) => ReactElement;
}

export type TableColumns<T> = TableColumn<T>[];

export interface TableProps {
    columns: TableColumns<unknown>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onPress?: (item: any) => void;
}
