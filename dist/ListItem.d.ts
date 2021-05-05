import { FC, ReactElement } from 'react';
declare type State = 'pending' | 'loading' | 'success' | 'warning' | 'error';
declare const ListItem: FC<{
    label: string;
    state?: State;
    spinnerType?: string;
    isExpanded?: boolean;
    children?: ReactElement | ReactElement[];
}>;
export = ListItem;
