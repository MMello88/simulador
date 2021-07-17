import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {Link} from "react-router-dom";

import Section from "simulador/components/molecules/Section"
import Grid from "simulador/components/atoms/Grid"
import {Heading} from "simulador/components/atoms/Heading";
import Button from "simulador/components/atoms/Button";

const ImageContainer = styled.div`
  text-align:  right;
  svg{
    width:100%;
    height: auto;
    max-width:400px;
    color: ${(props) => props.theme.colors.primary.main}
  }
`;

const ErrorContent = styled.div`
  h1 {
    margin-top: 0;
  }
`;

const ErroMessage = styled.p`
  margin: 24px 0;
  font-size: 1.2rem;
`;

const Error = ({image, titulo, description }) => (
  <Section>
    <Grid sm={2}>
      <ErrorContent>
        <Heading>
          <h1>{titulo}</h1>
        </Heading>
        <ErroMessage>{description}</ErroMessage>
        <div>
          <Button as={Link} to="/" color="primary" variant="outlined">Voltar para página inicial</Button>
        </div>
      </ErrorContent>
      
      <div>
      <ImageContainer>
        {image}
      </ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  titulo: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  titulo: PropTypes.string,
  description: PropTypes.string,
};

export default Error;