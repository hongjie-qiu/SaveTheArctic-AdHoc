import { Routes, Route } from 'react-router-dom';
import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import LandingPage from './pages/Landing';
import EducationPage from './pages/EducationPage';
import AccountPage from './pages/AccountPage';
import Footer from './components/layout/Footer.js';
import NavBar from './components/layout/NavBar';
//import Popup from './components/layout/Popup';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import QuizPage from "./components/Quiz/Quiz.js";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import News from './components/news.js';

function PopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Please log in to explore more!
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>User Not Logged In</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please log in to explore more!</Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}


function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  //authentication
  useEffect(() => {
    const auth = getAuth();

    //addEventListener
    const unregisterAuthListener = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setCurrentUser(firebaseUser);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      //cleanup
      unregisterAuthListener();
    };
  }, []);

  //action & impact & quiz - index generator
  var today = new Date();
  var day = (today.getDate());
  if (day == 20 || day == 30)
    day = 10;
  if (day > 10)
    day = day % 10;
  
  if (currentUser) {
    let point = 0;
    const db = getDatabase();
    let userId = getAuth().currentUser.uid;
    const userName = getAuth().currentUser.displayName;
    const userInfo = ref(db, "users/" + userId);
    onValue(userInfo, (snapshot) => {
        point = snapshot.val().points;
    })
    return (
      <div className="App">
        <NavBar userName={userName}></NavBar>
          <Routes>
            <Route path='/' element={<LandingPage isLoggedIn={true} />} /> 
            <Route exact path='/education' element={<EducationPage index={day}/>} />
            <Route exact path='/point' element={<AccountPage point={point}/>} />
            <Route exact path='/quiz' element={<QuizPage currentUser={currentUser} index={day}/>} />
            <Route exact path='/news' element={<News/>} />
          </Routes>
          <Footer></Footer>
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<LandingPage isLoggedIn={false}/>} />
            <Route exact path='/education' element={<><PopUp/><LandingPage /></>} />
            <Route exact path='/point' element={<><PopUp/><LandingPage /></>} />
            <Route exact path='/quiz' element={<><PopUp/><LandingPage /></>} />
            <Route exact path='/news' element={<News/>} />
          </Routes>
          <Footer></Footer>
      </div>
    )
  }
}

export default App;