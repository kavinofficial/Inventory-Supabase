import React from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { DataGrid } from '@mui/x-data-grid'
import { faker } from '@faker-js/faker'

import customers from '../components/ListOrders'

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 90,
    description: 'id of the product',
  },
  {
    field: 'fullname',
    headerName: 'Full Name',
    width: 200,
    description: 'customer full name',
    renderCell: (params) => {
      return (
        <>
          <Avatar
            alt="name"
            variant="square"
            sx={{ borderRadius: 1, width: 30, height: 30 }}
            src={faker.image.urlPicsumPhotos()}
          ></Avatar>
          <Typography variant="subtitle2" sx={{ mx: 3 }}>
            {`${params.row.firstName || ''} ${params.row.lastName || ''} `}
          </Typography>
        </>
      )
    },
  },
  {
    field: 'orderNumber',
    headerName: 'Number Of Order',
    width: 150,
    description: 'number of order that the customer made',
    valueGetter: (params) => {
      // params.row.orders.length
      // console.log(params.row.orders.length)
      return 1
    },
  },
  {
    field: 'total',
    headerName: 'Total Amount',
    width: 200,
    description: 'total amount of the order',
    valueGetter: (params) => {
      const total = faker.number.int({ min: 150, max: 1000 })
      return `₹${total}`
    },
  },
  {
    field: 'orderHistory',
    headerName: 'Order Details',
    width: 200,
    description: 'the details of the order',
    valueGetter: (params) => {
      const history = faker.date.recent(5)
      const formattedHistory = `${history.getDate()}-${
        history.getMonth() + 1
      }-${history.getFullYear()} ${history.getHours()}:${history.getMinutes()}`
      return formattedHistory
    },
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    width: 200,
    description: 'total amount of the order',
  },
]

const CustomerList = () => {
  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: 2,
        height: 'calc(100vh - 180px)',
      }}
    >
      <DataGrid
        sx={{
          pl: 3,
          '--unstable_DataGrid-headWeight': 600,
          borderRadius: 3,
        }}
        rows={customers}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[15, 20, 30]}
        rowSelection={false}
      />
    </Box>
  )
}

export default CustomerList
