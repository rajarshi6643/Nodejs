FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/service
WORKDIR /usr/src/service

# Install app dependencies
COPY package.json /usr/src/service/
RUN npm install

# Bundle app source
COPY . /usr/src/service

EXPOSE 8080
CMD [ "npm", "start" ]
