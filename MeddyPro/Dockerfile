# Use an official Node.js runtime as the base image for the build stage
FROM node:18 as build

# Set the working directory in the container
WORKDIR /src

# Copy the package.json and package-lock.json from the Angular app directory to the container
COPY ./MeddyPro/package*.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Install the Ionic CLI globally
RUN npm install -g ionic

# Copy the rest of the application code to the working directory
COPY ./MeddyPro .

# Build the Ionic app
RUN ionic build

# Stage 2: Use a smaller image for the runtime stage
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built artifacts from the build stage to the runtime stage
COPY --from=build /src/www .

# Expose the port that the app will run on
EXPOSE 80

# Use the CMD instruction to specify the command to run when starting the container
CMD ["npm", "start"]
