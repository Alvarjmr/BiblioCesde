import Menu from "./Menu";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Ficcion.css";

function Ficcion() {
  return (
    <main>
      <Menu />
      <Card sx={{ maxWidth: 300 }} className="f1">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="../../../public/f1.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Sinopsis Es un libro lleno de alegrías, tristezas y muchas
              angustias que te hacen experimentar las emociones de cada
              personaje, describiendo los momentos más felices hasta el límite
              del sufrimiento. Considerada una joya de la literatura, es una
              novela de profunda lectura y altamente recomendable.
              <br />
              <h2>Año de edición:1984</h2>
              <h2>Autor:George Orwell </h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }} className="f2">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="../../../public/f2.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Existen muchas historias sobre la Reina Nefertiti, pero nunca
              antes había sido contada con una trama tan emocionante como la que
              nos ofrece C.T Cassana en este magnífico thriller de ciencia
              ficción. Con personajes únicos y una aventura interesante, es un
              texto lleno de acción y desafíos que te atrapará de inmediato.
              <br />
              <h2>Año de edición:2017</h2>
              <h2>Autor:C.T. Cassana</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 320 }} className="f3">
        <CardActionArea>
          <CardMedia
            component="img"
            height="420"
            image="../../../public/f3.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Muchas historias y conjeturas giran alrededor de un personaje
              legendario que todos daban por muerto, aunque es llamado músico,
              mendigo, estudiante, asesino, héroe o incluso mago, solo él puede
              contarnos la verdad sobre su vida y ahora está dispuesto a
              hacerlo. En una posada y sin que nadie sepa su identidad, Kvothe
              comienza a revelar la aventura que ha vivido en todos esos largos
              años de amores, pérdidas y traiciones.
              <br />
              <h2>Año de edición:2007</h2>
              <h2>Autor:Patrick Rothfuss</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }} className="f4">
        <CardActionArea>
          <CardMedia
            component="img"
            height="410"
            image="../../../public/f4.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              La historia de Kvothe continúa. Luego de su aparición en “El
              nombre del viento”, el autor Patrick Rothfuss realiza la segunda
              entrega de esta saga de ciencia ficción para seguir develando el
              mito que gira en torno a este misterioso hombre.
              <br />
              <h2>Año de edición:2011</h2>
              <h2>Autor:Patrick Rothfuss</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="f5">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="../../../public/f5.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Sinopsis de LA PROMESA DE LAS PANDAS En lo alto de las montañas,
              Coco y Ketu, dos hermanas, cachorros de panda rojo, viven bajo la
              protección de su madre. Ambas prometen no alejarse y cuidar la una
              de la otra. Pero, a medida que crecen, el deseo de explorar se
              hace cada vez mayor.
              <br />
              <h2>Año de edición:2024</h2>
              <h2>Autor:Isaac Asimov</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  );
}

export default Ficcion;
