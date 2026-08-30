#!/usr/bin/env bash
# Build and start Vistar City Docker prod (loopback :3012 + vps_edge).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

export GIT_COMMIT="${GIT_COMMIT:-$(git rev-parse --short HEAD 2>/dev/null || echo latest)}"
export COMPOSE_PROJECT_NAME=vistar-city

if [[ ! -f .env ]]; then
  echo "Creating .env from .env.example — set NEXT_PUBLIC_SITE_URL before public TLS smoke."
  cp .env.example .env
fi

echo "Building vistar-city-web (${GIT_COMMIT})…"
docker compose build web

echo "Starting vistar-city-web…"
docker compose up -d web

echo "Waiting for health…"
for i in $(seq 1 30); do
  if curl -fsS "http://127.0.0.1:3012/api/health" >/dev/null 2>&1; then
    echo "OK  http://127.0.0.1:3012/api/health"
    exit 0
  fi
  sleep 2
done

echo "WARN: health check did not pass within 60s — inspect: docker logs vistar-city-web" >&2
exit 1
