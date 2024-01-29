export const getUsers = (req, res) => {
  // 사용자 목록을 반환하는 로직
  // //   // Retrieve a list of users from a database or API
   const users = [
     { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
   ];

 res.json(users);
};

// POST /api/users
export const createUser = (req, res) => {
  // 새로운 사용자를 생성하는 로직
};