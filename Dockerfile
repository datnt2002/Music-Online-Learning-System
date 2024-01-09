# Stage 1: Build the React application
# Use an official Node runtime as a parent image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json .
# If you're using yarn, uncomment the next line and remove the npm install line
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you're using yarn, replace npm install with yarn install

# Copy the rest of the application's code
COPY . .

# Build the application
EXPOSE 3000
CMD ["npm", "start"]
