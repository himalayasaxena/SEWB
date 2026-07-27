# syntax=docker/dockerfile:1

FROM node:20-bookworm-slim AS base
WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install -g npm@11 && npm install

FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
ARG PAYLOAD_SECRET=local-build-secret-5c7ccbc12f4cde9f27199696
ARG DATABASE_URL=mongodb://mongo:27017/payload
ARG NEXT_PUBLIC_SERVER_URL=http://localhost:3000
ARG PREVIEW_SECRET=preview-secret
ARG NO_INDEX=false
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ENV DATABASE_URL=$DATABASE_URL
ENV NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL
ENV PREVIEW_SECRET=$PREVIEW_SECRET
ENV NO_INDEX=$NO_INDEX
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# VPS has ~1GB RAM — avoid package.json's 8GB heap setting during Docker builds
RUN NODE_OPTIONS="--no-deprecation --max-old-space-size=512" npx next build

FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN groupadd --system --gid 1001 nodejs
RUN useradd --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
RUN mkdir -p ./media && chown nextjs:nodejs ./media

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
