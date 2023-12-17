import React, { useContext, useState } from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import Paper from '@mui/material/Paper'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { MyProvider } from '../App'

function GeneralInfo() {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    birthday: '',
    email: '',
    phoneno: '',
    gender: 0,
  })

  function handleChange(e) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Paper sx={{ p: 4, borderRadius: 2 }} variant="outlined">
      <Typography variant="h5" sx={{ textAlign: 'left', mt: 1 }}>
        General Informations
      </Typography>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h6">First Name</Typography>
          <TextField
            name="firstname"
            onChange={handleChange}
            value={data.firstname}
            placeholder="Enter your first name"
            size="small"
            variant="outlined"
            sx={{ mt: 1 }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h6">Last Name</Typography>
          <TextField
            name="lastname"
            onChange={handleChange}
            value={data.lastname}
            placeholder="Enter your last name"
            size="small"
            variant="outlined"
            sx={{ mt: 1 }}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h6">Birthday</Typography>
          <TextField
            name="birthday"
            onChange={handleChange}
            value={data.birthday}
            placeholder="dd/mm/yyyy"
            type="date"
            size="small"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h6">Gender</Typography>
          <FormControl fullWidth>
            <Select
              name="gender"
              size="small"
              sx={{ mt: 1 }}
              value={data.gender}
              onChange={handleChange}
            >
              <MenuItem selected disabled value={0}>
                Select Gender
              </MenuItem>
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Others</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h6">Email</Typography>
          <TextField
            name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="example@company.com"
            size="small"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h6">Phone Number</Typography>
          <TextField
            name="phoneno"
            onChange={handleChange}
            value={data.phoneno}
            placeholder="+12-345 678 910"
            size="small"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Grid>
      </Grid>

      {/* Address  */}

      <Typography variant="h5" sx={{ textAlign: 'left', mt: 5 }}>
        Address
      </Typography>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="h6">Permanent Address</Typography>
          <TextField
            placeholder="Enter your home Address"
            size="small"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Typography variant="h6">Number</Typography>
          <TextField
            placeholder="No."
            size="small"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={1}>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="h6">City</Typography>
          <TextField
            placeholder="City"
            size="small"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <Typography variant="h6">ZIP</Typography>
          <TextField
            placeholder="ZIP"
            size="small"
            fullWidth
            variant="outlined"
            sx={{ mt: 1 }}
          />
        </Grid>
      </Grid>
      <Grid item xs={4} mt={3}>
        <Button variant="contained">Save All</Button>
      </Grid>
    </Paper>
  )
}

const StatsComponent = ({ stats, statsLabel }) => {
  return (
    <Stack sx={{ p: 2 }} flex="1" textAlign="center">
      <Typography variant="h6">{stats}</Typography>
      <Typography variant="body1">{statsLabel}</Typography>
    </Stack>
  )
}

const stats = [
  {
    stats: '80k',
    statsLabel: 'Shipped',
  },
  {
    stats: '803k',
    statsLabel: 'Delivered',
  },
  {
    stats: '1.4k',
    statsLabel: 'Picked',
  },
]

function ProfileCard() {
  const context = useContext(MyProvider)

  return (
    <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
      <Stack sx={{ position: 'relative', textAlign: 'center' }}>
        <img
          style={{
            marginBottom: '4.5rem',
            width: '100%',
            height: '200px',
            backgroundColor: '#f0f0f0',
          }}
          height={600}
          // src="https://source.unsplash.com/random/372x200"
          src="https://png.pngtree.com/thumb_back/fh260/background/20190828/pngtree-dark-vector-abstract-background-image_302715.jpg"
          alt="background card profile"
        />
        <Avatar
          sx={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            width: '7rem',
            height: '7rem',
            border: '0.3rem solid white',
            borderRadius: '50%',
          }}
          alt="React"
          src={
            (context && context?.profilePicture) ||
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
          }
        />
        <Stack mb={1}>
          <Typography variant="h4">
            {context.firstName} {context.lastName}
          </Typography>
          <Typography variant="body2">
            {context.firstName === 'Priyanshu'
              ? 'Founder of AspireCoders'
              : 'User'}
          </Typography>
        </Stack>
        <Typography variant="h6" mb={4}>
          India
        </Typography>
        <Divider />
      </Stack>
      <Stack direction="row" p={1}>
        {stats.map((item, i) => (
          <StatsComponent
            key={i}
            stats={item.stats}
            statsLabel={item.statsLabel}
          />
        ))}
      </Stack>
    </Paper>
  )
}

export default function Profile() {
  return (
    <Container sx={{ p: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} md={8} lg={8}>
          <GeneralInfo />
        </Grid>
      </Grid>
    </Container>
  )
}
