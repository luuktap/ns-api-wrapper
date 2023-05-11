# NsAssignment

## Functionality

This application is a wrapper around the NS API. It exposes endpoints combining and filtering data from the NS API.

## Prerequisites

- NodeJS v16 or higher
- An NS API subscription key (get at [apiportal.ns.nl](apiportal.ns.nl))
- Docker (optional)

## Installation

1. Run `npm i` to install all dependencies.
2. Create a copy of `.env.example` and name it `.env`. Fill in the environment variables.
3. Run `nx build` to build the application.

## Development server

Run `nx serve ns-assignment` for a dev server. This will expose the HTTP REST API on http://localhost:3000.

## Running in docker

First build the application using `nx build`. Then run the included Dockerfile. Don't forget to pass along the environment variables (found in .env.example).
