import axios from 'axios';
import { config } from './config';
import { Station, Trip } from './types';

const reisInfoClient = axios.create({
  baseURL: config.nsApiBaseUrl,
  headers: {
    'Ocp-Apim-Subscription-Key': config.nsSubscriptionKey,
  },
});

export type GetTripsParameters = {
  fromStation: string;
  toStation: string;
  dateTime: string;
};

export const getStations = async (): Promise<Station[]> => {
  const apiResponse = await reisInfoClient.get<{ payload: Station[] }>(
    `/api/v2/stations`
  );

  if (!apiResponse.data.payload) {
    throw new Error('No data received from NS API');
  }

  return apiResponse.data.payload;
};

export const getTrips = async (
  parameters: GetTripsParameters
): Promise<Trip[]> => {
  const apiResponse = await reisInfoClient.get<{ trips: Trip[] }>(
    `/api/v3/trips`,
    {
      params: {
        ...parameters,
      },
    }
  );

  if (!apiResponse.data.trips) {
    throw new Error('No data received from NS API');
  }

  return apiResponse.data.trips;
};
