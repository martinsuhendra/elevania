import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';
import React, {FunctionComponent} from 'react';

export interface Product {
  name: string;
  sku: string;
  image: string;
  price: number;
  description: string;
}

export interface ProductCardProps {
  product: Product;
  onClickDetail?: (product: Product) => void;
  onClickAddToCart?: (product: Product) => void;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
  onClickAddToCart,
  onClickDetail,
}) => {
  return (
    <Card sx={{maxWidth: 240}}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          endIcon={<ChevronRightIcon />}
          sx={{flexGrow: 1}}
          variant="outlined"
          size="medium"
          color="info"
          onClick={() => onClickDetail(product)}
        >
          Lihat Detail
        </Button>
        <IconButton
          onClick={() => onClickAddToCart(product)}
          color="primary"
          aria-label=""
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
