export type MapperTable<T> = {
	label: string; 
	accessor: keyof T;
	sortable: boolean;
	cellClassName: string;
    headerClassName?: string;
    parserValue?: (value: T[keyof T]) => string;
    isImage: boolean;
    imageProps?: React.HTMLAttributes<HTMLImageElement>;
}

export type CellElement = {

}

export type LoadMoreOptions<T> = {
    initialVisibleItems: number;
    stepsVisibleItems: number;
    getItems: GetItems<T>;
}

export type TableProps<T> = {
    items: T[];
    mapperElements: MapperTable<T>[];
    loadMoreOptions: LoadMoreOptions<T>;
    caption: string;
}

export type TableHeaderProps<T> = {
    headers: MapperTable<T>[];
    handleSorting: HandleSortingFn<T>;
}

export type TableBodyProps<T> = {
    items: T[];
    visibility: number;
    mapperTable: MapperTable<T>[];
}

export type TableRowProps<T> = {
    item: T;
    mapperTable: MapperTable<T>[];
}

export type OrderType = 'asc' |'desc';

export type HandleSortingFn<T> = (accessor: keyof T, order: OrderType) => void;

export type GetItems<T> = () => Promise<T[]>
