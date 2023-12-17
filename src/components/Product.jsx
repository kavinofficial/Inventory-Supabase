import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export default function Product({ id, image, name, category, price, stock }) {
  return (
    <>
      <Avatar
        alt="alt"
        src={image}
        // src="image/source"
        sx={{ width: 30, height: 30 }}
      >
        {name[0].toUpperCase()}
      </Avatar>

      <Typography sx={{ mx: 3 }} variant="subtitle2">
        {name}
      </Typography>
    </>
  )
}
