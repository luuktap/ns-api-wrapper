# This file is generated by Nx.
#
# Build the docker image with `npx nx docker-build ns-assignment`.
# Tip: Modify "docker-build" options in project.json to change docker build args.
#
# Run the container with `docker run -p 3000:3000 -t ns-assignment`.
FROM docker.io/node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

RUN addgroup --system ns-assignment && \
          adduser --system -G ns-assignment ns-assignment

COPY dist/ns-assignment ns-assignment
RUN chown -R ns-assignment:ns-assignment .

# You can remove this install step if you build with `--bundle` option.
# The bundled output will include external dependencies.
RUN npm --prefix ns-assignment --omit=dev -f install

CMD [ "node", "ns-assignment" ]
