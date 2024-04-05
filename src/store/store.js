import { create } from 'zustand';

const useStore = create((set) => ({
  users: [],
  loggedUser: null,
  createUser: (newUser) =>
    set((state) => {
      const updatedUsers = [...state.users, newUser];
      return { users: updatedUsers };
    }),
  removeAllUsers: () => set({ users: [] }),
  removeOneUser: (userId) =>
    set((state) => {
      return { users: state.users.filter((user) => user.id !== userId) };
    }),
  addAllUsers: (users) => set({ users: users }),
  addFilterUsersByRole: () =>
    set((state) => {
      const rolesPermitted = {
        admin: ['admin', 'gerente', 'vendedor', 'consulta', 'atencionalcliente'],
        gerente: ['vendedor', 'consulta', 'atencionalcliente'],
        atencionalcliente: ['vendedor', 'consulta'],
        vendedor: ['vendedor'],
        consulta: ['consulta'],
      };

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
