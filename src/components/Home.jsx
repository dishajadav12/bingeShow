import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
          .then(response => response.json())
          .then(data => setShows(data))
          .catch(error => console.error(error))
      }, []);
  return (
    <>
    <h4 className="mb-3">For You</h4>
    <div className="row">   
      {shows.map(show => (
        <div key={show.show.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card">
            <img src={show.show.image?.medium} className="card-img-top" alt={show.show.name} />
            <div className="card-body">
              <h5 className="card-title">{show.show.name}</h5>
              {/* <p className="card-text">{show.show.summary}</p> */}
              <Link to={`/shows/${show.show.id}`} className="btn btn-more-info">More Info <FontAwesomeIcon icon={faAngleRight}/></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Home