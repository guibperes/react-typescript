import React, { useState, useEffect } from 'react';

import { api } from './services/api'
import { User } from './components/User'

interface IUser {
  name: string;
  email: string;
}

export const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    api
      .get<IUser[]>('/users')
      .then(res => setUsers(res.data))
  }, [])

  return (
    <div>
      { users.map(user => <User user={user} />) }
    </div>
  );
}
