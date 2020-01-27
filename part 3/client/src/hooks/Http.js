import { useEffect, useState } from 'react';
import axios from 'axios';

const Http = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let listings = await (
          await axios.get('https://sv-reqres.now.sh/api/listings?per_page=16')
        ).data.data;
        setListings(listings);
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
