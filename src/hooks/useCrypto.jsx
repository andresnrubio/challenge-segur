import { useState } from 'react';
import CryptoJS from 'crypto-js';

const useCrypto = () => {
  const [encryptedData, setEncryptedData] = useState(null);

  const encryptAndSaveData = (data, secretKey) => {
    const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    localStorage.setItem('encryptedData', encryptedData);
    setEncryptedData(encryptedData);
  };

  const decryptData = (secretKey) => {
    const encryptedData = localStorage.getItem('encryptedData');
    if (encryptedData) {
      const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decryptedData;
    }
    return null;
  };

  return {
    encryptedData,
    encryptAndSaveData,
    decryptData,
  };
};

export default useCrypto;
