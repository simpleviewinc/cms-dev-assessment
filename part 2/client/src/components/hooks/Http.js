import { useState, useEffect } from 'react';
import axios from 'axios';

const Http = () => {
  const [isLoading, setIsLoading] = useState();
  const [data, setData] = useState({
    all: [],
    listings: [],
    events: [],
    offers: []
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let listings = await (
          await axios.get('http://sv-reqres.now.sh/api/listings')
        ).data.data;
        let events = await (
          await axios.get('http://sv-reqres.now.sh/api/events')
        ).data.data;
        let offers = await (
          await axios.get('http://sv-reqres.now.sh/api/offers')
        ).data.data;
        setData({
          all: [...listings, ...events, ...offers],
          listings,
          events,
          offers
        });
        setIsLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    };
    fetchData();
  }, []);

  return [data, isLoading];
};

export default Http;
