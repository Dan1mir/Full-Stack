const express = require('express');
const Router = require('./routes/routes.js')
const cors = require('cors')

const PORT = 8080;
const app = express();

app.use(cors())
app.use(express.json())
app.use(Router)

app.listen(PORT, () => console.log(`Server starting at http://localhost:${PORT}`));