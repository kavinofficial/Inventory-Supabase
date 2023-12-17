import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const OverviewChart = () => {
  // Move the declaration of chartData to the top
  const chartData = {
    series: [
      { name: 'Sea Food', value: 14 },
      { name: 'Cosmetics', value: 23 },
      { name: 'Fruits', value: 21 },
      { name: 'vegatable', value: 17 },
      { name: 'Checken', value: 15 },
      { name: 'Mutton', value: 10 },
      { name: 'Medicine', value: 12 },
      { name: 'Furniture', value: 17 },
      { name: 'Mackup', value: 21 },
    ],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff'],
      },
      fill: {
        opacity: 0.8,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      labels: [], // Empty array to be populated later
    },
  }

  // Populate labels after chartData is defined
  chartData.options.labels = chartData.series.map((fruit) => fruit.name)

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series.map((fruit) => fruit.value)}
        type="polarArea"
      />
    </div>
  )
}
const OverviewContent = () => {
  return (
    <>
      <Typography variant="h5" fontWeight={'bold'} marginBottom={3}>
        Inventory Overview
      </Typography>
      <Typography variant="body1" marginBottom={3} textAlign={'start'}>
        Welcome to the Inventory Management Report. This page provides a
        comprehensive overview of your inventory, allowing you to monitor key
        metrics and make informed decisions. Below are some highlights:
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item sm={12} md={6} lg={4} textAlign={'center'}>
          <Typography variant="h6" fontWeight={'bold'}>
            Total Stock Value
          </Typography>
          <Typography variant="subtitle1">₹ 875,987</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4} textAlign={'center'}>
          <Typography variant="h6" fontWeight={'bold'}>
            Items in Stock
          </Typography>
          <Typography variant="subtitle1">7548</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4} textAlign={'center'}>
          <Typography variant="h6" fontWeight={'bold'}>
            Top Selling
          </Typography>
          <Typography variant="subtitle1">Cosmetics</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4} textAlign={'center'}>
          <Typography variant="h6" fontWeight={'bold'}>
            Low Stock Items
          </Typography>
          <Typography variant="subtitle1">15 Items</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4} textAlign={'center'}>
          <Typography variant="h6" fontWeight={'bold'}>
            Recent Transactions
          </Typography>
          <Typography variant="subtitle1">56 Transactions</Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4} textAlign={'center'}>
          <Typography variant="h6" fontWeight={'bold'}>
            Future Transactions
          </Typography>
          <Typography variant="subtitle1">89 Transactions</Typography>
        </Grid>
      </Grid>
    </>
  )
}
function OverView() {
  return (
    <div
      style={{ paddingLeft: '20px', paddingRight: '40px', marginTop: '20px' }}
    >
      <Typography variant="h5" fontWeight={'bold'} marginBottom={5}>
        Overview
      </Typography>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item sm={12} md={12} lg={6} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'}>
            <OverviewContent />
          </Typography>
        </Grid>
        <Grid item sm={12} md={12} lg={6} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'}>
            Top Selling Products
          </Typography>
          <OverviewChart />
        </Grid>
      </Grid>
    </div>
  )
}
const ThisYear = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Sales',
        data: [2000, 3000, 1500, 800, 3800, 2500, 2200, 900],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'category',
        categories: [
          'Sea Food',
          'Cosmetics',
          'Fruits',
          'Vegatables',
          'Furnitures',
          'Mutton',
          'Chicken',
          'MackUp',
        ],
      },
      title: {
        text: 'Stock Sold',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: 0,
        max: 4000,
      },
    },
  })

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={400}
      />
    </div>
  )
}
const PreviousYear = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Sales',
        data: [400, 1000, 3500, 2800, 800, 500, 2700, 1900],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'category',
        categories: [
          'Sea Food',
          'Cosmetics',
          'Fruits',
          'Vegatables',
          'Furnitures',
          'Mutton',
          'Chicken',
          'MackUp',
        ],
      },
      title: {
        text: 'Stock Sold',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: 0,
        max: 4000,
      },
    },
  })

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={400}
      />
    </div>
  )
}
const SalesAmount = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [11, 25, 26, 44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [34, 67, 56, 76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [22, 41, 32, 35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 400,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          '2012',
          '2013',
          '2014',
          '2015',
          '2016',
          '2017',
          '2018',
          '2019',
          '2020',
          '2021',
          '2022',
          '2023',
        ],
      },
      yaxis: {
        title: {
          text: '₹ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands'
          },
        },
      },
    },
  })

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  )
}
function YearComparation() {
  return (
    <div
      style={{ paddingLeft: '20px', paddingRight: '40px', marginTop: '20px' }}
    >
      <Typography variant="h5" fontWeight={'bold'} marginBottom={5}>
        Year wise Comparation
      </Typography>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item sm={12} md={12} lg={6} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'}>
            Current Year
          </Typography>
          <ThisYear />
        </Grid>
        <Grid item sm={12} md={12} lg={6} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'}>
            Previous Year
          </Typography>
          <PreviousYear />
        </Grid>
        <Grid item sm={12} md={12} lg={12} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'}>
            Amount Stats
          </Typography>
          <SalesAmount />
        </Grid>
      </Grid>
    </div>
  )
}
const MonthComparation = () => {
  const chartData = {
    series: [
      {
        name: 'Profit',
        data: [45, 52, 38, 24, 33, 26, 21, 20],
      },
      {
        name: 'Loss',
        data: [35, 41, 62, 42, 13, 18, 29, 37],
      },
      {
        name: 'Gain',
        data: [87, 57, 74, 99, 75, 38, 62, 47],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5],
      },
      title: {
        text: 'Month Statistics',
        align: 'left',
      },
      legend: {
        tooltipHoverFormatter: function (val, opts) {
          return (
            val +
            ' - ' +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            ''
          )
        },
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          'Sea Food',
          'Cosmetics',
          'Fruits',
          'Vegatables',
          'Furnitures',
          'Mutton',
          'Chicken',
          'MackUp',
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function (val) {
                return val + ' (mins)'
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val + ' per session'
              },
            },
          },
          {
            title: {
              formatter: function (val) {
                return val
              },
            },
          },
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    },
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={400}
      />
    </div>
  )
}
const MonthStock = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Sales',
        data: [400, 300, 500, 800, 800, 500, 200, 800],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7,
      },
      stroke: {
        width: 5,
        curve: 'smooth',
      },
      xaxis: {
        type: 'category',
        categories: [
          'Sea Food',
          'Cosmetics',
          'Fruits',
          'Vegatables',
          'Furnitures',
          'Mutton',
          'Chicken',
          'MackUp',
        ],
      },
      title: {
        text: 'Stock Sold',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: 0,
        max: 1000,
      },
    },
  })

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={400}
      />
    </div>
  )
}
const MonthSalesAmount = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [12, 15, 36, 24, 54, 37, 56, 51, 28, 63, 50, 76],
      },
      {
        name: 'Revenue',
        data: [34, 67, 56, 76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [22, 41, 32, 35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 400,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
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
      yaxis: {
        title: {
          text: '₹ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands'
          },
        },
      },
    },
  })

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  )
}
function MonthWiseComparition() {
  return (
    <div
      style={{ paddingLeft: '20px', paddingRight: '40px', marginTop: '20px' }}
    >
      <Typography variant="h5" fontWeight={'bold'} marginBottom={5}>
        Month Wise Comparation
      </Typography>
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item sm={12} md={12} lg={6} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'} marginBottom={3}>
            Profits & Losses
          </Typography>
          <MonthComparation />
        </Grid>
        <Grid item sm={12} md={12} lg={6} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'} marginBottom={3}>
            Monthly Stocks
          </Typography>
          <MonthStock />
        </Grid>
        <Grid item sm={12} md={12} lg={12} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'}>
            Amount Stats
          </Typography>
          <MonthSalesAmount />
        </Grid>
      </Grid>
    </div>
  )
}
const DailyStats = () => {
  const chartData = {
    series: [
      {
        name: 'Profit',
        data: [80, 60, 108, 41, 60, 39, 70],
      },
      {
        name: 'Loss',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'category',
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={400}
      />
    </div>
  )
}
const DailySalesAmount = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [11, 25, 26, 44, 55, 57, 56],
      },
      {
        name: 'Revenue',
        data: [34, 67, 56, 76, 85, 101],
      },
      {
        name: 'Free Cash Flow',
        data: [22, 41, 32, 35, 41, 36],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 400,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sad'],
      },
      yaxis: {
        title: {
          text: '₹ (Hundreds)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands'
          },
        },
      },
    },
  })

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  )
}
const DayWiseOverAllAmountCollections = () => {
  const chartData = {
    series: [
      {
        name: 'Amount Sales',
        data: [200, 300, 400, 310, 150, 180, 33],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'radar',
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColors: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
          },
        },
      },
      title: {
        text: 'Daily Collections',
      },
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          },
        },
      },
      xaxis: {
        categories: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function (val, i) {
            if (i % 2 === 0) {
              return val
            } else {
              return ''
            }
          },
        },
      },
    },
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radar"
        height={400}
      />
    </div>
  )
}
function DayWiseComparision() {
  return (
    <div
      style={{ paddingLeft: '20px', paddingRight: '40px', marginTop: '20px' }}
    >
      <Typography variant="h5" fontWeight={'bold'} marginBottom={5}>
        Day Wise Comparision
      </Typography>

      <Grid container spacing={5} justifyContent="center" alignItems="center">
        <Grid item sm={12} md={12} lg={6} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'} marginBottom={3}>
            Profits & Losses
          </Typography>
          <DailyStats />
        </Grid>
        <Grid item sm={12} md={12} lg={6} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'} marginBottom={3}>
            Daywise Overall Collection
          </Typography>
          <DayWiseOverAllAmountCollections />
        </Grid>
        <Grid item sm={12} md={12} lg={12} textAlign={'center'}>
          <Typography variant="h5" fontWeight={'bold'}>
            Amount Stats
          </Typography>
          <DailySalesAmount />
        </Grid>
      </Grid>
    </div>
  )
}
function Report() {
  return (
    <Container>
      <Typography
        variant="h5"
        fontWeight={'bold'}
        style={{ marginTop: '20px', marginLeft: '10px' }}
      >
        Inventory Stock Report
      </Typography>
      <Typography
        variant="body1"
        style={{ marginTop: '10px', marginLeft: '10px' }}
      >
        The inventory management stock overview in your report page provides a
        concise snapshot of your current inventory status. It includes key
        metrics such as the total stock value, the number of items in stock,
        information on low stock items, details about top-selling items, recent
        transactions, and other essential insights. This helps in quick
        decision-making and proactive management of inventory, ensuring optimal
        stock levels and efficient operations.
      </Typography>
      <OverView />
      <YearComparation />
      <MonthWiseComparition />
      <DayWiseComparision />
    </Container>
  )
}

export default Report
