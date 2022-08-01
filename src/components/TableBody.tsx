import React from 'react'
import { TableRow } from './TableRow';
import { TableBodyProps } from './TableTypes';

export const TableBody = <T,>({
    items,
    mapperTable
}: TableBodyProps<T>) => {

    return (
        <tbody>
            {items.map((item, i) => 
                <TableRow key={i} item={item} mapperTable={mapperTable} />
            )}
        </tbody>
    )
}
