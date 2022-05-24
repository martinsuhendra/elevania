import {Box, Grid, Paper, Typography} from '@mui/material';
import React from 'react';
import {useState} from 'react';
import {FunctionComponent} from 'react';
import ProductCard, {Product} from './ProductCard';
import ProductDetailView from './ProductDetailView';

interface ProductDetailViewState {
  visibility: boolean;
  product: Product;
}

interface ProductListProps {
  initialProductDetailViewState: ProductDetailViewState;
}

const ProductList: FunctionComponent<ProductListProps> = ({
  initialProductDetailViewState,
}) => {
  //** States */
  const [productDetail, setProductDetail] = useState({
    visibility: false,
    product: null,
  });

  //** Functions */
  const handleShowProductDetailView = (product: Product) => {
    setProductDetail({visibility: true, product});
  };

  const handleCloseProductDetailView = () => {
    setProductDetail(initialProductDetailViewState);
  };

  return (
    <Box p={8}>
      <Typography variant="h3" color="initial">
        Daftar Produk
      </Typography>
      <Grid mt={4} sx={{flexGrow: 1}} container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value => (
              <Grid key={value} item>
                <ProductCard onClickDetail={handleShowProductDetailView} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <ProductDetailView
        open={productDetail.visibility}
        handleClose={handleCloseProductDetailView}
      />
    </Box>
  );
};

ProductList.defaultProps = {
  initialProductDetailViewState: {
    visibility: false,
    product: null,
  },
};

export default ProductList;
