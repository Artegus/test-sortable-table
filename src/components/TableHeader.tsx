import { useState } from 'react'
import { OrderType, TableHeaderProps } from './TableTypes';

export const TableHeader = <T,>({
    headers,
    handleSorting
}: TableHeaderProps<T>) => {

    const [sortField, setSortField] = useState<keyof T>();
    const [order, setOrder] = useState<OrderType>('asc');
    

    function handleSortingChange(accesor: keyof T): void {
        const sortOrder: OrderType = 
            accesor === sortField && order === 'asc' ? 'desc' : 'asc';
        setSortField(accesor);
        setOrder(sortOrder);
        handleSorting(accesor, sortOrder);
    }

    return (
        <thead>
            <tr>
                {headers.map(({accessor, label, headerClassName}) => 
                    <th 
                        className={`${headerClassName}`}  
                        key={`${accessor.toString()}`}
                        onClick={() => handleSortingChange(accessor)}
                    >{label}</th>    
                )}
            </tr>
        </thead>
    )
}

