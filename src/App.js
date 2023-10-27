import './App.css';
import {LinkIcon} from './assets/icon';

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <h1 className="header-text">Reduce the length of your link</h1>
        <div className="input-container">
          <label>Reduce the link length</label>
          <div className="inner-input-container">
            <input type="text" className="" placeholder="Paste your url here" />
            <button className="reduce-link-btn">
              <LinkIcon /> Reduce Link
            </button>
          </div>
        </div>
        <div className="input-container">
          <label>Result</label>
          <div className="inner-input-container">
            <div className="short-url">wrfwve4</div>
            <button className="short-link-btn">
              <LinkIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
