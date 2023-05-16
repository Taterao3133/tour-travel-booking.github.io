import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/commonSection'
 

import '../styles/tour.css'
import tourData from '../assets/data/tours'
import Tourcard from '../shared/TourCard'
import Searchbar from '../shared/searchbar'
import Newslatter from '../shared/newslatter'
import { Container, Row,Col } from 'reactstrap'




function Tour() {

  const [pageCount, setPageCount]=useState (0)
  const [page,setPage]=useState(0) 

  useEffect(()=>{
    
    const pages=Math.ceil(5/4)  // later we will use backent data count
     setPageCount(pages)
  },[page])





  return <>
    <CommonSection title={'All Tours'}/>
    <section>
      <Container>
        <Row>
          <Searchbar/>
        </Row>
      </Container>
    </section>
    <section className='pt-0'>
      <Container>
        <Row>
          {
            tourData?.map(tour=>(
            <Col lg='3' key={tour.id}>
              <Tourcard tour={tour} />
            </Col>)
          )}
          <Col lg='12'>
            <div className="pagination d-flex align-items-center justify-content-center">
                {[...Array(pageCount).keys()].map((number)=>(
                  <span key={number} onClick={()=>setPage(number)}
                  className={page ===number ? 'active__page':""}>
                    {number + 1}
                  </span>
                ))}

            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Newslatter/>
    

  
  </>
}

export default Tour;