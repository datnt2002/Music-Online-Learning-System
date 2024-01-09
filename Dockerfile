# Stage 1: Build the React application
# Use an official Node runtime as a parent image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./
# If you're using yarn, uncomment the next line and remove the npm install line
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you're using yarn, replace npm install with yarn install

# Copy the rest of the application's code
COPY . .

# Build the application
RUN npm run build
# If you're using yarn, replace npm run build with yarn build

# Stage 2: Serve the app with Nginx
# Use an official Nginx runtime as a parent image
FROM nginx:stable-alpine

# Copy the build output from stage 1 to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and serve the application
CMD ["nginx", "-g", "daemon off;"]
