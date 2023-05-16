import React from 'react'
import TourCard from '../../shared/TourCard'
import Tourdata from '../../assets/data/tours'
import {Col} from 'reactstrap';
import useFetch from '../../hooks/userFetch';
import { BASE_URL } from '../../utils/config';

const Featuredtourlist = () => {
    const {data:featuredTours}= useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  

  return (
  <>
  { featuredTours.map (tour => (
    <Col lg='3' className='mb-4' key={tour.id}>
        <TourCard tour={tour} />
        
    </Col>
  ))}
  </>
  );
}

export default Featuredtourlist;