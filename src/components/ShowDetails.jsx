import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from './spinner/Spinner';

  const ShowDetails = (props) => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [loading,setLoading] = useState([]);
  
  const fetchData = async () => {
    try {
      props.setProgress(10);
      const url = `https://api.tvmaze.com/shows/${id}`;
      setLoading(true);
      props.setProgress(40);
      const response = await fetch(url);
      props.setProgress(70);
      const data = await response.json();
      setShow(data);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!show) {
    return <div>        
      {loading && <Spinner/>}
    </div>;
  }

  return (
    <div className='main-container'>

      <img src={show.image?.medium} alt={show.name} className="show-image mb-3" />

      <div className='show-summary'>
      <h1 className="mb-3">{show.name}</h1>
        <p dangerouslySetInnerHTML={{__html: show.summary}}></p>
        <Link to={`/book/${id}`} className="btn btn-primary">Book Ticket</Link>
      </div>
    </div>
  );
}

export default ShowDetails;

