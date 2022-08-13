import { TableCell } from "./TableCell"
import { TableRowProps } from "./TableTypes"

export const TableRow = <T,>({
    item,
    mapperTable
}: TableRowProps<T>) => {
    return (
        <tr>
            {mapperTable.map(({ accessor, cellClassName, label, parserValue, imageProps }, i) => {
                return <TableCell
                    value={item[accessor]}
                    key={`${label}${i}`}
                    imageProps={imageProps}
                    cellClassname={cellClassName}
                    parser={parserValue}
                />
            })}
        </tr>
    )
}
