FROM node:current-bullseye

WORKDIR /workspace

RUN apt-get update && apt-get install -y \
    git \
    vim \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
