import './index.css';
import gptLogo from './assets/chatgpt.svg';
import addbtn from './assets/add-30.png';
import msgicon from './assets/message.svg';
import home from './assets/home.svg';
import save from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendbtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';

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

        <div className="main">
          <div className="chats">
            <div className="chat"><img className='chatimg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste quis mollitia ea dolor iusto error laborum optio, suscipit eum possimus maiores qui veniam vel rem magni odio recusandae consectetur!</p></div>
            <div className="chat bot"><img className='chatimg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ad, cumque mollitia modi ipsam animi vitae sunt accusamus quam deserunt velit fugit quis ratione consequuntur doloremque consectetur praesentium asperiores impedit ab iure ea accusantium! Porro dolores corporis assumenda illo neque, voluptatem perspiciatis placeat! Iste, officia? Esse ratione amet quae, minus quasi suscipit dolore id pariatur iste illum laudantium saepe fugit qui debitis! Accusamus eos nesciunt, facilis obcaecati quidem, sint provident nostrum unde, iste totam tempore accusantium nam error officia quasi magni? Fuga laudantium esse minima aspernatur, est neque, labore fugit iste soluta voluptates obcaecati sunt quisquam temporibus officiis repellat voluptate?</p></div>

          </div>
          
          <div className="chatfooter">
            <div className="input">
              <input type="text" placeholder='Send a Message' /><button className="send"><img src={sendbtn} alt="send" /></button>
            </div>
            <p>ChatGPT may produce inaccurate information about people, places or facts. ChatGPT April 20 Version</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
