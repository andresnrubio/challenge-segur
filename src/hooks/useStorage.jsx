const useStorage = () => {
  const saveAtStorage = (storageName, data) => {
    localStorage.setItem(storageName, JSON.stringify(data));
  };

  const getFromStorage = (storageName) => {
    const storage_content = JSON.parse(localStorage.getItem(storageName));
    return storage_content;
  };

  const createUserAtStorage = (storageName, newUser) => {
    const updatedUsers = [...getFromStorage(storageName), newUser];
    saveAtStorage(storageName, updatedUsers);
  };

  const updateUserAtStorage = (storageName, updatedUser) => {
    const users = getFromStorage(storageName).map((user) =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user,
    );
    saveAtStorage(storageName, users);
  };

  const removeUserAtStorage = (storageName, userId) => {
    const users = getFromStorage(storageName).filter((user) => user.id !== userId);
    saveAtStorage(storageName, users);
  };

  const emptyStorage = (storageName) => {
    saveAtStorage(storageName, []);
  };
  return { saveAtStorage, getFromStorage, createUserAtStorage, updateUserAtStorage, removeUserAtStorage, emptyStorage };
};

export default useStorage;
