import './index.css';
import gptLogo from './assets/chatgpt.svg';
import addbtn from './assets/add-30.png';
import msgicon from './assets/message.svg';
import home from './assets/home.svg';
import save from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

function App() {
  return (
    <>
      <div className="App">
        <div className="sidebar">
          <div className="upper">
            <div className="uppersidetop">
              <img src={gptLogo} alt="LOGO" className="logo" />
              <span className="brand">ChatGPT</span>
            </div>

            <button className="midbutton">
              <img src={addbtn} alt="" className="addbtn" /> New Chat
            </button>

            <div className="uppersidebottom">
              <button className="query">
                <img src={msgicon} alt="query" /> What is Programming?
              </button>
              <button className="query">
                <img src={msgicon} alt="query" /> How to use an API?
              </button>
            </div>
          </div>

          <div className="lower">
            <div className='list_items'><img src={home} alt="" className="listitemsimg" />Home</div>
            <div className='list_items'><img src={save} alt="" className="listitemsimg" />Saved</div>
            <div className='list_items'><img src={rocket} alt="" className="listitemsimg" />Upgrade to Pro</div>
          </div>
        </div>

        <div className="main"></div>
      </div>
    </>
  );
}

export default App;
