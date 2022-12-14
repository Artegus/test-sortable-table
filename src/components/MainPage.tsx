import { IPost } from "../models/Post"
import { getPosts } from "../services/postService"
import { Table } from "./Table"
import { GetItems, MapperTable } from "./TableTypes"
import { TableUsers } from "./TableUsers"


const configTable: MapperTable<IPost>[] = [
    {
        label: 'Post id', accessor: 'id',
        sortable: true, isImage: false,
        cellClassName: 'table__cell table__cell--text-left',
        headerClassName: 'table__heading'
    },
    {
        label: 'User id', accessor: 'userId',
        sortable: true, isImage: false,
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    },
    {
        label: 'Title', accessor: 'title',
        sortable: false, isImage: false,
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    },
    {
        label: 'Body', accessor: 'body',
        sortable: false, isImage: false,
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    }
]

export const MainPage = () => {

    const getItems: GetItems<IPost> = () => getPosts(1);

    return (
        <main className='container'>
            {/* <Table
                items={[]}
                loadMoreOptions={{ 
                    initialVisibleItems: 2,
                    stepsVisibleItems: 2,
                    getItems: getItems
                }}
                mapperElements={configTable}
                caption={'List of products'}
            /> */}

            <TableUsers />
        </main>
    )
}
