const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 6001;

app.use(cors());
app.use(express.json);
//larbinidhal88
//63R4jP992gOKWvzj
app.get('/', (req, res) => {
  res.send('Hello nijijijij !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})