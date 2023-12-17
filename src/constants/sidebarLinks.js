import CardTravelOutlined from '@mui/icons-material/CardTravelOutlined'
import DescriptionOutlined from '@mui/icons-material/DescriptionOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import HomeOutlined from '@mui/icons-material/HomeOutlined'
import Inventory2Outlined from '@mui/icons-material/Inventory2Outlined'
import MonetizationOnOutlined from '@mui/icons-material/MonetizationOnOutlined'
import PeopleAltOutlined from '@mui/icons-material/PeopleAltOutlined'
import SettingsOutlined from '@mui/icons-material/SettingsOutlined'
import TrendingUpOutlined from '@mui/icons-material/TrendingUpOutlined'

export const sideBarLinks = [
  {
    title: 'Home',
    url: '/home',
    icon: HomeOutlined,
  },
  {
    title: 'Inventory',
    url: '/inventory',
    icon: Inventory2Outlined,
  },
  {
    title: 'Orders',
    url: '/orders',
    icon: CardTravelOutlined,
  },
  {
    title: 'Customers',
    url: '/customers',
    icon: PeopleAltOutlined,
  },
  // {
  //   title: 'Revenue',
  //   url: '/revenue',
  //   icon: MonetizationOnOutlined,
  // },
  {
    title: 'Growth',
    url: '/growth',
    icon: TrendingUpOutlined,
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: DescriptionOutlined,
  },
  {
    title: 'Profile',
    url: '/profile',
    icon: AccountCircleOutlinedIcon,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: SettingsOutlined,
  },
]
