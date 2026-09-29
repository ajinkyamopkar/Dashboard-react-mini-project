import { memo } from 'react';
import UserCard from './UserCard';

function UserGrid({ users, onSelect }) {
  return (
    <div className="row g-3 g-lg-4">
      {users.map((user, i) => (
        <div key={user.id} className="col-12 col-md-6 col-xl-4">
          <UserCard user={user} index={i} onSelect={onSelect} />
        </div>
      ))}
    </div>
  );
}

export default memo(UserGrid);
