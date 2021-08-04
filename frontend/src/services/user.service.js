import { storageService } from './async-storage.service.js';

const STORAGE_KEY = 'users';

const gDefaultUsers = [
    {
      _id: '5a56640269f443a5d64b32ca',
      name: 'liz',
      email: 'ochoahyde@renovize.com',
      phone: '+1 (968) 593-3824',
      password:'1234'
    },
    {
      _id: '5a5664025f6ae9aa24a99fde',
      name: 'Hallie',
      email: 'halliemclean@renovize.com',
      phone: '+1 (948) 464-2888',
      password:'1234'
    },
    {
      _id: '5a56640252d6acddd183d319',
      name: 'Parsons',
      email: 'parsonsnorris@renovize.com',
      phone: '+1 (958) 502-3495',
      password:'1234'
    }
]


_loadContacts(); ;


async function login(user) {
    const userData = await  storageService.get(STORAGE_KEY, user);
    return userData.data;
  }
  
  async function update(user) {
    const userData = await storageService.put(STORAGE_KEY, user);
    return userData.data;
  }

  const getEmptyForm = () => {
    return {
      company: "",
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      postalCode: "",
      about: "",
    };
  };

  
function _loadContacts() {
    let users = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    if (!users || !users.length) users = gDefaultUsers;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
    console.log(users);
    return users;
  }
  
  
  export { login ,update, getEmptyForm };
  