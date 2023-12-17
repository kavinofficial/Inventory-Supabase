import React from 'react'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

const InfoCard = ({ icon, title, subTitle }) => {
  return (
    <div>
      <Card variant="outlined" sx={{ borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }} pl={1}>
          <Box
            p={1}
            m={2}
            sx={{
              display: 'flex',
              bgcolor: 'primary.main',
              alignItems: 'center',
              borderRadius: 2,
            }}
          >
            {icon}
          </Box>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" color="text.primary" component="div">
              {title}
            </Typography>
            <Typography
              variant="h5"
              fontWeight={'bolder'}
              color="text.secondary"
              component="div"
            >
              {String(subTitle)}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}

export default InfoCard
