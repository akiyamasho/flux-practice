# ------ Bundle build image --------

FROM node:13-alpine AS build-env

# Override the base log level (info).
ENV NPM_CONFIG_LOGLEVEL warn

# Copy only the package info over first, so simple code changes don't
# re-trigger the `npm ci` call on subsequent builds
COPY package.json package-lock.json /build/

WORKDIR /build
RUN npm ci

# Copy the rest of the source code over
COPY .. /build

# Build frontend bundle, remove source maps, and prune devDependencies
RUN npm run build && \
  find ./build -name '*.map' -delete && \
  npm prune --production

# ------ Bundle run image --------

FROM node:13-alpine

WORKDIR /opt/app

COPY --from=build-env \
  /build/package.json \
  ./
COPY --from=build-env /build/build /opt/app/build
COPY --from=build-env /build/node_modules /opt/app/node_modules

RUN npm install -g serve

EXPOSE 5000
ENV NODE_ENV=production
ENV PORT=5000

CMD ["serve", "-s", "build"]
