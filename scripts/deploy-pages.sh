#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch; GitHub Pages serves that branch.
set -euo pipefail
cd "$(dirname "$0")/.."
pnpm install --frozen-lockfile
pnpm build
rev=$(git rev-parse --short HEAD)
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
cp -r dist/. "$tmp/"
touch "$tmp/.nojekyll"
git -C "$tmp" init -q -b gh-pages
git -C "$tmp" add -A
git -C "$tmp" commit -qm "Build of $rev"
git -C "$tmp" push -qf "$(git remote get-url origin)" gh-pages
echo "Deployed $rev to gh-pages"
