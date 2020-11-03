import React from 'react';
import Jumbotron from '../../components/jumbotron';
import Menu from '../../components/Menu';
import Rodape from '../../components/Rodape';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Container,Card } from 'react-bootstrap';




const Home = () => {
    return (
        <div>
            <Menu />
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://cdn.ome.lt/2PX7RRWWQH_yKRjJBQn5KHa8rkA=/1200x630/smart/extras/conteudos/pacman256.jpg"
      alt="Evento 1"
    />
    <Carousel.Caption>
      <h3>Joge com o Pic-Men</h3>
      <p>aprenda matematica, jogando Pic-Men</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://static1.purebreak.com.br/articles/9/42/39/@/23981-catalogar-todos-os-jogos-eletronicos-opengraph_1200-1.jpg"
      alt="Evento 2"
    />
    <Carousel.Caption>
      <h3>Adote o habito de jogar como ensino</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
      <Jumbotron titulo ="Nyous" descricao ="Saiba mais sobre a plataforma de jogos educacionais"/>
      <Container>
        <Row>
          <Col>
            <div className="card" style={{width : '18pm'} } >
              <img src="https://blog.teclogica.com.br/wp-content/uploads/2017/10/gamifica%C3%A7%C3%A3o-nas-empresas.png" className="card-img-top" alt="imagem sobre a gamificação"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div> 
          </Col>
            

          <Col>
          <div className="card" style={{width : '18pm' }} >
              <img src="https://blog.teclogica.com.br/wp-content/uploads/2017/10/gamifica%C3%A7%C3%A3o-nas-empresas.png" className="card-img-top" alt="imagem sobre a gamificação"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div> 

          </Col>
          <Col>
          <div className="card" style={{width : '18pm' }} >
              <img src="https://blog.teclogica.com.br/wp-content/uploads/2017/10/gamifica%C3%A7%C3%A3o-nas-empresas.png" className="card-img-top" alt="imagem sobre a gamificação"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div> 
          
          </Col>
        </Row>
      </Container>
        <Rodape/>
           
  
           
     </div>  
      
    )
}
export default Home;