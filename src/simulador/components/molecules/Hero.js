import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';
import Container from 'simulador/components/atoms/Container';

const Root = styled.div`
  color: #fff;
  padding: 100px 0;

  ${props => css`
    background: url(${props.image}), rgba(0,0,0,0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`;



/*const Title = styled.h1`
  position: relative;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
  &::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    background: ${colorYellow};
    height: 5px;
    width: 70px;
  }
  strong {
    color:  ${colorYellow}
  }
`;*/

const Content = styled.div`
display: inline-block;
p,
li {
  font-size: 20px;
  font-weight: 300;
}

ul {
  list-style: none;
  padding-left: 0;
}

li{
  &::before {
    content: "\\2713\\0020";
    color: ${(props) => props.theme.colors.primary.main}
  }
}
`;

// titulo esta comentado pois vamos tirar para criar um component dele
const Hero = ({image, /*title,*/ children}) => (
  <Root image={image} data-testid="hero">
    <Container>
      {/*<Title>{title}</Title> */}
      <Content>{children}</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  image: PropTypes.string,
  // title: PropTypes.oneOfType([PropTypes.string.isRequired,PropTypes.element]) ,
  children: PropTypes.node,
};

Hero.defaultProps = {
  /**
   * Background image
   */
  // title: "Meu Titulo",
  image: "./assets/slider-01.jpg",
  
}
export default Hero;
