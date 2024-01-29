const express = require('express');
const app = express();
const port = 3001;

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// 나머지 애플리케이션 라우트 등록

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});