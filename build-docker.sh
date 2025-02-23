#!/bin/sh
docker build --build-arg \
  NUXT_PUBLIC_GOOGLE_CLIENT_ID=${NUXT_PUBLIC_GOOGLE_CLIENT_ID} \
  -t my-nuxt-app .