import { useEffect, useState } from "react"
import { IPost } from "../models/Post"
import { getPosts } from "../services/postService"
import { Table } from "./Table"
import { MapperTable } from "./TableTypes"


const mapperTable: MapperTable<IPost>[] = [
    {
        label: 'Post id', accessor: 'id',
        sortable: true,
        cellClassName: 'table__cell table__cell--text-left',
        headerClassName: 'table__heading'
    },
    {
        label: 'User id', accessor: 'userId',
        sortable: true,
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    },
    {
        label: 'Title', accessor: 'title',
        sortable: false,
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    },
    {
        label: 'Body', accessor: 'body',
        sortable: false,
        cellClassName: 'table__cell table__cell--text-centered',
        headerClassName: 'table__heading'
    }
]

export const MainPage = () => {

    /*  const [items, setItems] = useState<IPost[]>([]);

    useEffect(() => {
        const abortController = new AbortController();

        getPosts(1, abortController.signal)
            .then((items) => setItems(items))
            .catch((e) => {
                console.log(e);
            })
    }, []); */

    return (
        <main className='container'>
            <Table
                items={[]}
                loadMore={true}
                mapperElements={mapperTable}
                caption={'List of products'}
            />
        </main>
    )
}
