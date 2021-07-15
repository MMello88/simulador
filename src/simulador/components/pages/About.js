import React from "react";
import styled from "styled-components";

import { useScrollToTop } from "hooks/scroll";

import Hero from "simulador/components/molecules/Hero";
import { Heading } from "simulador/components/atoms/Heading";
import Section from "simulador/components/molecules/Section";
import Grid from "simulador/components/atoms/Grid";
import Footer from "simulador/components/organisms/MyFooter";
import Card, {CardBody, CardMedia, CardMediaDescription} from "simulador/components/atoms/Card";
import BreadCrumb from "simulador/components/atoms/BreadCrumb";

import BgSlider1 from "simulador/assets/slider-01.jpg";
import AboutImage from "draws/About";

import Inst1 from "simulador/assets/instrutors/inst1.jpg";
import Inst2 from "simulador/assets/instrutors/inst2.jpg";
import Inst3 from "simulador/assets/instrutors/inst3.jpg";
import Inst4 from "simulador/assets/instrutors/inst4.jpg";
import Inst5 from "simulador/assets/instrutors/inst5.jpg";
import Inst6 from "simulador/assets/instrutors/inst6.jpg";


const ImageContainer = styled.div`
  svg {
    width:100%;
    height: auto;
    max-width: 380px;
  }
  color: ${(props) => props.theme.colors.primary.main};
`;

const instructors = [
  {
    id: 1,
    name: "Matheus",
    avatar: Inst1
  },
  {
    id: 2,
    name: "Cris",
    avatar: Inst2
  },
  {
    id: 3,
    name: "Leo",
    avatar: Inst3
  },
  {
    id: 4,
    name: "Bob",
    avatar: Inst4
  },
  {
    id: 5,
    name: "Buddy",
    avatar: Inst5
  },
  {
    id: 6,
    name: "Mike",
    avatar: Inst6
  }
];

const About = () => {
  useScrollToTop();

  const items = [
    {label: "Inicio", link: "/"},
    {label: "Sobre", link: ""}
  ]

  return (
    <>
      <Hero image={BgSlider1}>
        <Heading>
          <h1>
            Auto escola Matheus
          </h1>
          <BreadCrumb items={items} />
        </Heading>
      </Hero>

      <Section>
        <Grid md={2}>
          <div>
            <p>Eu nulla occaecat sunt sint in laborum duis esse quis magna.</p>
            <p>Eiusmod cupidatat sunt enim Lorem nulla esse eiusmod cupidatat amet.</p>
            <p>Nisi excepteur veniam id sit amet voluptate.</p>
            <ul>
              <li>Minim dolor qui officia duis incididunt aute fugiat sunt enim minim aute tempor.</li>
              <li>Incididunt reprehenderit nostrud aliqua fugiat proident nisi.</li>
              <li>Duis labore dolor ad do occaecat amet fugiat.</li>
              <li>Voluptate tempor minim sint anim consectetur consectetur adipisicing.</li>
              <li>Fugiat nisi id et enim amet Lorem occaecat nostrud fugiat esse cillum ullamco.</li>
            </ul>
          </div>
          <div>
            <p>Minim veniam nulla nostrud dolor consequat enim consequat Lorem anim minim fugiat.</p>
            <center>
              <ImageContainer>
                <AboutImage src={AboutImage} alt= "Imagem de um prédio com alguns carros passando em frente" />
              </ImageContainer>
            </center>
          </div>
        </Grid>
      </Section>

      <Section inverse>
        <Grid md={2}>
          <div>
            <h4>Missão</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eos dolorem temporibus eaque id omnis perspiciatis voluptas nesciunt culpa, suscipit accusamus, doloribus cumque tenetur reiciendis, ab totam iure sunt rem.</p>
          </div>
          <div>
            <h4>Vissão</h4>
            <p>Consectetur minima esse maiores ipsa ab tempore assumenda dicta, labore iure dignissimos in, culpa molestiae facere debitis aliquid nostrum. Tenetur in quaerat similique cumque dicta obcaecati saepe asperiores animi laboriosam.</p>
          </div>
        </Grid>
      </Section>

      <Section>
        <Heading>
          <h2>Conheça nossos professores</h2>
        </Heading>
        <Grid sm={2} md={3} lg={4}>
          {instructors.map((instructor) => (
            <Card key={instructor.id}>
              <CardMedia image={instructor.avatar}>
                <CardMediaDescription>
                  <h5>{instructor.name}</h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>

      <Footer></Footer>
    </>
  );
}

About.defaultProps = {};

About.propTypes = {};

export default About;