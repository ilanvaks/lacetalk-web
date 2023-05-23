import { Container,Row,Col } from "react-bootstrap"
import "../../styles/ThreeThings.css"

export default function ThreeThings() {

  return (
    <div class="three-thing-card">
    
    <section>
      <Container fluid id="three-things" className="my-5">

      <div style={{ marginTop: '-10px', fontSize: '1.5em' }}>
      <Row>
          <Col><h2 className="title-threethings text-center my-4">The Sneaker Chronicles
          </h2>
          </Col>
        </Row>
        </div>
        
        <Row className="justify-content-center g-5">
        <Col sm={8} lg={4}>  
            <p className="icon"></p>
            <h3 className="text-center"><span className="three-title d-md-block">Reselling</span></h3>
            <p className="simple-three text-center text-md-start">The sneaker reselling market is a significant part of the sneaker community. Limited edition sneakers can increase in value over time, making them sought-after investments.</p>
          </Col>

          <Col sm={8} lg={4}>  
            <p className="icon"
              target="_blank" 
              rel="noreferrer"></p>
            <h3 className="text-center"><span className="three-title d-md-block">Releases</span></h3>
            <p className="simple-three text-center text-md-start">Sneaker enthusiasts pay close attention to sneaker releases. This can include eagerly awaiting the release of new models, or special limited editions, and even lining up for hours or days to get the latest pair.</p>
          </Col>

          <Col sm={8} lg={4}>             
            <p className="icon easter-egg-2" 
              ></p>
            <h3 className="text-center"><span className="three-title d-md-block">Culture</span></h3>
            <p className="simple-three text-center text-md-start">Sneaker culture is an important aspect of the community. It includes not just the sneakers themselves, but the history, the designs, the stories behind the sneakers, and how they became popular.</p>
          </Col>

        </Row>
      </Container>
    </section>
    </div>
    
  )
}