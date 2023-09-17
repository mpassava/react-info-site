import logo from '../assets/react.svg'

function Navbar() {
  return (
    <nav className='nav'>
      <img src={logo} className='nav-img' />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar;
