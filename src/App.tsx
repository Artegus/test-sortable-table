import { Table } from './components/Table';

import './App.css';

import { products } from './data';
import { useState } from 'react';
import { Product } from './models/Product';
import { MapperTable } from './components/TableTypes';

function App() {

	const [items, setItems] = useState<Product[]>(products);

	const mapperTable: MapperTable<Product>[] = [
		{ 
			label: 'Name', accessor: 'name', 
			sortable: true, cellClassName: 'table__cell table__cell--text-left',
			headerClassName: 'table__heading'
		},
		{ 
			label: 'Price', accessor: 'price', 
			sortable: true, cellClassName: 'table__cell table__cell--text-centered',
			headerClassName: 'table__heading'
		}
	]

	return (
		<div className="app">
			<main className='container'>
				<Table
					items={items}  
					setItems={setItems}
					mapperElements={mapperTable}
					caption={'List of products'}
				/>
			</main>
		</div>
	);
}

export default App;
