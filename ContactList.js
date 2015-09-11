var ContactList = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
  },

  render: function() {
    return (
      React.createElement('ul', {className: 'ContactList'}, this.props.contacts.map(function(contact) {
        return (
          React.createElement('li', {key: contact.id},
            React.createElement(Contact, contact)
          )
        )
      }))
    )
  },
});
