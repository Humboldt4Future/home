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
                Humboldt4Future ist ein Projekt dessen Ziel es ist auf den Klimawandel aufmerksam
                zu machen und einfach umzusetzende Tipps zu einer umweltfreundlicheren Lebensweise
                zu geben.<br/> Das Projekt besteht aus einer Gruppe von 13 Schüler/-innen, der elften
                Jahrgangsstufe, des Humboldt-Gymnasiums aus Vaterstetten, die im Rahmen des
                Unterrichts eine Applikation entwickeln, um den Ökologischen Fußabdruck ihrer
                Mitschüler/-innen zu errechnen. Spätestens im Februar 2022 soll eine Umfrage an
                die Schule gebracht werden, in den darauffolgenden Monaten werden die Ergebnisse
                dann ausgewertet und voraussichtlich im Mai präsentiert.<br/> Das Ziel ist es mit
                leicht verständlichen Fragen und einem direkten Feedback nach der Beantwortung
                der Umfrage ein Bewusstsein für Umwelt und Klimaschutz zu schaffen. Teil des
                Feedbacks werden umweltfreundlichere Alternativen zum Lebensstil der
                Teilnehmer/-innen sein.<br/> Nach der Auswertung der Umfrage werden wir die
                Ergebnisse datenschutzgerecht veröffentlichen und je nach Erfolg wird 
                geplant die Umfrage auch anderen Schulen zu Verfügung zu stellen.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
