const React = require('react')
const Icon = require('../../components/icon/icon.jsx')

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.usernameInputReference = React.createRef()

    this.state = {
      username: this.props.username,
      menuIsActive: false,
      isEditingUsername: false
    }

    this.openMenu = this.openMenu.bind(this)
    this.editName = this.editName.bind(this)
    this.saveName = this.saveName.bind(this)
    this.onNameInputChange = this.onNameInputChange.bind(this)
  }

  openMenu(shouldOpen) {
    this.setState({
      menuIsActive: shouldOpen
    })
  }

  editName() {
    this.usernameInputReference.current.focus()

    this.setState({
      isEditingUsername: true
    })
  }

  saveName() {
    this.setState({
      isEditingUsername: false
    })
    this.props.updateState({ username: this.state.username }, true)
    localStorage.setItem('username', this.state.username)
  }

  onNameInputChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  renderUsernameEditButton() {
    return this.state.isEditingUsername ? (
      <button onClick={this.saveName}>
        Save
      </button>
    ) : (
      <button onClick={this.editName}>
        Edit
      </button>
    )
  }

  render() {
    const menuClass = `header__menu${ this.state.menuIsActive ? ' header__menu--active' : '' }`

    return (
      <>
        <header className='header'>
          <div className='header__item'></div>
          <div className='header__item'>
            <h1 className='header__logo'>Chat app</h1>
          </div>
          <div className='header__item'>
            <button className='header__button' onClick={() => { this.openMenu(!this.state.menuIsActive) }}>
              {this.props.username} <Icon name='cog' middle='true'/>
            </button>
          </div>
        </header>
        <aside className={menuClass}>
          <div className='header__menu-section'>
            <label className='header__menu-label'>Username:</label>
            <input className='header__name-input' value={this.state.username} disabled={ !this.state.isEditingUsername } onChange={this.onNameInputChange} ref={this.usernameInputReference}/>
            { this.renderUsernameEditButton() }
          </div>
        </aside>
      </>
    )
  }
}

module.exports = Header
