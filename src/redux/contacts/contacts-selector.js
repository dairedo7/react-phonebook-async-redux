import { getFilterVal } from 'redux/filter/filter-selector';

export const getContacts = state => state.contacts.items;
export const contactsLoading = state => state.contacts.loading;

export const findContactsByQuery = state => {
  const contacts = getContacts(state);
  const nameToFilter = getFilterVal(state);

  return contacts.filter(
    ({ name, phone }) =>
      name.toLowerCase().includes(nameToFilter.toLowerCase()) ||
      phone.includes(nameToFilter)
  );
};
