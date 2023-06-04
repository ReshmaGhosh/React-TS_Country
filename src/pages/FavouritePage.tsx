import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import { Country } from "../components/types/type";

type FavouritePageProps = {
  favourites: Country[];
  handleFavourite: (country: Country) => void;
};

function FavouritePage({ favourites, handleFavourite }: FavouritePageProps) {
  return (
    <div>
      <h1>Favourite Countries</h1>
      {favourites.length === 0 ? (
        <p>No favourite countries yet.</p>
      ) : (
        <div>
          {favourites.map((country, index) => (
            <Card key={index} sx={{ minWidth: 275, margin: "10px" }}>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="country details"
                  >
                    {country.name.common[0].toUpperCase()}
                  </Avatar>
                }
                title={country.name.common}
                subheader="Country Details"
              />
              <CardMedia
                component="img"
                height="194"
                image={country.flags.png}
                alt={country.name.common}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Region: {country.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Population: {country.population}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="remove from favorites"
                  onClick={() => handleFavourite(country)}
                >
                  <FavoriteIcon color="primary" />
                </IconButton>
              </CardActions>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavouritePage;
