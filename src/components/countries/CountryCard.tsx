import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CountryCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [countryData, setCountryData] = useState<any>(null);
  const { name } = useParams<{ name: string }>();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setCountryData(data[0]);
      })
      .catch((error) => {
        console.error(error, "error");
      });
  }, [name]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2 style={{ paddingBottom: "80px" }}>Country Details</h2>

      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            countryData && (
              <Avatar sx={{ bgcolor: red[500] }} aria-label="country detaiis">
                {countryData.name.common[0].toUpperCase()}
              </Avatar>
            )
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={countryData?.name?.common || "Loading..."}
          subheader={countryData?.capital || ""}
        />
        <CardMedia
          component="img"
          height="194"
          image={countryData?.flags?.png || ""}
          alt={name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Region: {countryData?.region || "N/A"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {countryData?.population || "N/A"}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Language:
              {countryData?.languages
                ? Object.values(countryData.languages).join(", ")
                : "N/A"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Region: {countryData?.region || "N/A"}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Area: {countryData?.area || "N/A"} sq km
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Timezones:{" "}
              {countryData?.timezones
                ? countryData.timezones.join(", ")
                : "N/A"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Continents:{" "}
              {countryData?.continents
                ? countryData.continents.join(", ")
                : "N/A"}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
