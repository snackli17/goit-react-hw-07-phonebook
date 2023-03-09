import axios from 'axios';

axios.defaults.baseURL = 'https://6408bb6c2f01352a8a9bf830.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}
