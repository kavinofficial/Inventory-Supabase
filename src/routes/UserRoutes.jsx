import React, { Suspense } from 'react'

// MUI
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'

// Components
import SideBar from '../components/SideBar'
import DashboardNav from '../components/DashboardNav'
import Loader from '../components/Loader'

// Others
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSidebar } from '../features/ui/uiSlice'
import { toast } from 'sonner'

export default function UserRoutes() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state) => state.ui.sidebarOpen)

  React.useEffect(() => {
    if (localStorage.getItem('Authenticated') !== 'true') {
      navigate('/login')
      toast.error('You need to login first')
    } else if (window.location.pathname.match(/^\/user\/?$/)) {
      navigate('/user/home')
    }
  }, [])

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <Grid
          sx={{
            height: '100%',
            zIndex: 1250,
            transition: 'margin 0.3s',
            width: '350px',
            maxWidth: '95%',
            marginLeft: isSidebarOpen ? '0px' : '-350px',
            position: { xs: 'absolute', md: 'relative' },
          }}
          item
          xs={12}
          md={4}
          lg={3}
          xl={2}
        >
          <SideBar />
        </Grid>
        <Backdrop
          sx={{ zIndex: 1200, display: { xs: 'block', md: 'none' } }}
          open={isSidebarOpen}
          onClick={() => dispatch(toggleSidebar())}
        />
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          xl={10}
          width="100%"
          sx={{ height: '100%', overflow: 'auto' }}
          bgcolor="#fafafa"
        >
          <DashboardNav />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
          {/* <Box sx={{ p: 4 }}>
            <Typography>Here sidebar 2 will go here</Typography>
            <List>
              {Array(10)
                .fill()
                .map((_, i) => (
                  <ListItem key={i}>Item {i + 1}</ListItem>
                ))}
            </List>
          </Box> */}
        </Grid>
      </Box>
    </Box>
  )
}
