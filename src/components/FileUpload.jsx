import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import styled from '@mui/material/styles/styled'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import axios from 'axios'

import { toast } from 'sonner'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export default function FileUpload(props) {
  const [url, setUrl] = useState(null)
  const [file, setFile] = useState(null)

  useEffect(() => {
    const credString = localStorage.Credentials
    const cred = JSON.parse(credString)
    console.log(cred)
    setUrl(cred.profilePicture)
  }, [])

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
    const reader = new FileReader()

    reader.readAsDataURL(event.target.files[0])
    reader.onloadend = () => setUrl(reader.result)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', file)

    try {
      const response = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      await axios.post('/upload', response.data)

      toast.success('File uploaded successfully')
    } catch (error) {
      toast.error('File upload failed')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Box component="label" variant="text" startIcon={<CloudUploadIcon />}>
          {props.children}
          <VisuallyHiddenInput type="file" onChange={handleFileChange} />
        </Box>

        <Button type="submit" variant="text">
          Submit
        </Button>
      </form>

      <img src={url} alt="" />
    </>
  )
}
