import './App.css';
import './Chat.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Users() {
  return (
    <><div className="col-md-2" id='userpart'>
    <div className="card p-2 vh-80">
      <h5>Bimash Maharjan</h5>
      <input type="search" placeholder='Search..' className='form-control mt-3 mb-3' name="" id="" />

       <ul className="list-group">
      <NavLink to="chat/community">
      <li className="list-group-item mt-2 border-0 d-flex  align-items-center  mb-2">
            <img  className='usr-img' src="https://www.ourmigrationstory.org.uk/uploads/_CGSmartImage/img-a2beae8392617b8c02b85d8b9197fb96" alt=""/>
              <div className="d-flex mx-2 align-items-start flex-column justify-content-center">
                  <h5 className="mb-0 text-sm">Community A.</h5>
                  <p className="mb-0 text-xs">You : Hi! I need more information..</p>
              </div>
          </li>
      </NavLink>
      <NavLink to="chat/2comd" >
      <li className="list-group-item mt-2 border-0 d-flex  align-items-center  mb-2">
          <img  className='usr-img' src="https://www.ourmigrationstory.org.uk/uploads/_CGSmartImage/img-a2beae8392617b8c02b85d8b9197fb96" alt=""/>
              <div className="d-flex mx-2 align-items-start flex-column justify-content-center">
                  <h6 className="mb-0 text-sm">Community B.</h6>
                  <p className="mb-0 text-xs">You : Hi! I need more information..</p>
              </div>
          </li>
      </NavLink>
      
        </ul>
    </div>
    </div>

    </>
    
  );
}

export default Users;
