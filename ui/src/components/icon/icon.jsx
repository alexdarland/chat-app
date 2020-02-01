const React = require('react')

class Icon extends React.Component{

  renderLabel() {
    return <span className="visually-hidden" aria-hidden="true">{ this.props.label }</span>
  }

  iconClass() {
    let iconClass = 'icon'
    iconClass += this.props.inline ? ' icon--inline' : ''
    iconClass += this.props.block ? ' icon--block' : ''
    iconClass += this.props.middle ? ' icon--middle' : ''
    iconClass += this.props.class ? ` ${ this.props.class }` : ''
    return iconClass
  }

  render() {
    return (
      <React.Fragment>
        { this.renderLabel() }
        <svg className={ this.iconClass() }>
          <use xlinkHref={ `#icon-${ this.props.name }` }></use>
        </svg>
      </React.Fragment>
    )
  }
}

module.exports = Icon
