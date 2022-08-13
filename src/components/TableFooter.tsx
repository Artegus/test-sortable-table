import React from 'react'

const TableFooter = () => {
    return (
        <tfoot>
            <tr>
                <td>
                    <button
                        onClick={() => console.log('more')}
                    >load more</button>
                </td>
            </tr>
        </tfoot>
    )
}

export default TableFooter