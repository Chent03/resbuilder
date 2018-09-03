import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Navigation from './Navigvation';

const Home = (props) => {
  return (
    <div>
      <Navigation />
      <Jumbotron fluid className="jumboHome">
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;