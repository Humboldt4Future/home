import { Container, Typography, Button, Grid, Paper, Link, Box } from '@material-ui/core';
import fff from './images/fff.png';
import pff from './images/pff.png';
import tff from './images/tff.png';
import sff from './images/sff.png';
import useStyles from './styles.js';
import Heading from './components/Heading/Heading.js';

function App() {
  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <Container>
        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item>
            <Heading/>
          </Grid>
          <Grid item>
            <Paper>
              <Typography className={classes.text} variant="h5">
                Das Ziel unseres Schülerprojekts Humboldt 4 Future ist, 
                die Mitglieder der Schulfamilie auf den Klimawandel aufmerksam 
                zu machen und einfach umzusetzende Tipps zu einer 
                umweltfreundlicheren Lebensweise zu geben.<br/>
                Hierfür entwickeln 13 Schüler/-innen der elften Jahrgangsstufe 
                des Humboldt-Gymnasiums Vaterstetten im Rahmen des Unterrichts 
                eine Applikation zur Berechnung des Ökologischen Fußabdrucks ihrer 
                Mitschüler/-innen. Anfang 2022 soll diese Umfrage an 
                die Schule gebracht werden, in den darauffolgenden Monaten 
                werden die Ergebnisse dann ausgewertet und präsentiert.<br/>
                Mit leicht verständlichen Fragen und einem direkten Feedback 
                nach der Beantwortung der Umfrage soll ein Bewusstsein 
                für Umwelt und Klimaschutz geschaffen werden. Teil des 
                Feedbacks werden umweltfreundlichere Alternativen zum Lebensstil 
                der Teilnehmer/-innen sein. <br/>
                Die ausgewerteten Umfrageergebnisse sollen datenschutzgerecht 
                veröffentlicht werden. Bei Erfolg ist geplant, das Umfragetool 
                auch anderen Schulen zur Verfügung zu stellen.
              </Typography>
            </Paper>
          </Grid>
          <Grid item>
            <Paper>
              <Box display="flex" justifyContent="center">
                <a href="https://fridaysforfuture.de">
                  <img className={classes.logoimage} src={fff} alt="fff"/>
                </a>
                <a href="https://parentsforfuture.de/en/">
                  <img className={classes.logoimage} src={pff} alt="pff"/>
                </a>
                <a href="https://teachers4f.de">
                  <img className={classes.logoimage} src={tff} alt="tff"/>
                </a>
                <a href="https://de.scientists4future.org">
                  <img className={classes.logoimage} src={sff} alt="sff"/>
               </a>
              </Box>
            </Paper>
          </Grid>
          <Grid className={classes.note} item>
            <Paper>
              <Typography variant="h5" align="center">
                <Link className={classes.link} href="https://humboldt4future.github.io/tool">
                  <Button className={classes.button} variant="contained" color="primary" size="large">
                    Click here to get to the tool
                  </Button>
                </Link>
                <br/>
                Note: Currently the tool is not functional
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
