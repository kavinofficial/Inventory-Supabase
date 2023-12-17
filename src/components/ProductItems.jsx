import React from 'react'
import Product from './Product'
import productList from './ProductList'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    headerClassName: 'bold-header',
    description: 'id of the product',
  },
  {
    field: 'product',
    headerName: 'Product',
    width: 300,
    headerClassName: 'bold-header',
    description: '',
    //same here we have the cell data which i will get the value of the cells in the tables cellData.row.fieldName

    renderCell: (cellData) => {
      console.log('the cell data is : ', cellData.row.name)
      return <Product {...cellData.row} />
    },
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 200,
    headerClassName: 'bold-header',
    description: 'category of the product',
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    description: 'price of the product',
    headerClassName: 'bold-header',
    valueGetter: (params) => '₹' + params.row.price,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    headerClassName: 'bold-header',
    width: 200,
    description: 'how many items in the stock',
    valueGetter: (params) => params.row.stock + ' pcs',
  },
]

export default function ProductItems() {
  return (
    <div
      style={{
        height: 'calc(100vh - 230px)',
        width: '100%',
        overflow: 'auto',
        // marginLeft: '7px',
      }}
    >
      <DataGrid
        sx={{ borderRadius: 3, pl: 3, '--unstable_DataGrid-headWeight': 600 }}
        rows={productList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        // checkboxSelection
      />
    </div>
  )
}
