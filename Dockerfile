# Stage 1: Build the Next.js application
FROM node AS builder

WORKDIR /tmp/next

COPY . .

RUN npm ci
RUN npm run build

# Stage 2: Create a production-ready image
FROM node AS production

WORKDIR /src

COPY --from=builder /tmp/next/package*.json ./
COPY --from=builder /tmp/next/.next ./.next
COPY --from=builder /tmp/next/public ./public

RUN npm ci --only=production

# Set the environment variable to production
ENV NODE_ENV=production

# Expose the necessary port for your Next.js application (e.g., 3000)
EXPOSE 3000

CMD ["npm", "start"]