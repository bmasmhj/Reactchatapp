import React from 'react';
import Chat from './Chat';
import Users from './Users';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <>
        <div className='container-fluid mt-5'>
            <div className='row'>
                <Users></Users>
                <Routes>
                  {/* 👇️ handle dynamic path */}
                  <Route path="chat/:userId" element={<Chat />}/>
                  <Route path="/" element={<Chat />} />
                  {/* 👇️ only match this when no other routes match */}
                  <Route
                    path="*"
                    element={
                      <Chat />
                    }
                  />
                </Routes>          
            </div>
        </div> 
      </>
    </Router>
  );
}


