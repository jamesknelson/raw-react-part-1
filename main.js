/*
 * Data
 */

var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Jim", email: "jim@example.com"},
  {key: 3, name: "Joe"},
]

var newContact = {name: "", email: "", description: ""}


/*
 * Entry point
 */

ReactDOM.render(
  React.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact
  }),
  document.getElementById('react-app')
)
