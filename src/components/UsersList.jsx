import React from 'react';
import users from '../data/users.json';
const UsersList = () => {
  console.log(users);

  return (
    <section className="flex w-3/4 flex-col gap-3">
      {users.map((user) => (
        <div className="flex w-full rounded-md border border-gray-200 bg-light-purple p-4 shadow-sm">
          <img src={user.profileImg} alt="" />
          <div>
            <h4 className="text-lg">
              {user.name} {user.lastname}
            </h4>
            <div className="text-sm">
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default UsersList;
