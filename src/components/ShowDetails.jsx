import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ShowDetails() {
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
    <div className='main-container'>
      <img src={show.image?.medium} alt={show.name} className="show-image mb-3" />

      <div className='show-summary'>
      <h1 className="mb-3">{show.name}</h1>
        {show.summary} <br />
        <Link to={`/book/${id}`} className="btn btn-primary">Book Ticket</Link>
      </div>
    </div>
  );
}

export default ShowDetails;

