var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  },

  onNameInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.contact, {name: e.target.value}))
  },

  onEmailInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.contact, {email: e.target.value}))
  },

  onDescriptionInput: function(e) {
    this.props.onChange(Object.assign({}, this.props.contact, {description: e.target.value}))
  },

  onSubmit: function(e) {
    e.preventDefault()
    this.props.onSubmit()
  },

  componentDidMount: function() {
    ReactDOM.findDOMNode(this.refs.name).focus()
  },

  render: function() {
    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          onInput: this.onNameInput,
          value: this.props.contact.name,
          ref: 'name',
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          onInput: this.onEmailInput,
          value: this.props.contact.email,
        }),
        React.createElement('textarea', {
          placeholder: 'Description',
          onInput: this.onDescriptionInput,
          value: this.props.contact.description,
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  },
});
