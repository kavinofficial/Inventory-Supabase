import Typography from '@mui/material/Typography'
import LinkMUI from '@mui/material/Link'

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <LinkMUI
        color="inherit"
        href="https://github.com/blank-09/"
        target="_blank"
      >
        AspireCoders
      </LinkMUI>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
