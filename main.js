/*
 * Constants
 */

var CONTACT_TEMPLATE = {name: "", email: "", description: ""}

/*
 * Current application state
 */

var contacts = [
  {id: 0, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {id: 1, name: "Bob Franklin", description: "Example"},
]
var newContact = Object.assign({}, CONTACT_TEMPLATE)


/*
 * Actions
 */

function onNewContactChange(contact) {
  newContact = contact
  render()
}

function onNewContactSubmit() {
  if (newContact.name) {
    contacts.push(Object.assign({}, newContact, {id: contacts.length}))
    newContact = Object.assign({}, CONTACT_TEMPLATE)
    render()
  }
}


/* 
 * User Interface
 */

// Render the above data to the page, connecting up the appropriate
// event handlers
function render() {
  ReactDOM.render(
    React.createElement(ContactView, {
      contacts: contacts,
      newContact: newContact,
      onNewContactChange: onNewContactChange,
      onNewContactSubmit: onNewContactSubmit,
    }),
    document.getElementById('react-app')
  )  
}

// Start the app by rendering with the initial data
render()
