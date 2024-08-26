import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, Card, Row, Col, Container } from 'react-bootstrap';
import { getPeliculas } from '../actions/peliculasActions';
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
            src="./assets/images/carruse_1.jpg"
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <h3>Primera Imagen</h3>
            <p>Descripción de la primera imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carrusel2.jpg"
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <h3>Segunda Imagen</h3>
            <p>Descripción de la segunda imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carrusel3.jpg"
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <h3>Tercera Imagen</h3>
            <p>Descripción de la tercera imagen.</p>
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
