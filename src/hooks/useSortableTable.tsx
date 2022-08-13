import { useState } from 'react'
import { sortStringOrNumber } from '../components/helperSort';
import { HandleSortingFn } from '../components/TableTypes';

export const useSortableTable = <T,>(data: T[]) => {

    const [tableData, setTableData] = useState<T[]>(data);

    const handleSorting: HandleSortingFn<T> = (sortField, orderType) => {
        if (sortField) {
            const locales = ['es', 'en'];
            const copyItems = [...tableData];
            
            copyItems.sort(sortStringOrNumber(orderType, locales, sortField));
            
            setTableData(copyItems);
        }
    }

    return {
        tableData,
        handleSorting,
        setTableData
    };
}
