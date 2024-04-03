import React from 'react';
import users from '../data/users.json';
const UsersList = () => {
  console.log(users);

  return (
    <section className="flex flex-col">
      {localStorage.getItem('user') ? (
        <>
          <p className="text-sm opacity-60">Mostrando {users.length} resultados </p>
          <ol className="grid-cols-4-50px/3fr mt-2 grid w-full border-b border-gray-200 px-4 pb-2">
            <li></li>
            <li>Nombre / Rol</li>
            <li>Correo Electronico</li>
            <li>Telefono</li>
          </ol>
          {users.map((user) => (
            <div className="flex items-center">
              <input type="checkbox" className="h-4" />
              <div className="align-center grid-cols-4-50px/3fr grid w-full border-b border-gray-200 bg-light-purple p-4 text-sm">
                <img src={user.profileImg} alt="" className="h-10 w-auto self-center rounded-full bg-black" />
                <div className="flex">
                  <div>
                    <p className="text-md">
                      {user.name} {user.lastname}
                    </p>
                    <p classname="italic text-xs">{user.role}</p>
                  </div>
                </div>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1>Debes iniciar sesion para acceder al gestor</h1>
      )}
    </section>
  );
};

export default UsersList;
