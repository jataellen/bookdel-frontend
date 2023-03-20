# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any dependencies
RUN npm install

RUN npm install --save axios

# Expose port 3000 for the app to run on
EXPOSE 3000

# Run the command to start the app
CMD ["npm", "run", "serve"]
