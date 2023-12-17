const jsonServer = require('json-server')
const path = require('path')
const multer = require('multer')
const cors = require('cors')
const express = require('express')
const cropto = require('crypto')

const db = path.join(__dirname, '..', '/db/users.json')

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(cors())
server.use('/uploads', express.static(path.join(__dirname, 'public/uploads')))

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads/'),
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname +
        '-' +
        cropto.randomUUID() +
        path.extname(file.originalname)
    )
  },
})

const upload = multer({ storage: storage }).single('image')

// Handle file upload
server.post('/upload', (req, res, next) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).send(err)
    }

    res.json({
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
    })
  })
})

server.use(middlewares)
server.use(router)

const port = 3001
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`)
})
