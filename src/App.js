import logo from './logo.svg';
import './App.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF, faVk} from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Школа по сёрфскейту в Москве
        <div class="links">
          <a href="https://instagram.com/californian.moscow">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://facebook.com/californian.moscow">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://vk.com/californian.moscow">
            <FontAwesomeIcon icon={faVk} size="lg" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
