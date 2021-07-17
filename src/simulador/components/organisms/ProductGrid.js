import React, {useState} from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Grid from "simulador/components/atoms/Grid";
import {Heading} from "simulador/components/atoms/Heading";
import Button from "simulador/components/atoms/Button";
import Card, {CardBody, CardMedia} from "simulador/components/atoms/Card";

import ProductType from "simulador/models/types/ProductType";

const Toolbar = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const ProductGrid = ({products}) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <Grid md={3}>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <Card>
              <CardMedia image={product.image} />
              <CardBody>
                <Heading>
                  <h6>{product.title}</h6>
                </Heading>
                <p>{product.summary}</p>
                <div>
                  <Button color="primary" variant="link" as={Link} to={`/Servicos/${product.slang}`}>Saiba mais</Button>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </Grid>
      <Toolbar>
        {!showAll &&
        <Button 
          variant="outlined"
          onClick={() => {
            setShowAll(true);
          }}
        >Lista completa
        </Button>}
      </Toolbar>
    </>
  );
};

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    ProductType
  )
};

export default ProductGrid;
