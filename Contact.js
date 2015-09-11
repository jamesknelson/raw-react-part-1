var Contact = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'Contact'},
        this.props.name && React.createElement('div', {className: 'Contact-name'}, this.props.name),
        this.props.email && React.createElement('div', {className: 'Contact-email'}, this.props.email),
        this.props.description && React.createElement('div', {className: 'Contact-description'}, this.props.description)
      )
    )
  },
});
