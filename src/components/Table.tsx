import { useEffect } from 'react'
import { useSortableTable } from '../hooks/useSortableTable'
import { getPosts } from '../services/postService'
import { TableBody } from './TableBody'
import TableFooter from './TableFooter'
import { TableHeader } from './TableHeader'
import { TableProps } from './TableTypes'

export const Table = <T,>({ items, mapperElements, caption, loadMore }: TableProps<T>) => {
    
    const { tableData, handleSorting, setTableData} = useSortableTable(items);

    useEffect(() => {
        const abortController = new AbortController();

        getPosts(1, abortController.signal)
            .then((items) => setTableData(items as any))
            .catch((e) => {
                console.log(e);
            })
    }, []);

    return (
        <table className='table'>
            <caption className='table__caption'>{caption}</caption>
            <TableHeader
                headers={mapperElements} 
                handleSorting={handleSorting}
            />
            <TableBody items={tableData} mapperTable={mapperElements} />
            {loadMore ? <TableFooter /> : null}
        </table>
    )
}
