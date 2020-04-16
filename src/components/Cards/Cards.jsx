import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';



const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  let percentageDeath= (deaths.value)*100/(confirmed.value)
  let prcDeath = percentageDeath.toFixed(2)

  let recoveredPeople =(recovered.value)*100/(confirmed.value)
  let rcrvdppl=recoveredPeople.toFixed(2)

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <hr/>
            <Typography variant="h5" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <hr/>
            <Typography variant="h5" component="h2">
            <Typography color="textSecondary" gutterBottom>
            Last Updated 
            </Typography>   {new Date(lastUpdate).toDateString()}
            </Typography>
            <hr/>

            <Typography variant="h5" component="p">
          %{rcrvdppl} of the infected people recovered.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
     
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <hr/>
            <Typography variant="h5" component="h2">
            <Typography color="textSecondary" gutterBottom>
            Last Updated 
            </Typography>   {new Date(lastUpdate).toDateString()}
            </Typography>
            <hr/>

            <Typography variant="h5" component="p">
         %{prcDeath} of the infected poeple died .
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
