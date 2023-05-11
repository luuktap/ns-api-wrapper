import { Station, Trip } from './types';

export const findOptimalTrip = (trips: Trip[]): Trip => {
  const optimalTrip = trips.find((trip) => trip.optimal);

  if (!optimalTrip) {
    throw new Error('No optimal trip found');
  }

  return optimalTrip;
};

export const findStationByLongName = (
  longName: string,
  stations: Station[]
): Station => {
  const station = stations.find((station) => station.namen.lang === longName);

  if (!station) {
    throw new Error('Station not found');
  }

  return station;
};

export const sortTripsByLeastTransfers = (trips: Trip[]): Trip[] => {
  return trips.sort((a, b) => a.transfers - b.transfers);
};
