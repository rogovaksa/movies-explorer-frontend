import { useState, useMemo, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';

import mainApi from "../../utils/MainApi";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import Login from '../Login/Login';
import Register from '../Register/Register';

import HeaderAuth from '../AuthHeader/AuthHeader';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import TooltipContext from "../../contexts/TooltipContext";

import {
  CONFLICT_ERROR_CODE,
  UNAUTH_ERROR_CODE,
} from "../../constants/constants";

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [textError, setTextError] = useState("");
  const [isEditError, setIsEditError] = useState(false);
  const [isEditDone, setIsEditDone] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const loggedIn = localStorage.getItem("jwt") || false;

  const tooltipContext = useMemo(
    () => ({ tooltipMessage, setTooltipMessage }),
    [tooltipMessage]
  );

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUserInfoFromServer(jwt)
        .then((user) => {
          if (user) {
            setIsLogin(true);
            localStorage.setItem("userId", user._id);
            setCurrentUser(user);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsLogin(false);
    }
  }, []);

  function handleAuthRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((data) => {
        if (data) {
          handleAuthLogin(email, password);
        }
      })
      .catch((err) => {
        if (err.status === CONFLICT_ERROR_CODE) {
          setTextError("This email already exists");
        } else {
          console.log(err);
          setTextError("Server error");
        }
      })
      .finally(() => {
        setTextError("");
      });
  }

  function handleAuthLogin(email, password) {
    mainApi
      .authorize(email, password)
      .then((jwt) => {
        if (jwt.token) {
          localStorage.setItem("jwt", jwt.token);
          setIsLogin(true);
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err.status === UNAUTH_ERROR_CODE) {
          setTextError("Wrong email or password");
        } else {
          console.log(err);
          setTextError("Server error");
        }
        console.log(err);
      })
      .finally(() => {
        setTextError("");
      });
  }

  function editProfile(name, email) {
    mainApi
      .saveUserInfoToServer(name, email)
      .then((userData) => {
        setCurrentUser(userData);
        setIsEditDone(true);
        setTimeout(
          function() {
            setIsEditDone(false);
          }, 3000
        );
        setIsEditError(false);
      })
      .catch(() => {
        setIsEditError(true);
      })
      .finally(() => {
        setIsEditError(false);
      });
  }

  function handleLogout() {
    setCurrentUser({});
    localStorage.clear();
    setIsLogin(false);
    navigate("/");
  }

  useEffect(() => {
    if (isLogin) {
      mainApi
        .getUserInfoFromServer()
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLogin]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <TooltipContext.Provider value={tooltipContext}>
        <InfoTooltip message={tooltipMessage} />
        <div className='page'>
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <>
                    {isLogin ? <HeaderAuth /> : <Header />}
                    <Main isLogin={isLogin} />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path='/signin'
                element={
                  loggedIn ? (
                    <Navigate to="/" />
                  ) : (
                    <Login
                      authLogin={handleAuthLogin}
                      textError={textError}
                      setTextError={setTextError}
                    />
                  )
                }
              />
              <Route
                exact
                path='/signup'
                element={
                  loggedIn ? (
                    <Navigate to="/" />
                  ) : (
                    <Register
                      authRegister={handleAuthRegister}
                      textError={textError}
                      setTextError={setTextError}
                    />
                  )
                }
              />
              <Route
              exact
              path='/movies'
              element={
                <ProtectedRoute allowed={loggedIn}>
                  <HeaderAuth />
                  <Movies isLogin={isLogin} />
                  <Footer />
                </ProtectedRoute>
              }
              />
              <Route
                exact
                path='/saved-movies'
                element={
                  <ProtectedRoute allowed={loggedIn}>
                    <HeaderAuth />
                    <SavedMovies isLogin={isLogin} />
                    <Footer />
                  </ProtectedRoute>
                }
              />
              <Route
                path='/profile'
                exact
                element={
                  <ProtectedRoute allowed={loggedIn}>
                    <HeaderAuth />
                    <Profile
                      isLogin={isLogin}
                      handleLogout={handleLogout}
                      editProfile={editProfile}
                      currentUser={currentUser}
                      isEditError={isEditError}
                      isEditDone={isEditDone}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                exact
                path='*'
                element={<NotFoundPage />}
              />
            </Routes>
        </div>
        </TooltipContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
