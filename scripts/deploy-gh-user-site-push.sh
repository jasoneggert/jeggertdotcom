#!/usr/bin/env bash

set -euo pipefail

TARGET_DIR="${GITHUB_PAGES_REPO:-/Users/jasoneggert/misc/jasoneggert.github.io}"
COMMIT_MESSAGE="${GITHUB_PAGES_COMMIT_MESSAGE:-Update portfolio site}"

bash ./scripts/deploy-gh-user-site.sh

cd "$TARGET_DIR"

if [ -n "$(git status --porcelain)" ]; then
  git add .
  git commit -m "$COMMIT_MESSAGE"
  git push origin main
  echo "GitHub Pages repo updated and pushed."
else
  echo "No changes to commit in $TARGET_DIR"
fi
