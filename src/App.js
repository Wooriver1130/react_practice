import './App.css';
import Footer from './components/step00/Footer';
import Header from './components/step00/Header';
import Main from './components/step00/Main';
import ArticleList01 from './components/Step01/ArticleList01';
import Library from './components/Step02/Library';
import Profile from './components/Step03/Profile';
import CommentList from './components/Step04/CommentList';



function App() {
  return (
    <div className="App">

        <h1>Step00</h1>      
        <Header /> 
        <Main />
        <Footer />
        <br /> <br /> <br /><hr />

        <h1>Step01</h1>      
        <ArticleList01 />
        <br /> <br /> <br /><hr />

        <h1>Step02</h1>      
        <Library />
        <br /> <br /> <br /><hr />

        <h1>Step03</h1>      
        <Profile />
        <br /> <br /> <br /><hr />

        <h1>Step04</h1>      
        <CommentList />
        <br /> <br /> <br /><hr />
    </div>
  );
}

export default App;
