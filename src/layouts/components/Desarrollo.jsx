import Menu from "./Menu";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Desarrollo.css";
function Desarrollo() {
  return (
    <main>
      <Menu />
      <Card sx={{ maxWidth: 300 }} className="d1">
        <CardActionArea>
          <CardMedia
            component="img"
            height="370"
            image="../../../public/d1.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              se basa en la consideración de siete hábitos primordiales como la
              base que permite el desarrollo de la efectividad personal, estos
              hábitos son: proactividad, empezar con un fin en mente, establecer
              primero lo primero, pensar en ganar/ganar, procurar primero
              comprender, y después ser comprendido, sinergizar (valorar la
              diversidad de criterios) y afilar la sierra (capacidad de
              renovación física, mental y espiritual).
              <br />
              <h2>Año de edición:2011</h2>
              <h2>Autor:Stephen Covey </h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }} className="d2">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="../../../public/d2.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Con una perspectiva que emplaza a la reflexión y a la revisión
              interna como personas en la búsqueda de un verdadero significado y
              sentido de nuestra vida, este bestseller desarrolla un análisis
              que ejemplifica una amplitud de consideraciones que están
              orientadas a la recapacitación y cómo adecuarlas a nuestra vida.
              <br />
              <h2>Año de edición:1997</h2>
              <h2>Autor:Eckhart Tolle</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="d3">
        <CardActionArea>
          <CardMedia
            component="img"
            height="420"
            image="../../../public/d3.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              se presenta de forma ingeniosa y carismática una reflexión acerca
              del éxito y cómo este se logra, más allá del talento, dinero,
              influencia y oportunidades.
              <br />
              <h2>Año de edición: 2020</h2>
              <h2>Autor:Tony Robbins</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }} className="d4">
        <CardActionArea>
          <CardMedia
            component="img"
            height="410"
            image="../../../public/d4.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              es considerada como una obra pionera en el género de la autoayuda,
              basa su explicación del ansia del éxito fijando la riqueza como un
              objetivo real al que toda persona aspira lograr.
              <br />
              <h2>Año de edición:1937</h2>
              <h2>Autor:Napoleon Hill</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="d5">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="../../../public/d5.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              la autora destaca entre algunos puntos relevantes la invitación a
              la aceptación y aprobación propia, la ampliación y actualización
              del conocimiento en base a dejar de lado creencias que impactaron
              en un momento dado y que no permiten una evolución personal,
              convirtiéndose en una especie de pared entre la persona y su
              impulso a la renovación y el cambio.
              <br />
              <h2>Año de edición:1984</h2>
              <h2>Autor:Louise Hay</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  );
}

export default Desarrollo;
