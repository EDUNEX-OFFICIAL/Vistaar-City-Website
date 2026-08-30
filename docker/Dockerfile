# syntax=docker/dockerfile:1
# Next.js standalone — Vistar City marketing site
FROM node:20-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS build
ARG NEXT_PUBLIC_SITE_URL=https://vistaarcity.edunexservices.in
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
RUN groupadd --system vistar && useradd --system --gid vistar vistar
COPY --from=build /app/public ./public
COPY --from=build --chown=vistar:vistar /app/.next/standalone ./
COPY --from=build --chown=vistar:vistar /app/.next/static ./.next/static
USER vistar
EXPOSE 3000
HEALTHCHECK --interval=15s --timeout=5s --retries=10 --start-period=45s \
  CMD node -e "fetch('http://127.0.0.1:3000/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["node", "server.js"]
