import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import '../styles/ContactList.css'
import { useNavigate } from 'react-router-dom';

function App() {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${count}`
      );

      setData((prev) => {
        return [...prev, ...response.data.results];
      });
      setLoading(false);
    }, 1000);
  }, [count]);

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);

    // setCount(Math.ceil(window.screen.height / 100 *20))

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className='logout'>
        <Button as="input" type="button" value="Logout" onClick={() => {
          localStorage.removeItem('loggedIn')
          navigate("/")
        }} />{' '}
      </div>
      <h3 style={{
        textAlign: 'center'
      }}>ContactList</h3>
      <div className='mainCard'>
        {data.map((coin, key) => (
          <div className='card' key={key}>
            <div className='subCard'>
              <div className='card_image'>
                <img src={coin.picture.large} alt="image" />
              </div>
              <div className='card_info'>
                <h5>{coin.name.first}{coin.name.second}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading &&
        <div className='spinner'>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      }
    </>
  );
}

export default App;
