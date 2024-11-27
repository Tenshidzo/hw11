let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
  
  exports.getUsers = (req, res) => res.json(users);
  
  exports.getUserById = (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).json({ message: 'User not found' });
  };
  
  exports.updateUser = (req, res) => {
    const index = users.findIndex((u) => u.id === parseInt(req.params.id));
    if (index !== -1) {
      users[index] = { ...users[index], ...req.body };
      res.json(users[index]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  };
  