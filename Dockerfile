# Step 1: Building the React app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build the Vite app
RUN npm run build


# Step 2: Serving static files with Nginx
FROM nginx:alpine

# Copy built files into nginx folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Starting nginx
CMD ["nginx", "-g", "daemon off;"]