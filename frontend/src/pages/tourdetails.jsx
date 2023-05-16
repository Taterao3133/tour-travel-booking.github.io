
import '../styles/tour-details.css'
import React ,
{useParams } from 'react-router-dom'
import TourData from '../assets/data/tours'
import { Container,Row,Col,Form,ListGroup } from 'reactstrap'
import calculateAvgrating from '../utils/avgRating'



const Tourdetails=()=> {
    const {id}= useParams();

  // this is an static data later we will call our api load our data from database
   const tour=TourData.find(tour=>tour.id===id)



  //destructure properites from tour object
 const {photo, title,desc, price,reviews,address, city, distance, maxGroupSize}=tour

const {totalrating ,avgrating}=calculateAvgrating(reviews)

  return <>
 <div>this didnid</div>
  <section>
    <Container>
      <Row>
        <Col lg='8'>
        <div className='tour__content'>
          <im src={photo} alt=''/>
          

          <div className="tour__info"><h2>{title}</h2>
          <div className="d-flex align-items-center gap-5">

          <span className='tour__rating d-flex align-items-center gap-1'>
                    <i class='ri-star-fill' style={{color:"var(--secondary-color)"}}></i>{calculateAvgrating === 0 ? null : avgrating }
                    {totalrating===0 ?('not rated'):(<span>({reviews.length})</span>)} 
                    
                </span>

          </div>
          
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}

export default Tourdetails;