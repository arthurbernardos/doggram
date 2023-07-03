import { useState } from 'react';

const UserPost = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <input
        type="text"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
    </div>
  );
};

export default UserPost;
