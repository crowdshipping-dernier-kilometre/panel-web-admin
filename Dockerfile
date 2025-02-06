# Use a base image with Node.js 16
FROM node:22.13.1 AS build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application for production
RUN npm run build

# Verify the contents of the /app directory
RUN ls -la /app

# Use a base image with Nginx to serve the application
FROM nginx:alpine

# Copy the build files to the Nginx directory
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/src/bootstrap /usr/share/nginx/html/bootstrap
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]