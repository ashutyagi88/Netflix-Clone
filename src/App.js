import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/screens/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./components/screens/Profile";
import Content from "./components/screens/Content";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    document.title = "Netflix";
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {!user ? (
            <Route path="/" element={<Login />}></Route>
          ) : (
            <>
              <Route exact path="/" element={<HomeScreen />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/content" element={<Content />}></Route>
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
