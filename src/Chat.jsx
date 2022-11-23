import './App.css';
import Info from './Info';
import React from 'react';
import { useParams } from 'react-router-dom';

const Chat = () => {
  const params  = useParams();
  if(params.userId == 'community'){
    return (
      <>
      <div className="col-md-8 d-md-block d-none" id='chatpart'>
        <div className="card p-2 max-vh-80">
          <div className='d-flex justify-content-between p-2 border-bottom'>
                <div className='d-flex align-items-center mx-3'>
                    <img src="https://www.ourmigrationstory.org.uk/uploads/_CGSmartImage/img-a2beae8392617b8c02b85d8b9197fb96"  className='logoimg' alt="" />
                    <h4 className='mx-3'>{params.userId}</h4>
                </div>
                <div>
                    <h4 className="fa-duotone fa-circle-info icons text-info" onClick={showthis}> </h4>
                </div>
              
          </div>
          <section>
              <div className="chat-box" id='chat-msg'>
                  <div className="chat incoming mx-4">
                    <img className='rounded-circle' src="https://www.ourmigrationstory.org.uk/uploads/_CGSmartImage/img-a2beae8392617b8c02b85d8b9197fb96" alt=""/>
                      <div className="align-items-center details">
                          <span className='mx-2'>Name</span>
                          <p className='m-0'> sir malai garo paryo</p>
                      </div>
                  </div>
                  <div className="chat outgoing mx-4">
                      <div className="align-items-center details">
                          <p className='m-0'> sir malai garo paryo</p>
                      </div>
                  </div>
              </div>
              <form id='messagedata'  className="typing-area">
                  <input type="hidden" id='user_id' value=''/>
                  <input type="text" name="message" className="input-field" id='messageval' placeholder="Type a message here..." autoComplete="off" />
                  <button id='send-data' type='button'><i className="fa-duotone fa-paper-plane-top text-white"></i></button>
              </form>
          </section>
        </div>
      </div>
      <Info
        name = {params.userId}
      ></Info>
      </>
    );
  }else{
    return (
      <div className="col-md-10 d-md-block d-none" id='chatpart'>
      <div className="card p-2 max-vh-80">
        <div className='d-flex justify-content-between p-2 border-bottom'>
              <div className='d-flex align-items-center mx-3'>
                  <img src="https://www.ourmigrationstory.org.uk/uploads/_CGSmartImage/img-a2beae8392617b8c02b85d8b9197fb96"  className='logoimg' alt="" />
                  <h4 className='mx-3'>{params.userId}</h4>
              </div>
              <div>
                  <h4 className="fa-duotone fa-circle-info icons text-info" onClick={showthis}> </h4>
              </div>
        </div>
        <div className='d-flex flex-column align-items-center justify-content-center chat-box mt-5'>
            <h5>GROUP NOT CREATED YET</h5>
            <p className='text-secondary'>This app is still in development mode</p>
        </div>
      </div>
      </div>
  
    );
  }

}

function showthis(){
  // chatpart

  var char = document.getElementById('sidebar');
  if(char.classList.contains('d-none')){
    document.getElementById('sidebar').classList.remove('d-none');
    document.getElementById('chatpart').classList.remove('col-md-10');
    document.getElementById('chatpart').classList.add('col-md-8');

  }else{
    document.getElementById('sidebar').classList.add('d-none');

    
    document.getElementById('chatpart').classList.remove('col-md-8');
    document.getElementById('chatpart').classList.add('col-md-10');
  }

}

export default Chat;
