import logo from '../assets/1x/audiophile@1x.png';
import menu from '../assets/1x/menu@1x.png';
import cart from '../assets/1x/cart@1x.png';

const Nav = () => {
  return (
    <header>
      <nav>
        <div className='nav-container'>
          <img src={menu} alt="" />
          <img src={logo} alt="" />
          <img src={cart} alt="" />
        </div>
        <div className="line"></div>
      </nav>
    </header>

  );
}

export default Nav;