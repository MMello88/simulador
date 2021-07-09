import React from "react";
import styled from 'styled-components';
import {FaPhone, FaBuilding, FaFacebookF, FaLinkedinIn, FaTwitter} from 'react-icons/fa'

import Container from "simulador/components/atoms/Container";
import Grid from "simulador/components/atoms/Grid";
import { Heading } from "simulador/components/atoms/Heading";


const Root = styled.footer`
  background-color: #2a2a2a;
  color: #aaa;
  padding: 40px 0;

  h6 {
    color: #fff;
    margin-top: 0;
    text-transform: uppercase;
  }
`;

const IconContainer = styled.span`
  margin-right: 8px;
`;

const FooterLink = styled.a`
  display: block;
  color: ${(props) => props.theme.colors.primary.main};
  text-decoration: none;

  &:hover{
    color: ${(props) => props.theme.colors.primary.dark};
  }
`;

const MyFooter = () => (
  <Root>
    <Container>
      <Grid md={3}>
        <div>
          <Heading>
            <h6>Nardini Auto Escola</h6>
          </Heading>
          <p>Magna Lorem adipisicing pariatur et sit ut ex duis Lorem occaecat duis veniam cupidatat ullamco.</p>
        </div>
        <div>
          <Heading>
            <h6>Contatos</h6>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (16) 99183-8523
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Adipisicing culpa deserunt pariatur mollit veniam.
          </p>
        </div>
        <div>
          <Heading>
            <h6>Redes Sociais</h6>
          </Heading>
          <p>
            <FooterLink 
              target="_blank" href=""
            >
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink 
              target="_blank" href=""
            >
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              LinkedIn
            </FooterLink>
          </p>
          <p>
            <FooterLink 
              target="_blank" href=""
            >
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </Grid>
    </Container>
  </Root>
);

export default MyFooter;
