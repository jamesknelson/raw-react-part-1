var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'ContactItem'},
        React.createElement('div', {className: 'ContactItem-name'}, this.props.name),
        React.createElement('div', {className: 'ContactItem-email'}, this.props.email),
        React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
      )
    )
  },
});
