import logo from './assets/react.svg'

function Header() {
  return (
    <nav className='nav'>
      <img src={logo} className='nav-img' />
      <ul className='nav-items'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Header;
