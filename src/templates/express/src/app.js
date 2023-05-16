const express = require('express');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/api', userRoutes);

app.listen(PORT, () =>
  console.log(
    `\n🚀  Server listening on port ${PORT} \n--> Test endpoint: http://localhost:${PORT}/api/users`
  )
);
