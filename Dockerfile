# Use an official Node.js runtime as the base image
FROM node:16 AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project's source code to the container
COPY . .

# Build the Angular app
RUN npm run build

# Use an official Nginx image as the final base image for serving the Angular app
FROM nginx:latest

# Copy the built Angular app from the previous stage to Nginx's web directory
COPY --from=build /usr/src/app/dist/app /usr/share/nginx/html

# Expose the default Nginx port (80)
EXPOSE 80

# Start Nginx to serve the Angular app
CMD ["nginx", "-g", "daemon off;"]
