import { Router } from 'express';
import { getStations, getTrips } from './ns-api';
import { findOptimalTrip, findStationByLongName } from './utils';

const router = Router();

router.get('/optimal', async (req, res) => {
  const { departFrom, arriveAt, date } = req.query;

  // todo: better way to validate query params
  if (typeof departFrom !== 'string') {
    res.status(400).send('Invalid departFrom');
    return;
  }

  if (typeof arriveAt !== 'string') {
    res.status(400).send('Invalid arriveAt');
    return;
  }

  if (typeof date !== 'string') {
    res.status(400).send('Invalid date');
    return;
  }

  try {
    // possibly cache this to since it's not going to change often
    const stations = await getStations();

    // todo: separate this, to be able to send a 400 bad request if the station is not found
    const departureStation = findStationByLongName(departFrom, stations);
    const arrivalStation = findStationByLongName(arriveAt, stations);

    const trips = await getTrips({
      fromStation: departureStation.code,
      toStation: arrivalStation.code,
      dateTime: date,
    });

    const optimalTrip = findOptimalTrip(trips);

    res.status(200).json(optimalTrip);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
});

export { router };
