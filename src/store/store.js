import { create } from 'zustand';

const useStore = create((set) => ({
  users: [],
  loggedUser: null,
  createUser: (user) => set((state) => ({ users: [...state.users, user] })),
  removeAllUsers: () => set({ users: [] }),
  addAllUsers: (users) => set({ users: users }),
  addFilterUsers: () =>
    set((state) => {
      // Definicion de roles
      const rolesPermitted = {
        admin: ['admin', 'gerente', 'vendedor', 'consulta', 'atencionalcliente'],
        gerente: ['vendedor', 'consulta', 'atencionalcliente'],
        atencionalcliente: ['vendedor', 'consulta'],
        vendedor: [],
        consulta: [],
      };

      // Filtro basado en el rol del usuario logueado
      const filteredUsers = state.users.filter((user) => rolesPermitted[state.loggedUser.role].includes(user.role));

      return { users: filteredUsers };
    }),
  updateUser: (updatedUser) =>
    set((state) => {
      const users = state.users.map((user) => (user.id === updatedUser.id ? updatedUser : user));
      return { users };
    }),
  removeUser: (userId) =>
    set((state) => {
      const users = state.users.filter((user) => user.id !== userId);
      return { users };
    }),
  setLoggedUser: (user) =>
    set((state) => ({
      ...state,
      loggedUser: user,
    })),
}));

export default useStore;
