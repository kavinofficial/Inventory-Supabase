import React from 'react'
import { NavLink } from 'react-router-dom'

import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import Typography from '@mui/material/Typography'
import InventoryIcon from '@mui/icons-material/Inventory'

import { sideBarLinks as sidebarLinks } from '../constants/sidebarLinks'

export default function SideBar() {
  return (
    <Box
      component="aside"
      sx={{
        pt: 2,
        pr: 2,
        height: '100vh',
        width: '100%',
        borderRight: 1,
        borderColor: 'divider',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
          py: 1,
          mb: 2,
        }}
      >
        <InventoryIcon color="primary" />
        <Typography variant="h5" component="h1">
          INSTOCK
        </Typography>
      </Box>

      <List
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {sidebarLinks.map((item, index) => (
          <ListItem
            key={index}
            style={{
              marginTop: index + 1 === sidebarLinks.length ? 'auto' : 0,
            }}
            disablePadding
            // dense
          >
            <ListItemButton
              sx={{ borderRadius: '0 50px 50px 0', mb: 1, px: 2, py: 1 }}
              component={NavLink}
              to={`/user${item.url}`}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <item.icon color="primary" />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
