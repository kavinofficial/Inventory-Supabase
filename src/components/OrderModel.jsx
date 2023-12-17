import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import DeleteOutline from '@mui/icons-material/DeleteOutline'

import { faker } from '@faker-js/faker'

function generateIndianPhoneNumber() {
  let number = '9'
  for (let i = 0; i < 9; i++) {
    number += Math.floor(Math.random() * 10)
  }
  return '+91' + number
}

export default function OrderModal({ order }) {
  // console.log('the order lists are :\n', order.products[0].product.name)

  const handleDeleteProductFromOrder = (orderId, productId) => {
    console.log('delete the product : ', productId, ' from the order ', orderId)
  }

  const tableRows = order.products.map((orderProduct, index) => {
    return (
      <TableRow key={index}>
        <TableCell>{orderProduct.product.name}</TableCell>
        <TableCell>{orderProduct.quantity}</TableCell>
        <TableCell>{orderProduct.product.stock}</TableCell>
        <TableCell>
          <IconButton
            onClick={() =>
              handleDeleteProductFromOrder(order.id, orderProduct.product.id)
            }
          >
            <DeleteOutline color="error" />
          </IconButton>
        </TableCell>
      </TableRow>
    )
  })
  // console.log(tableRows)

  return (
    <Box
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'white',

        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}
    >
      <Box sx={{ color: 'black', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ m: 3 }}>
          OrderList
        </Typography>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '30%',
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Name </Typography>
          <Typography variant="subtitle1" color={'grey'}>
            {faker.name.firstName()}
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '30%',
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Position </Typography>
          <Typography variant="subtitle1" color={'grey'}>
            {faker.commerce.department()}
          </Typography>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '30%',
            m: 3,
          }}
        >
          <Typography variant="subtitle1">Mobile </Typography>
          <Typography variant="subtitle1" color={'grey'}>
            {generateIndianPhoneNumber()}
          </Typography>
        </Paper>
        <Box>
          <TableContainer sx={{ marginBottom: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Stock Availability</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* loop through the product list */}
                {tableRows}
              </TableBody>
            </Table>
          </TableContainer>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              m: 0,
            }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: 'error.main', m: 3, px: 12 }}
            >
              Reject
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: '#504099', m: 3, px: 12 }}
            >
              Approve
            </Button>
          </Paper>
        </Box>
      </Box>
    </Box>
  )
}
