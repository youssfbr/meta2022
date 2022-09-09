import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {  
  return (
    <header>
        <div className="logo-container">
            <img src={logo} alt="Logo Meta" />
            <h1>Meta</h1>
            <p>
              Desenvolvido por
              <a href="https://github.com/youssfbr/meta2022"><strong> @youssfbr</strong></a>
            </p>
        </div>
    </header>
  )
}

export default Header