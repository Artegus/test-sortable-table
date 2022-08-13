import { useState } from 'react'
import { sortStringOrNumber } from '../components/helperSort';
import { HandleSortingFn } from '../components/TableTypes';

type LoadMoreOptions = {
    initialVisibleItems: number;
    stepsVisibleItems: number;
}

export const useSortableTable = <T,>(data: T[], options: LoadMoreOptions) => {

    const [defaultData, setDefaultData] = useState<T[]>(data);
    const [tableData, setTableData] = useState<T[]>(data);
    const [visibility, setVisibility] = useState<number>(options.initialVisibleItems);

    const handleSorting: HandleSortingFn<T> = (sortField, orderType) => {
        if (sortField) {
            const locales = ['es', 'en'];
            const copyItems = [...tableData].slice(0, visibility);
            
            copyItems.sort(sortStringOrNumber(orderType, locales, sortField));

            setTableData(copyItems);
        }
    }

    const updateTableData = (data: T[]) => {
        // TODO: No funciona como esperaba, al colocarlo en las dependencias de useEffect parece que esta en constante cambio cuand
        // se ordena por una columna.
        setDefaultData(data)
        setTableData(data);
    }

    const handleUpdateVisibility = () => {
        setTableData(defaultData);
        setVisibility(visibility + options.stepsVisibleItems);
    }

    return {
        tableData,
        visibility,
        setDefaultData,
        setTableData,
        handleSorting,
        updateTableData,
        handleUpdateVisibility
    };
}
