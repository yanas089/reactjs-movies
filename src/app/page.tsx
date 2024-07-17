"use client";
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import MovieCard from './movieCard';
import MovieForms from './movieforms';
import MovieSlide from './movieslide';
import MovieList from './movielist';


export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  

  return (
    <div className='container'>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">Movie List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="/movielist">Movies</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Card className="text-center">
        <Card.Header className="large-header">HOME MOVIES LIST</Card.Header>
        <Card.Body>
          <Card.Title className="xxi-style">YANA SURYANA</Card.Title>
          <Card.Title className="xxi-style">22560003</Card.Title>
        </Card.Body>
      </Card>
      <br />
      <br />
      <div className='movie-slide'>
          <MovieSlide />
      </div>
      <br />
      <div className="movie-form">
        <MovieForms />
      </div>
      <br />
      <div className="movie-card">
        <MovieCard />
      </div>
      <br />
      <footer className="footer">
        <div className="container">
          <span className="text-muted">@UAS_PEMROGRAMAN WEB 2024</span>
        </div>
      </footer>
    </div>
  );
}
