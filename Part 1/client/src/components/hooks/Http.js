import { useState, useEffect } from 'react';
import axios from 'axios';

const Http = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let listings = await axios.get('http://sv-reqres.now.sh/api/listings');
        setListings([...listings.data.data]);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  return [listings, isLoading];
};

export default Http;
