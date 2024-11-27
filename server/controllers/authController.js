exports.login = (req, res) => {
    const { email, password } = req.body;
    if (email === 'admin@example.com' && password === 'password') {
      res.json({ id: 1, name: 'Admin', email });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  