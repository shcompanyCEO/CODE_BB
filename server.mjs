import express from 'express';
import usersRouter from './routes/users.mjs';

const app = express();
const port = 3001;

app.use('/users', usersRouter);

// 나머지 애플리케이션 라우트 등록

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});