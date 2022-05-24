import {AddShoppingCart, ChevronRight} from '@mui/icons-material';
import {CardMedia, DialogProps, Grid} from '@mui/material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import React from 'react';
import {FunctionComponent} from 'react';

interface IDialogProps extends DialogProps {
  handleClose: () => void;
}

const ProductDetailView: FunctionComponent<IDialogProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <Grid container xs={12} p={4}>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            height="340"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        </Grid>
        <Grid item container direction="column" xs={6}>
          <Grid item xs>
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending
                anonymous location data to Google, even when no apps are
                running.
              </DialogContentText>
            </DialogContent>
          </Grid>
          <Grid item>
            <Button
              endIcon={<AddShoppingCart />}
              variant="contained"
              onClick={handleClose}
              disableElevation
              fullWidth
              size="large"
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default ProductDetailView;
