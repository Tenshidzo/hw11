import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <Link to={`/edit/${user.id}`}>Редагувати</Link>
    </div>
  );
}

export default UserProfile;
