import Menu from "./Menu";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./Infantil.css";


function Infantil() {


  return (
    <main>
      <Menu />
      <Card sx={{ maxWidth: 300 }} className="infantil1">
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image="../../../public/infa1.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Sinopsis de TARDE DE SAPO "Ozzztrazz, qué aburrido ezzztá el
              zzzapo" pensó el mosquito. "Zzzi zzzupiera como dizzztraerlo?"
              Tras el mosquito llegaron el caracol, la hormiga, la araña, la
              libélula, el ciempiés y finalmente el saltamontes que no estaba
              dispuesto a formar parte de aquella nutritiva comitiva.
              <br />
              <h2>Año de edición:2024</h2>
              <h2>Autor:Maite Mutuberria</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }} className="infantil2">
        <CardActionArea>
          <CardMedia
            component="img"
            height="460"
            image="../../../public/infa2.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Sinopsis de MARTINA FUTBOLISTA Martina se une al equipo de fútbol
              de su colegio con mucha ilusión. Es muy buena defensa y está
              dispuesta a dar lo mejor de sí misma.
              <br />
              <h2>Año de edición:2024</h2>
              <h2>Autor:SUSANNA ISERN</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 380 }} className="infantil3">
        <CardActionArea>
          <CardMedia
            component="img"
            height="380"
            image="../../../public/infa3.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Orión tiene miedo a las avispas, y a los monstruos, y a los
              cobertizos, y a las tormentas, y a los perros, y a las arañas, y a
              las alturas, pero por encima de todo tiene miedo a, ¡la oscuridad!
              Acompaña a Orión en una aventura en la que se enfrentará a su
              mayor miedo, ¡y descubrirá que es muy diferente de lo que pensaba!
              <br />
              <h2>Año de edición:2024</h2>
              <h2>Autor:Emma Yarlett</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card sx={{ maxWidth: 300 }} className="infantil4">
        <CardActionArea>
          <CardMedia
            component="img"
            height="410"
            image="../../../public/infa5.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Chufa era una jirafa alta y delgada, con un largo cuello muy
              bonito. Pero tenía unas rodillas torcidas y unas patas como
              palillos. Se pasaba el día de pie, masticando hojas y hojas.
              <br />
              <h2>Año de edición:2014</h2>
              <h2>Autor:Giles Andreae</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="infantil5">
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image="../../../public/infa4.png"
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
              <h2>Autor:Rachel Bright</h2>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  );
}

export default Infantil;
