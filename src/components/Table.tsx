import { useEffect } from 'react'
import { useSortableTable } from '../hooks/useSortableTable'
import { TableBody } from './TableBody'
import TableFooter from './TableFooter'
import { TableHeader } from './TableHeader'
import { TableProps } from './TableTypes'

export const Table = <T,>({ items, mapperElements, caption, loadMoreOptions }: TableProps<T>) => {

    const { getItems, initialVisibleItems, stepsVisibleItems} = loadMoreOptions;

    const { 
        visibility, 
        tableData, 
        handleSorting,
        setDefaultData,
        setTableData, 
        handleUpdateVisibility, 
    } = useSortableTable(items, { initialVisibleItems: initialVisibleItems, stepsVisibleItems: stepsVisibleItems });

    useEffect(() => {
        
        function loadMore() {
            getItems()
            .then(items => {
                setDefaultData(items);
                setTableData(items);
            })
            .catch((e) => console.log(e))
        }
        
        if (loadMoreOptions) {
            loadMore()
            return () => {
            }
        }
    }, [getItems, loadMoreOptions, setDefaultData, setTableData]);

    return (
        <table className='table'>
            <caption className='table__caption'>{caption}</caption>
            <TableHeader
                headers={mapperElements}
                handleSorting={handleSorting}
            />
            <TableBody 
                items={tableData} 
                mapperTable={mapperElements} 
                visibility={visibility}
            />
            { visibility < tableData.length ? 
                <TableFooter 
                    handleLoadMore={handleUpdateVisibility}
                /> : null
            }
        </table>
    )
}
