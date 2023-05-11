export interface Station {
  UICCode: string;
  code: string;
  namen: StationsNamen;
}

export interface StationsNamen {
  lang: string;
}

export interface TravelAdvice {
  trips: Trip[];
}

export interface Trip {
  uid: string;
  plannedDurationInMinutes: number;
  transfers: number;
  status: string;
  legs: Leg[];
  optimal: boolean;
}

export interface Leg {
  name: string;
}
