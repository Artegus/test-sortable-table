import { sortStringOrNumber } from './helperSort'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import { HandleSortingFn, TableProps } from './TableTypes'

export const Table = <T,>({ items, mapperElements, caption, setItems }: TableProps<T>) => {
    

    const handleSorting: HandleSortingFn<T> = (sortField, orderType) => {
        if (sortField) {
            const locales = ['es', 'en'];
            const copyItems = [...items];
            
            copyItems.sort(sortStringOrNumber(orderType, locales, sortField));
            
            setItems(copyItems);
        }
    }

    return (
        <table className='table'>
            <caption className='table__caption'>{caption}</caption>
            <TableHeader 
                headers={mapperElements} 
                handleSorting={handleSorting}
            />
            <TableBody items={items} mapperTable={mapperElements} />
        </table>
    )
}
