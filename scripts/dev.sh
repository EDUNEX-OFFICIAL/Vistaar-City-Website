#!/usr/bin/env bash
# Start Vistar City local Next.js dev server with pnpm.
# Binds to 127.0.0.1 only (VPS isolation — never 0.0.0.0).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

# Default 3010 — host 3000 is often taken by automation-web on this VPS.
PORT="${PORT:-3010}"
HOST="${HOST:-127.0.0.1}"
URL="http://${HOST}:${PORT}"

if ! command -v pnpm >/dev/null 2>&1; then
  echo "error: pnpm not found. Install pnpm, then re-run." >&2
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "Installing dependencies with pnpm…"
  pnpm install
fi

echo "Starting Vistar City → ${URL}"
echo "  Stop with Ctrl+C"
echo

# Open browser when possible (local desktop / WSL with browser); ignore failure on headless VPS.
open_browser() {
  sleep 2
  if command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$URL" >/dev/null 2>&1 || true
  elif command -v open >/dev/null 2>&1; then
    open "$URL" >/dev/null 2>&1 || true
  fi
}

if [[ "${OPEN_BROWSER:-1}" == "1" ]]; then
  open_browser &
fi

exec pnpm exec next dev --hostname "$HOST" --port "$PORT"
