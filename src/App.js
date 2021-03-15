import { Container, AppBar, Typography, Button, Grid, Paper, Link } from '@material-ui/core';
import logo from './images/h4f.png';
import useStyles from './styles.js';

function App() {
  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Humboldt4Future
        </Typography>
        <img className={classes.image} src={logo} alt="logo" height="60"/>
      </AppBar>
      <Container>
        <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
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
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
