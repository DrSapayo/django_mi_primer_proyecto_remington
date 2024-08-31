import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import { getPeliculas } from '../actions/peliculasActions';
import carruse_1 from '../assets/images/carruse_1.jpeg';
import carruse_2 from '../assets/images/carruse_2.jpeg';
import carruse_3 from '../assets/images/carruse_3.jpeg';
import imagenquemeencontre from '../assets/images/bannerquemeencontre.png';
import Waos from '../assets/images/Waos.png';
import eldiavlo from '../assets/images/eldiavlo.png';
import desesperacion from '../assets/images/desesperacion.png'
import "../styles/home.css"

const Home = () => {
  const [peliculas, setPeliculas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const data = await getPeliculas();
        setPeliculas(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchPeliculas();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/peliculas/${id}`);
  };

  return (
    <Container>
      <h2 className="mt-5">Bienvenido a la App de Películas</h2>
      
      {/* Carrusel */}
      <Carousel className="mt-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carruse_1}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carruse_2}
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carruse_3}
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imagenquemeencontre}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Waos}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={eldiavlo}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={desesperacion}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Tarjetas de todas las películas */}
      <h3 className="mt-5">Todas las Películas</h3>
      <Row className="mt-4">
        {peliculas.map((pelicula) => (
          <Col key={pelicula.id} sm={6} md={3}>
            <Card className="mb-4" onClick={() => handleCardClick(pelicula.id)} style={{ cursor: 'pointer' }}>
              <Card.Img variant="top" src={pelicula.imagen} />
              <Card.Body>
                <Card.Title>{pelicula.titulo}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
