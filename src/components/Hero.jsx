import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

import { Link as RouterLink } from 'react-router-dom'
import { RxChevronDown } from 'react-icons/rx'
import DoneIcon from '@mui/icons-material/Done'
import { AiFillThunderbolt } from 'react-icons/ai'

const infoData = [
  { title: '70+', subtitle: 'Clients' },
  { title: '89K', subtitle: 'Followers on social media' },
  { title: '30+', subtitle: 'Published books' },
  { title: '18+', subtitle: 'TED talks' },
  { title: '12+', subtitle: 'Years of experience' },
  { title: '10+', subtitle: 'workshops' },
]

const Info = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'common.white',
          border: '#bbb solid 1px',
          borderRadius: 3,
          py: 8,
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          rowSpacing={8}
        >
          {infoData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="body1">{item.subtitle}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

const About = () => {
  return (
    <Container sx={{ my: 15 }}>
      <Typography variant="h3" textAlign="center" sx={{ mb: 1 }}>
        About Us
      </Typography>
      <Grid container justifyContent="center" alignItems="center" spacing={8}>
        <Grid item xs={12} md={6}>
          <List>
            {[
              'Instock is your solution for smooth and efficient inventory management.',
              "We're a tech-savvy startup dedicated to transforming how businesses handle their inventory.",
              'Our mission is to help businesses succeed through the power of managing stock.',
              "Enjoy an interface that's easy to navigate and packed with powerful features.",
              'Instock is here to elevate your business to new heights through efficient inventory management.',
              "Whether you're a small retailer or a large enterprise, Instock is tailored to meet your needs.",
              'Instock is a one-stop-shop for inventory management, designed to simplify your processes.',
            ].map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon sx={{ minWidth: '48px' }}>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center" overflow="hidden">
          <img src="/about-image.svg" />
        </Grid>
      </Grid>
    </Container>
  )
}

const featureArray = [
  {
    icon: AiFillThunderbolt,
    title: 'Real-Time Tracking',
    description:
      'Instantly monitor and update inventory levels for precise stock information, facilitating prompt decision-making and operational efficiency.',
  },
  {
    icon: AiFillThunderbolt,
    title: 'Automated Alerts',
    description:
      'Receive notifications promptly regarding low stock, overstock, or expiring items, preventing potential issues and enabling proactive inventory management',
  },
  {
    icon: AiFillThunderbolt,
    title: 'Barcode Scanning',
    description:
      'Simplify data entry with efficient barcode scanning, reducing errors and improving accuracy in item identification for streamlined inventory processes.',
  },
  {
    icon: AiFillThunderbolt,
    title: 'Order Management',
    description:
      'Streamline order processing, shipment tracking, and fulfillment within the portal for efficient customer order handling and smooth workflow.',
  },
  {
    icon: AiFillThunderbolt,
    title: 'Multi-Location Support',
    description:
      'Centralize control for managing inventory across locations, optimizing efficiency by providing a unified view and facilitating seamless stock movement.',
  },
  {
    icon: AiFillThunderbolt,
    title: 'User Permissions',
    description:
      'Ensure data security with role-based access control, restricting portal access based on user roles, safeguarding sensitive information',
  },
]

const Feature = () => {
  return (
    <>
      <Container sx={{ mt: 15, mb: 15 }}>
        <Typography variant="h3" textAlign={'center'}>
          Built to empover every team 😎
        </Typography>
        <Typography variant="body1" textAlign={'center'} marginBottom={8}>
          to manage and Work Efficiently
        </Typography>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={15}
        >
          {featureArray.map((pts, i) => (
            <Grid key={i} item xs={12} md={6} lg={4} textAlign={'center'}>
              <pts.icon style={{ width: '50px', height: '50px' }} />
              <Typography variant="h5" fontWeight={'bold'}>
                {pts.title}
              </Typography>
              <Typography variant="body1">{pts.description}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

const ContactForm = () => {
  return (
    <>
      <Container sx={{ mt: 15, mb: 15 }}>
        <Box>
          <Typography variant="h3">Let's talk!</Typography>
          <Typography
            variant="body1"
            sx={{ mt: 3, maxWidth: { sm: '75%', md: '45%' } }}
          >
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </Typography>
        </Box>
        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} textAlign="center">
            <Grid textAlign="end">
              <img
                src="/contactImg.svg"
                style={{ width: '100%', height: '100%', marginTop: '30px' }}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container rowSpacing={3} columnSpacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1" fontSize={18} mb={1}>
                  First Name
                </Typography>
                <TextField
                  placeholder="Enter your first name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontSize={18} mb={1}>
                  Last Name
                </Typography>
                <TextField
                  placeholder="Enter your last name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" fontSize={18} mb={1}>
                  Email
                </Typography>
                <TextField
                  placeholder="Enter your email"
                  type="email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" fontSize={18} mb={1}>
                  Message
                </Typography>
                <TextField
                  multiline
                  placeholder="Enter your message"
                  variant="outlined"
                  rows={6}
                  fullWidth
                  style={{ borderColor: '#b8bcc2' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" size="large" fullWidth>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Chip
            sx={{ mb: 1 }}
            label={
              <span>
                Want to learn more about{' '}
                <Link
                  sx={{ fontWeight: 600, textDecoration: 'none' }}
                  component={RouterLink}
                  to="/about"
                >
                  Instock About. →
                </Link>
              </span>
            }
            variant="outlined"
          />

          <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
            Empower Tomorrow, <br />
            One Innovation at a Time
          </Typography>

          <Typography variant="body1" fontSize="18px" maxWidth="sm">
            Optimize operations with efficient inventory management
            <br />
            for businesses and empower individuals to excel in dynamic control.
          </Typography>

          <Box sx={{ mt: 6 }}>
            <Button
              variant="contained"
              component={RouterLink}
              to="/register"
              size="large"
              sx={{ mr: 2 }}
            >
              Register
            </Button>
            <Button
              component={RouterLink}
              to="/login"
              variant="outlined"
              size="large"
            >
              Login
            </Button>
          </Box>
        </Box>
        <Box position="absolute" sx={{ cursor: 'pointer' }} bottom="0">
          <RxChevronDown size="28px" />
        </Box>
      </Box>
      <Info />
      <About />
      <Feature />
      <ContactForm />
    </>
  )
}

export default Hero
