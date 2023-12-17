import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import TextField from '@mui/material/TextField'
import DialogActions from '@mui/material/DialogActions'

import AddIcon from '@mui/icons-material/Add'
import ProductItems from '../components/ProductItems'
import { useState } from 'react'

const Inventory = (props) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const [product, setProduct] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')

  const handleAddItem = async () => {
    const local = localStorage.Credentials
    const myData = JSON.parse(local)
    console.log(myData.email)
    const response = await axios.get(`/users?email=${myData.email}`)
    const user = response.data[0]

    console.log(user)
    const item = {
      product: product,
      category: category,
      price: price,
      stock: stock,
    }
    console.log(item)
    if (user.Inventory) {
      user.Inventory.push(item)
    } else {
      user.Inventory = [item]
    }
    try {
      const userResponse = await axios.get(
        `http://localhost:3001/users?email=${myData.email}`
      )
      // const user = userResponse.data[0]
      const resp = await axios.patch(`http://localhost:3001/users/${user.id}`, {
        Inventory: user.Inventory,
      })
      console.log(resp.data)
    } catch (error) {
      console.error(error)
    }
    handleClose()
  }
  return (
    <Box sx={{ p: 3 }}>
      <Grid item xs={9} sm={11} md={10} lg={11}>
        <Box
          sx={{
            bgcolor: 'white',
            // marginLeft: 2,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Inventory
          </Typography>
          <>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleClickOpen}
              sx={{ mb: 2 }}
            >
              Add Item
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Add New Item</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Product"
                  fullWidth
                  onChange={(e) => setProduct(e.target.value)}
                />
                <TextField
                  margin="dense"
                  label="Category"
                  fullWidth
                  onChange={(e) => setCategory(e.target.value)}
                />
                <TextField
                  margin="dense"
                  label="Price"
                  fullWidth
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                  margin="dense"
                  label="Stock"
                  fullWidth
                  onChange={(e) => setStock(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleAddItem}>Add</Button>
              </DialogActions>
            </Dialog>
          </>
          <ProductItems />
        </Box>
      </Grid>
    </Box>
  )
}

export default Inventory
