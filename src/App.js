import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';


function App() {
  return (
    <div>
<Navbar></Navbar>
<section id="home" className="home">
    <div className="left">
        <img src="./images/home image.png" alt="Home Image" />
    </div>
    <div className="right">
        <div className="middle">
            <img src="images/logo.png" alt="" />
        </div>
        <div className="bottom">
            <p>
                book your<br />
                table<span> now</span></p>
        </div>
        <img src="./images/home footer.png" className="home-footer" alt="" />
    </div>
</section>
</div>
  );
}

export default App;
