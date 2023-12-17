import React, { Suspense } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ApexCharts = React.lazy(() => import('react-apexcharts'))

function GrowthTotalSales() {
  const options = {
    title: {
      text: 'Total Sales',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    subtitle: {
      text: 'Sales over time',
      align: 'left',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    legend: {
      customLegendItems: [
        'Current Year  <b>₹71,000K<b/>',
        'Previous Year <b>₹47,000K<b/>',
      ],
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial',
      offsetY: -20,
    },
    markers: {
      size: 4,
      strokeWidth: 2,
      hover: {
        size: 9,
      },
    },
    theme: {
      mode: 'light',
    },
    chart: {
      height: 328,
      type: 'line',
      zoom: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 0.2,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  }

  const series = [
    {
      type: 'line',
      name: 'This year',
      data: [
        2000, 3200, 3250, 4700, 3900, 4900, 3200, 2800, 2800, 3500, 4800, 5000,
      ],
      color: '#FF0000', // Red color
    },
    {
      name: 'Previous year',
      data: [
        1500, 1900, 1800, 2900, 2600, 3200, 2200, 3000, 2500, 2300, 1000, 3000,
      ],
      color: '#000000', // Black color
    },
  ]

  return (
    <Paper variant="outlined" sx={{ borderRadius: '10px', mb: 3 }}>
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: 2,
          padding: 4,
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ApexCharts
            options={options}
            series={series}
            height={400}
            type="line"
            width="100%"
          />
        </Suspense>
      </Box>
    </Paper>
  )
}
function OverviewGrowth() {
  return (
    <div>
      <Typography variant="h6" marginBottom={2} fontWeight={'bold'}>
        Overview of Inventory Growth
      </Typography>
      <Typography>
        This where you can get a quick snapshot of how your inventory has
        evolved over time. Our Inventory Management System is designed to
        provide you with comprehensive insights to enhance your business
        operations.
      </Typography>
      <br />
      <Typography>
        <strong>Current Inventory Size:</strong> As of [26/11/2023], your
        inventory comprises a diverse range of products, totaling [8975] items.
        This expansive selection ensures that you are well-equipped to meet the
        varied needs of your customers.
      </Typography>
      <br />
      <Typography>
        <strong>Growth Trends:</strong> Analyze the growth trends to identify
        patterns and opportunities. The system visualizes sales data, allowing
        you to understand which products and categories are driving the growth
        of your business.
      </Typography>
      <br />
      <Typography>
        <strong>New Additions:</strong> Over the past year, you've introduced
        numerous new products, enhancing the diversity of your inventory.
      </Typography>
      <br />
      <Typography>
        <strong>Strategic Recommendations:</strong> These insights aim to guide
        you in making informed decisions that will further propel the success of
        your inventory management.
      </Typography>
    </div>
  )
}
function StatsGrowth() {
  return (
    <div>
      <Typography
        variant="h6"
        marginBottom={3}
        fontWeight={'bold'}
        marginTop={3}
      >
        Key Statistics on Inventory Growth
      </Typography>
      <Typography textAlign={'start'} marginLeft={2}>
        <strong>Total Products:</strong> [89543]
        <br />
        <strong>Sales Growth:</strong> [68%]
        <br />
        <strong>Top Categories:</strong> [Cosmetics & Electronics]
        <br />
        <strong>Best-Selling Products:</strong> [Fruits]
        <br />
        <strong>Customer Satisfaction:</strong> [Best and Valuable products are
        Available]
        <br />
        <strong>Return Rate:</strong> [19/12/2023]
        <br />
        <strong>Average Order Value:</strong> [87%]
        <br />
        <strong>Popular Sales Channels:</strong> [sun Tv]
        <br />
        <strong>Inventory Turnover Rate:</strong> [45%]
        <br />
      </Typography>
    </div>
  )
}
const GrowthApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [42, 47, 52, 58, 65],
    options: {
      chart: {
        width: 380,
        type: 'polarArea',
      },
      labels: ['Cosmetics', 'Fruits', 'Vegatable', 'Electronics', 'Mackups'],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        position: 'bottom',
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: true,
          shadeTo: 'light',
          shadeIntensity: 0.6,
        },
      },
    },
  })

  useEffect(() => {
    // Additional logic can be added here if needed
  }, [])

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="polarArea"
        width={300}
      />
    </div>
  )
}
function GrowthPage() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography
        variant="h5"
        fontWeight={'bold'}
        style={{ marginTop: '10px', marginLeft: '10px' }}
      >
        Growth
      </Typography>
      <Typography
        variant="body1"
        style={{ marginTop: '10px', marginLeft: '10px' }}
      >
        This page provides a comprehensive view of the growth and performance of
        your inventory, offering valuable insights to drive strategic decisions
        for your business.Delve into detailed statistics that matter most to
        your business. From the total number of products in stock to the average
        order value and customer satisfaction rates, these insights empower you
        with the knowledge needed to optimize your inventory strategy.
      </Typography>
      <div
        style={{ paddingLeft: '20px', paddingRight: '40px', marginTop: '20px' }}
      >
        <Typography variant="h5" fontWeight={'bold'} marginBottom={2}>
          Key Statistics on Inventories
        </Typography>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item sm={12} md={12} lg={6}>
            <OverviewGrowth />
          </Grid>
          <Grid container sm={12} md={12} lg={6} textAlign={'center'}>
            <Grid item sm={12} md={12} lg={12}>
              <StatsGrowth />
            </Grid>
            <Grid
              item
              sm={12}
              md={12}
              lg={12}
              style={{ marginLeft: '100px', marginTop: '10px' }}
            >
              <GrowthApexChart />
            </Grid>
          </Grid>
          <Grid item sm={12} md={12} lg={12} textAlign={'center'}>
            <Typography variant="h5" fontWeight={'bold'} marginBottom={3}>
              Previous year (vs) Current year Growth
            </Typography>
            <GrowthTotalSales />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default GrowthPage
