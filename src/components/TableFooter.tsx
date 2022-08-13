import { FC } from 'react'

type TableProps = {
    handleLoadMore: () => void;
}

const TableFooter: FC<TableProps> = ({
    handleLoadMore
}) => {

    return (
        <tfoot>
            <tr>
                <td>
                    <button
                        onClick={handleLoadMore}
                    >load more</button>
                </td>
            </tr>
        </tfoot>
    )
}

export default TableFooter