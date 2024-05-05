import Menu from "./Menu";
import "./Autores.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Autores() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <main>
      <Menu />
      <Card sx={{ maxWidth: 300 }} className="a1">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              M
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Maite Mutuberria"
          subheader="nació en Eltzaburu (Navarra) en 1985 14, 2016"
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a1.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            se licenció en Comunicación Audiovisual y estudió Ilustración en
            Madrid. Desde entonces se dedica a la ilustración de proyectos
            educativos y de libros para niños y adultos, labor por la que ha
            obtenido los premios de Periodismo Ricardo Arregi 2017, Lazarillo
            2014, Peru Abarka 2014 y Etxepare 2013.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              Su afición e interés por las manualidades le viene de la familia,
              pero ese interés le viene sobre todo del carpintero. Comenzó en
              producciones audiovisuales y hoy en día trabaja como ilustrador
              sobre todo en la educación y en los libros de Literatura Infantil
              y Juvenil. Entre ellos se encuentran el álbum ilustrado de
              Literatura Infantil y Juvenil (Leire Bilbao). Pamiela, ganadora
              del Premio Etxepare en 2013, y un álbum ilustrado para adultos,
              Zerua Berún (Cielo Plomizo, Castillo Suárez. Editorial Ibaizabal),
              ganador del premio Peru Abarka en 2014.
            </Typography>
            <Typography paragraph>
              En los Premios Lazarillo 2014, la correcta composición de sus
              obras, los trazos sencillos y frescos y las conexiones entre texto
              e ilustraciones, le dieron el premio a la creación de lecturas
              variadas.Pero además de los libros, también ha trabajado mucho en
              otros campos, como los trabajos de ilustración realizados en la
              fórmula 3D"Karabin Karabin". En ella hace referencia a los juegos
              de antaño. Para ello creó obras en 3D para representar bien la
              acción y ver las obras realizadas por el propio público. Creó unas
              cajas y al abrir la cubierta de las cajas había formas de mostrar
              juegos reales. También puso luces, a través de las cuales daba
              movimiento a las formas creadas. Su objetivo fue transmitir la
              magia de los juegos.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="a2">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Susanna Isern"
          subheader="Nació en La Seu d’Urgell en 1978"
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a2.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            es escritora, psicóloga, profesora y madre de tres hijos. Se
            licenció en Psicología por la Universidad de Barcelona y se
            especializó en clínica por la Complutense de Madrid. Durante más de
            una década compatibilizó su trabajo como terapeuta y profesora en la
            universidad con su pasión por la literatura. En la actualidad se
            dedica exclusivamente a escribir.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              Es autora de literatura infantil y juvenil de referencia en España
              y otros países. Ha publicado casi un centenar de libros en
              español, con traducciones a 30 idiomas y más de un millón de
              ejemplares vendidos alrededor del mundo. Ha sido galardonada con
              importantes premios a nivel nacional e internacional y algunas de
              sus obras se han adaptado al teatro.
            </Typography>
            <Typography paragraph>
              Entre sus libros destacan "El Emocionómetro del Inspector Drilo"
              llevado a los escenarios en el 2018 por la compañía de teatro
              "Acuario Teatro" y en el 2019 por la compañía italiana "Giù di Su
              per Giù". "Olivia y las plumas" adaptada al teatro en 2019 por la
              compañía cántabra "La Machina". "La música del mar" medalla de oro
              en la categoría de libros escritos en español "Cartas en el
              bosque" medalla de plata en la categoría picture book - 4-8 years
              old en los Moonbeam Children's Book Awards 2017. "El momento
              perfecto" finalista en el premio Libro Kiriko 2016. "What are you
              scared of, Little Mouse?" (¿De qué tienes miedo, Ratoncito?)
              premiado con Medalla de Plata en los Moonbeam Children's Books
              Award 2015 de EE.UU., en la categoría picture book - preschool. Y
              "The Magic Ball of Wool" (El Ovillo Mágico), premiado con Medalla
              de Plata en la categoría de mejor álbum ilustrado de 4 a 8 años en
              los Moonbeam Children´s Book Awards 2013 de EE.UU.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="a3">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              G
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="George Orwell"
          subheader="Nació el 25 de junio de 1903 en Motihari, India."
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a3.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            A los ocho años, ingresó en un selecto internado de Sussex, donde
            destacó por sus buenas notas y su evidente falta de medios
            económicos. En 1917 obtuvo una beca para entrar en el prestigioso
            colegio privado de Eton, donde permaneció cuatro años.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              En 1922, en vez de aceptar una beca para ir a la universidad,
              decidió seguir la tradición familiar y hacerse funcionario
              colonial. Prestó servicios en la Policía Imperial India destinado
              en Birmania, (1922-1927).
            </Typography>
            <Typography paragraph>
              Posteriormente escribió Días en Birmania (1934), una critica
              inmisericorde contra el imperialismo, y en cierta medida, una obra
              autobiográfica. Su siguiente obra, La hija del Reverendo (1935),
              es la historia de una solterona que encuentra su sitio viviendo
              entre los campesinos.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="a4">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              P
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Patrick James Rothfuss"
          subheader="Nació el 6 de junio de 1973,Madison"
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a4.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            es un escritor estadounidense de fantasía y profesor adjunto de
            literatura y filología inglesa de la Universidad de Wisconsin. Es el
            autor de la serie Crónica del asesino de reyes, que fue rechazada
            por varias editoriales antes de que el primer libro de la serie El
            nombre del viento fuese publicado en el año 2007. Obtuvo muy buenas
            críticas y se convirtió en un éxito de ventas.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              Tras completar The Song of Flame and Thunder, Rothfuss la envió a
              varias editoriales, pero fue rechazada. En el año 2002 ganó la
              competición Escritores del futuro con The Road to Levinshir, un
              extracto de su novela.3​ Tras esto, Rothfuss vendió la novela a
              DAW Books. The Song of Flame and Thunder fue dividida en una serie
              de tres tomos titulada Crónica del asesino de reyes, con el primer
              tomo El nombre del viento, publicado en abril del año 2007. La
              novela ganó ese año el Premio Quill a la mejor novela de
              fantasía/ciencia ficción,4​ apareció en la lista de superventas
              del New York Times5​ y Amazon la seleccionó entre sus diez «joyas
              ocultas» de 2007.6​
            </Typography>
            <Typography paragraph>
              El segundo libro de la trilogía, El temor de un hombre sabio, la
              continuación de El nombre del viento, se publicó en marzo de 2011
              en el mundo anglosajón. Debutó la primera semana de su lanzamiento
              en el n.º 1 de The New York Times y en el n.º 2 de The Times, y
              fue libro recomendado del mes en Amazon, donde era uno de los
              títulos más vendidos desde un mes antes de su publicación.6​
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="a5">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              I
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Isaac Asimov"
          subheader="Nació el 20 de diciembre de 1919, Petróvichi, RSFS de Rusia"
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a5.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            fue un escritor y profesor de Bioquímica en la Escuela de Medicina
            de la Universidad de Boston,3​ de origen judío4​ (aunque era ateo)5​
            y ruso, nacionalizado estadounidense, conocido por ser un prolífico
            autor de obras de ciencia ficción y divulgación científica.2​
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              Su obra más famosa es la Serie de la Fundación, también conocida
              como Trilogía o Ciclo de Trántor, que forma parte de la serie del
              Imperio Galáctico y que más tarde combinó con su otra gran serie
              sobre los robots. También escribió obras de misterio y fantasía,
              así como una gran cantidad de textos de no ficción. En total,
              firmó más de 500 volúmenes y unas 9000 cartas o postales. Sus
              trabajos han sido publicados en 9 de las 10 categorías del Sistema
              Dewey de clasificación.
            </Typography>
            <Typography paragraph>
              La mayoría de sus libros de divulgación explican los conceptos
              científicos siguiendo una línea histórica, retrotrayéndose lo más
              posible a tiempos en que la ciencia en cuestión se encontraba en
              una etapa elemental. A menudo brinda la nacionalidad, las fechas
              de nacimiento y muerte de los científicos que menciona, así como
              las etimologías de las palabras técnicas.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="a6">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Stephen Covey"
          subheader="Nació el  24 de octubre de 1932,Salt Lake City, Utah, Estados Unidos"
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a6.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            fue un licenciado en administración de empresas, escritor, hacedor
            de frases, conferenciante, religioso y profesor estadounidense
            conocido por ser el autor del libro superventas: Los siete hábitos
            de las personas altamente efectivas.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              Covey fue el fundador de los que anteriormente se denominaba
              «Covey Leadership Center», (Centro Covey de liderazgo) en Salt
              Lake City, Utah, institución que fue luego adquirida por la
              compañía FranklinQuest, el 30 de mayo de 1997 convirtiéndose en
              «FranklinCovey Company», una compañía que ofrece servicios
              profesionales y cuya especialidad consiste en vender cursos y
              seminarios de formación para la gestión de negocio, herramientas
              para aumentar la productividad, así como también la Gestión del
              Tiempo, tanto para individuos como para organizaciones.
            </Typography>
            <Typography paragraph>
              Stephen Covey poseía una licenciatura en Administración de
              empresas, que le fue otorgada por la Universidad de Utah (en Salt
              Lake City), una maestría en Administración de Empresas, obtenida
              de la Universidad de Harvard y un doctorado en historia y doctrina
              de la Iglesia de Jesucristo de los Santos de los Últimos Días,
              otorgado por la Universidad Brigham Young. Prácticamente dedicó
              gran parte de su vida a la enseñanza y a la práctica de los
              preceptos que detalla en sus libros, de como vivir y liderar
              organizaciones y familias basándose (centrándose) en principios,
              los cuales él sostenía, «son universales y como tales son
              principios aceptados por las grandes religiones y sistemas éticos
              del mundo».
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="a7">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              L
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Louise Hay"
          subheader="Nació el  8 de octubre de 1926-San Diego"
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a7.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            fue una escritora y oradora estadounidense, considerada una de las
            figuras más representativas del movimiento del Nuevo Pensamiento y
            una precursora de los libros de autoayuda.2​3​
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              Apenas cumplidos los 10 años, su padrastro comenzó a maltratarla y
              abusar sexualmente de ella. En 1941, Louise decidió huir de su
              casa y comenzar a trabajar como camarera, labor que calificó como
              «más llevadera» que todo lo que había padecido anteriormente.8​ Se
              entregaba sexualmente a aquel que le demostrara un poco de
              atención, un único motivo por el cual quedó embarazada con 16 años
              y, al dar a luz, dio en adopción a su bebé a una pareja sin
              hijos.8​ En 1950, regresó a su casa para llevarse consigo a su
              madre y buscarle un empleo como encargada de la limpieza en un
              pequeño hotel.8​
            </Typography>
            <Typography paragraph>
              Poco después, se asentó con una amiga en Chicago, donde cumplió
              labores domésticas hasta que obtuvo un trabajo como modelo de alta
              costura en Nueva York para diseñadores como Bill Blass, Oleg
              Cassini y Trigère Pauline.9​ Mientras incursionaba en la industria
              de la moda, conoció a un empresario inglés, Andrew Hay, con el que
              se casó en 1954. Lo definió como un «caballero encantador y
              educado»9​ y su relación le permitió desarrollar su carácter
              social en múltiples eventos presidenciales y de la realeza.9​ Sin
              embargo, en 1968, luego de 14 años de matrimonio, su esposo la
              abandonó por otra mujer. «Fue precisamente cuando yo estaba
              empezando a creer que las cosas buenas podían ser duraderas. Sí,
              fue un golpe aplastante. Pero el tiempo pasa, y sobreviví»,
              relató.9​ Louise Hay jamás volvió a contraer matrimonio.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="a8">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              G
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Giles Andreae"
          subheader="Nació el 16 de marzo de 1966"
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a8.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Andreae debutó con el personaje de Purple Ronnie en 1987 como un
            acto teatral para una revista de Oxford antes de elegir ocho poemas
            para aparecer en tarjetas de felicitación con simples dibujos en
            blanco y negro similares a garabatos. Inicialmente, distribuyó las
            tarjetas por sí mismo en las papelerías de Oxford, pero más tarde
            firmó un acuerdo con un editor de tarjetas de felicitación
            establecido.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              El ilustrador dibujó la caricatura al estilo de un hombre de palo
              con una cara sonriente y un gran cuerpo ovalado. Andreae suele
              representar a Ronnie como un poeta cómico, las leyendas rimadas de
              la caricatura están escritas en un estilo simple e incluyen un
              lenguaje tabú leve. Las caricaturas a menudo presentan poemas
              alegres con temas de humor de inodoro sobre eructos o
              flatulencias. El personaje que aparece en tarjetas de
              felicitación, libros, camisetas y artículos de tocador, y en la
              compañía de refrescos, Vimto también usó al personaje en varias
              campañas publicitarias. [2] Andreae vendió Purple Ronnie a Coolabi
              en abril de 2007 en un acuerdo por valor de 4,8 millones de
              libras. [3] Desde entonces, la compañía ha intentado entrar en el
              mercado estadounidense adaptando los diseños y el lenguaje para el
              público estadounidense y los medios digitales.
            </Typography>
            <Typography paragraph>
              Andreae también escribe bajo el seudónimo de Edward Monkton; Se
              describe a sí mismo como "filósofo, poeta, artista y tipo
              interesante". [6] Monkton es mejor conocido por A Lovely Love
              Story, una historia sobre dos dinosaurios que se enamoran, que se
              ha convertido en una lectura popular en las bodas. [7] Otras
              historias de Monkton incluyen The Pig of Happiness, un video de
              YouTube que Andreae financió y creó después de recuperarse de un
              ataque de depresión clínica. [8] [9] Andreae amplió The Pig of
              Happiness para crear una serie de cortometrajes animados para la
              BBC titulada World of Happy
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card sx={{ maxWidth: 300 }} className="a9">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              T
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Tony Robbins"
          subheader="Nació el 29 de febrero de 1960."
        />
        <CardMedia
          component="img"
          height="150"
          image="../../../public/a9.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Durante la escuela secundaria en 1960, Robbins creció diez pulgadas,
            un crecimiento acelerado que luego se atribuyó a un tumor
            pituitario.1​ Ha dicho que su vida hogareña era "caótica" y
            "abusiva". Cuando tenía diecisiete años se fue de casa y nunca
            regresó.1​ Robbins luego trabajó como conserje y no asistió a la
            universidad
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
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
            <Typography paragraph>Trayectoria:</Typography>
            <Typography paragraph>
              Nacido como Anthony J. Mahavoric, en una familia de origen croata,
              llegó a ser bien conocido a través de sus infomerciales y libros
              de autoayuda, Poder sin límites. Robbins escribe sobre temas como
              la salud y la energía, los temores de la superación, la
              comunicación persuasiva, y sobre cómo mejorar las relaciones.
              Robbins comenzó su carrera en el aprendizaje de muchos oradores de
              motivación diferentes, y promueve seminarios de su mentor
              personal, Jim Rohn. Está profundamente influenciado por la
              programación neurolingüística y una variedad de coaching
              estratégico.
            </Typography>
            <Typography paragraph>
              El trabajo de Robbins ha formado parte de los medios de
              comunicación más importantes, incluyendo medios tales como Time,
              Newsweek, Fortune, Forbes, Life, GQ, Vanity Fair, Business Week,
              Tycoon and Success magazines, la CBS Evening News, NBC News, Fox
              News, CNN y A&E, así como periódicos, programas de radio, y medios
              de comunicación de Internet en todo el mundo.3​ Robbins ha sido
              mencionado o ha aparecido en 15 películas importantes,4​
              incluyendo un cameo en la exitosa película "Shallow Hal". en el
              año 2007, fue nombrado en la lista de la revista Forbes "Celebrity
              100
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </main>
  );
}

export default Autores;
