// server.js
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body
  console.log("New Contact Submission:")
  console.log("Name:", name)
  console.log("Email:", email)
  console.log("Message:", message)

  // Here you can add: save to database, send email notification, etc.

  res.status(200).json({ message: "Message received successfully" })
})

const PORT = 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
