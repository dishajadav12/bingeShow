import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Spinner from '../components/spinner/Spinner'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import '../App.css'

const Home = (props) => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState([])
    
    const fetchData = async () => {
        try {
          props.setProgress(10);
          const url = 'https://api.tvmaze.com/search/shows?q=all';
          setLoading(true);
          props.setProgress(40);
          const response = await fetch(url);
          props.setProgress(70);
          const data = await response.json();
          setShows(data);
          setLoading(false);
      props.setProgress(100);
        } catch (error) {
          console.error(error);
        }
      };
    useEffect(() => {
      fetchData();
    }, []);
    if (!shows) {
      return <div><Spinner/></div>;
    }
  return (
    <>
    <h4 className="mb-3">For You</h4>
    <div className="row">   
    {loading && <Spinner/>}
      {shows.map(show => (
        <div key={show.show.id} className="col-lg-3 col-md-4 col-sm-6 mb-3">
          <div className="card main-home-card">
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