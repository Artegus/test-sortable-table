export type MapperTable<T> = {
	label: string; 
	accessor: keyof T;
	sortable?: boolean;
	cellClassName: string;
    headerClassName?: string;
}

export type TableProps<T> = {
    items: T[];
    setItems: React.Dispatch<React.SetStateAction<T[]>>;
    mapperElements: MapperTable<T>[];
    caption: string;
}

export type TableHeaderProps<T> = {
    headers: MapperTable<T>[];
    handleSorting: HandleSortingFn<T>;
}

export type TableBodyProps<T> = {
    items: T[];
    mapperTable: MapperTable<T>[];
}

export type TableRowProps<T> = {
    item: T;
    mapperTable: MapperTable<T>[];
}

export type OrderType = 'asc' |'desc';

export type HandleSortingFn<T> = (accessor: keyof T, order: OrderType) => void;
