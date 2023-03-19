import React from 'react';
import Chat from './model/Chat';
import Users from './model/Users';
import { socket } from './socket';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <>
        <div className='container-fluid mt-5'>
            <div className='row'>
                <Users></Users>
                <Routes>
                  <Route path="chat/:userId" element={<Chat />}/>
                  <Route path="/" element={<Chat />} />
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


