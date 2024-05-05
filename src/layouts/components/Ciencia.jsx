import Menu from "./Menu";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Ciencia.css";
function Ciencia() {
  return (
    <main>
      <Menu />
      <Card sx={{ maxWidth: 300 }} className="c1">
        <CardActionArea>
          <CardMedia
            component="img"
            height="390"
            image="../../../public/c1.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Para comprender un poco más sobre robótica y los posibles caóticos
              efectos que pudiera tener en nuestra sociedad, es fundamental en
              nuestras vidas Yo, robot, cuyo planteamiento muestra a las tres
              leyes de la Inteligencia Artificial que deben seguirse a toda
              costa; de lo contrario, la humanidad podría verse en decadencia y
              ser dominada por los robots.
              <br />
              <h2>Año de edición:1950</h2>
              <h2>Autor:Isaac Asimov </h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }} className="c2">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="../../../public/c2.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              es un libro escrito por Felicia Day, reina de los geeks y
              emprendedora que realiza un puñado de cosas distintas (es gamer,
              escribe, toca el violín, etcétera). Esta es una especie de
              autobiografía de Felicia que está compuesta por anécdotas
              chistosas y por un mensaje importante sobre lo que es ser “raro” y
              cómo Internet se relaciona con ese abstracto concepto.
              <br />
              <h2>Año de edición:2016</h2>
              <h2>Autor:Felicia Day</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="c3">
        <CardActionArea>
          <CardMedia
            component="img"
            height="420"
            image="../../../public/c3.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              El escritor describe a la modernidad como “líquida” porque muchos
              de los conceptos e ideales que caracterizaron a generaciones
              pasadas, se desvanecen; pierden consistencia. Antes, por ejemplo,
              el mayor temor era no encontrar un trabajo fijo o no poder formar
              una familia, mientras que ahora sucede todo lo contrario… pensar
              en nunca cambiar de rutina es lo que realmente aterra.
              <br />
              <h2>Año de edición:1999</h2>
              <h2>Autor:Zygmunt Bauman</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }} className="c4">
        <CardActionArea>
          <CardMedia
            component="img"
            height="410"
            image="../../../public/c4.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Un grupo de veinteañeros que trabajan como programadores: su
              escaso tiempo libre los convierte en algo parecido a siervos de la
              industria informática: de ahí el título de la obra. El texto
              proporciona un repaso de dos pequeñas subculturas de la década de
              los 90. Se muestra la vida de los empleados de la multinacional de
              la informática: Microsoft.
              <br />
              <h2>Año de edición:1995</h2>
              <h2>Autor:Douglas Coupland</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="c5">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="../../../public/c5.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              se desarrolla en dos tiempos diferentes. Los primeros personajes
              están en la época de la Segunda Guerra Mundial y son, básicamente,
              hackers de las fuerzas aliadas. Los segundos personajes son
              descendientes de los primeros y viven a finales de los 90. Ellos
              también son una especie de hackers y crean un underground de datos
              en un país ficticio. Lo que buscan los segundos personajes es
              generar anonimato en Internet y proteger/informar a poblaciones
              que podrían estar en peligro de un genocidio (ambos temas muy
              relevantes para la cultura digital actual).
              <br />
              <h2>Año de edición:Neal Stephenson</h2>
              <h2>Autor:Neal Stephenson</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  );
}

export default Ciencia;
