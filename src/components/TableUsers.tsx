import { User } from '../models/User'
import { getUsers } from '../services/userService'
import { Table } from './Table'
import { GetItems, MapperTable } from './TableTypes'

const configTable: MapperTable<User>[] = [
    {
        label: 'Post id', accessor: 'id',
        sortable: false, isImage: false,
        cellClassName: 'table__cell table__cell--text-left',
        headerClassName: 'table__heading'
    },
    {
        label: 'first name', accessor: 'firstName',
        sortable: true, isImage: false,
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    },
    {
        label: 'last name', accessor: 'lastName',
        sortable: true, isImage: false,
        parserValue: (val) => `$$ ${val} $$`,
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    },
    {
        label: 'Profile', accessor: 'image',
        sortable: false, isImage: true,
        imageProps: {
            style: { width: '20px' }
        },
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    }
]

export const TableUsers = () => {
    
    const getItems: GetItems<User> = () => getUsers();

    return (
        <Table
            caption='Users'
            items={[]}
            loadMoreOptions={{
                initialVisibleItems: 3,
                stepsVisibleItems: 1,
                getItems: getItems
            }}
            mapperElements={configTable}
        />
    )
}
