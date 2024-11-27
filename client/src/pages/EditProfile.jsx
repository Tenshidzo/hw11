import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleSave = async () => {
    await fetch(`http://localhost:5000/api/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    navigate(`/profile/${id}`);
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Редагувати профіль</h1>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <button onClick={handleSave}>Зберегти</button>
    </div>
  );
}

export default EditProfile;
