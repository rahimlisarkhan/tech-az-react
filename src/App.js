//Router
import { Route } from 'react-router-dom';

//SASS
import './sass/App.scss';

//Pages
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import HomePageContainer from './components/HomePage/HomePageContainer';
import Footer from './components/Footer/Footer';


//APP
let App = (props) => {

  console.log(props)
  return (
    <section className="container">
         <Navbar />
         <Route path="/" exact  component={HomePageContainer} />
         <Footer/>
    </section>
  );
}


export default App;
