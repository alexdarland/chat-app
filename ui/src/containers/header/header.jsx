const React = require('react')
const Icon = require('../../components/icon/icon.jsx')

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuIsActive: false
    }
  }

  openMenu(shouldOpen) {
    this.setState({ menuIsActive: shouldOpen })
  }

  render() {
    return (
      <>
        <header className='header'>
          <h1 className='header__logo'>Chat app</h1>
          <button className='header__button' onClick={() => { this.openMenu(!this.state.menuIsActive) }}>
            {this.props.username} <Icon name='cog' middle='true'/>
          </button>
        </header>
      </>
    )
  }
}

module.exports = Header
