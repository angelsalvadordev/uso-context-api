import { GET_API, REMOVE_CONTACT, SEARCH_CONTACT, EDIT_CONTACT, DISABLE_SEARCHER } from "./actions"

export const initialContacts = {
  contacts: [],
  search: "",
  isSearcherDisabled: false
}

//Reducer
export const contactsReducer = (state, action) => {
  switch (action.type) {
    // Agregar datos de API al estado
    case GET_API:
      return {
        ...state,
        contacts: state.contacts.concat(action.data)
      }

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.id
        })
      }

    case SEARCH_CONTACT:
      let word = action.data
      word = word.toLowerCase()
      return {
        ...state,
        search: word
      }
    case EDIT_CONTACT:
      const { id, name, phone, email } = action.data
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact.id === id) {
            contact.name = name
            contact.phone = phone
            contact.email = email
          }
          return contact
        })
      }

    case DISABLE_SEARCHER:
      return {
        ...state,
        isSearcherDisabled: action.data
      }
      break

    default: console.log('error inesperado', action.type)
      break
  }
}