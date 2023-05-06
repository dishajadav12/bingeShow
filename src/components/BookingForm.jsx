import React,{ useState, useEffect } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCreditCard} from '@fortawesome/free-solid-svg-icons'
import { useParams} from 'react-router-dom';


function BookingForm() {
    const { id } = useParams();
    const [show, setShow] = useState(null);
  
    useEffect(() => {
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then(data => setShow(data))
        .catch(error => console.error(error))
    }, [id]);
  
    if (!show) {
      return <div>Loading...</div>;
    }
  

return (
<div>
<div className='main-container-gold'>
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="card-body">
         
            
            <h3 style={{textAlign:"left"}}>Ticket Booking </h3>
             <hr style={{width:'50%'}}/>
             <div className="payment-info">
             <div className="summary">
                 <h1 className="mb-3">{show.name}</h1>
                <img src={show.image?.medium} alt={show.name} className="show-image mb-3" />
             </div>
             <div className="payment-process">
            
                <form action="">
                    <div className="user-info">
                    <h3>User Info.</h3>
                    <span>Name: </span>
                    <input type="text" />
                    <span>Mobile No.: </span>
                    <input type="tel" />
                    <span>Email: </span>
                    <input type="email" />
                    </div>
                  <div className="creditcard-detail">
                  <h6 style={{marginLeft:'5px', marginTop:'15px'}}>Your payment method</h6>
                 
                    <div className="credit-debit">
                       <FontAwesomeIcon icon={faCreditCard} style={{marginTop:'12px', color:'grey'}} />
                       <span style={{ marginTop:'-5px', paddingLeft:'5px', fontWeight:'500'}}> Credit/Debit</span>    
                    </div>
                    <div className="credit-debit">
                       <FontAwesomeIcon icon={faCreditCard} style={{marginTop:'12px', color:'grey'}} />
                       <span style={{ marginTop:'-5px', paddingLeft:'5px', fontWeight:'500'}}> Gpay/Paytm</span>    
                    </div>
                    <div className="credit-debit">
                       <FontAwesomeIcon icon={faCreditCard} style={{marginTop:'12px', color:'grey'}} />
                       <span style={{ marginTop:'-5px', paddingLeft:'5px', fontWeight:'500'}}>Net Banking</span>    
                    </div>
                   
                    </div>                  
                    <p className='policy'>
                        By Proceeding, I express my consent to complete this transaction.
                    </p>
                    <button type='submit' className='button-sub'>Proceed to pay</button>
                </form>
             </div>
              
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>

);
}

export default BookingForm;