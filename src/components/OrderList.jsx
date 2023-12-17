import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { faker } from '@faker-js/faker'

import customers from '../components/ListOrders'
import OrderModal from './OrderModel'

const OrderList = () => {
  const [order, setOrder] = useState({})
  const [open, setOpen] = useState(false)

  const handleOrderDetail = (order) => {
    console.log('the order is : ', order)
    setOrder(order)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
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
      width: 250,
      description: 'customer full name',
      renderCell: (params) => {
        console.log(params)
        return (
          <>
            <Avatar sx={{ bgcolor: 'orange' }}>
              <img src={faker.internet.avatar()} alt="Avatar" />
            </Avatar>
            <Typography variant="subtitle2" sx={{ mx: 3 }}>
              {params.row.firstName}
            </Typography>
          </>
        )
      },
    },
    {
      field: 'mobile',
      headerName: 'Mobile',
      width: 250,
      description: 'customer phone number ',
      valueGetter: (params) => params.row.mobile,
    },
    {
      field: 'total',
      headerName: 'Total Amount',
      width: 250,
      description: 'total amount of the order',
      valueGetter: (params) => {
        const total = '₹' + faker.number.int({ min: 70, max: 2000 })
        return total
      },
    },
    {
      field: 'details',
      headerName: 'Order Details',
      width: 200,
      description: 'the details of the order',

      renderCell: (params) => {
        const order = params.row
        return (
          <Button
            variant="contained"
            sx={{ bgcolor: '#504099' }}
            onClick={() => {
              handleOrderDetail(order)
            }}
          >
            Order Details
          </Button>
        )
      },
    },
  ]

  return (
    <Box
      sx={{
        // margin: 3,
        bgcolor: 'white',
        borderRadius: 2,
        height: 'calc(100vh - 180px)',
      }}
    >
      <DataGrid
        sx={{
          // borderLeft: 0,
          // borderRight: 0,
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
        // checkboxSelection
      />
      <Modal open={open} onClose={handleClose}>
        <Box>
          <OrderModal order={order} />
        </Box>
      </Modal>
    </Box>
  )
}

export default OrderList
