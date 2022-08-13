type TableCellProps<T,> = {
    value: T[keyof T];
    parser?: (value: T[keyof T]) => string;
    imageProps?: React.HTMLAttributes<HTMLImageElement>;
    cellClassname: string;
}

export const TableCell = <T,>({
    value,
    parser,
    imageProps,
    cellClassname,
}: TableCellProps<T>) => {

    const parsedValue = parser ? parser(value) : value;
    return (
        <td className={`${cellClassname} fade-in`} >
            {imageProps ? 
            <img src={`${parsedValue}`} {...imageProps} /> :
            `${parsedValue}`}
        </td>
    )
}
