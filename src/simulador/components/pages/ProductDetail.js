import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from"react-icons/fa";

import ProductType from "simulador/models/types/ProductType";

import Hero from "simulador/components/molecules/Hero";
import { Heading } from "simulador/components/atoms/Heading";
import Section from "simulador/components/molecules/Section";
import Footer from "simulador/components/organisms/MyFooter";
import Callout, {CalloutBody, CalloutActions, CalloutMedia} from "simulador/components/atoms/Callout";
import Button from "simulador/components/atoms/Button";
import BreadCrumb from "simulador/components/atoms/BreadCrumb";

import SpeedImage from "draws/Speed";
import BgSlider1 from "simulador/assets/slider-01.jpg";


const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
  height: 100%;

  li::before {
    content: "";
  }
`;

const PinnedItem =styled.li`
  display: inline;

  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 10px;

  svg {
    margin-right: 10px;
    vertical-align: middle;
  }
`;

const ProductDetail = ({ product }) => {
  const items = [
    {label: "Inicio", link: "/"},
    {label: "Serviços", link: ""},
    {label: product.title, link: ""},
  ]

  return (
    <>
      <Hero image={BgSlider1}>
        <Heading>
          <h1>{product.title}</h1>
          <BreadCrumb items={items} />
        </Heading>
      </Hero>
      <Section>
        <p>Ea ullamco qui tempor eu laboris amet anim minim officia proident elit veniam.</p>
        <p>Aliquip aliquip amet aliquip et adipisicing consequat Lorem consequat enim ullamco reprehenderit laboris.</p>
        <p>Pariatur quis commodo est ut consequat aliquip.</p>
        <h5>Documento necessário</h5>
        <PinnedList>
          <PinnedItem>
            <FaIdCard />
            RG
          </PinnedItem>
          <PinnedItem>
            <FaIdCard />
            CPF
          </PinnedItem>
          <PinnedItem>
            <FaHome />
            Certidão de nascimento ou casamento
          </PinnedItem>
          <PinnedItem>
            <FaScroll />
            Comprovante de Residencia
          </PinnedItem>
        </PinnedList>
      </Section>

      <Section inverse>
        <Callout>
          <CalloutBody>
            <h6>Ex commodo nulla dolor sit sunt veniam dolor mollit.</h6>
            <p>Cillum incididunt labore elit ut labore reprehenderit fugiat duis aute minim proident.</p>

            <CalloutActions>
              <Button color="primary" >Matricular</Button>
            </CalloutActions>
            
          </CalloutBody>
          
          <CalloutMedia>
            <SpeedImage></SpeedImage>
          </CalloutMedia>

        </Callout>
      </Section>

      <Footer></Footer>
    </>
  );
}

ProductDetail.defaultProps = {
  product: {}
}

ProductDetail.propTypes = {
  product: ProductType
}

export default ProductDetail;