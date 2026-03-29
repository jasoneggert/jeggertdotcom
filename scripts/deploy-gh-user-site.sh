#!/usr/bin/env bash

set -euo pipefail

SOURCE_DIR="dist/"
TARGET_DIR="${GITHUB_PAGES_REPO:-/Users/jasoneggert/misc/jasoneggert.github.io}/"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Missing dist/. Run npm run build first."
  exit 1
fi

if [ ! -d "$TARGET_DIR/.git" ]; then
  echo "Target GitHub Pages repo not found at: $TARGET_DIR"
  echo "Set GITHUB_PAGES_REPO to the local jasoneggert.github.io repo path if needed."
  exit 1
fi

rsync -av --delete \
  --exclude ".git/" \
  --exclude ".DS_Store" \
  --exclude ".nojekyll" \
  --exclude "dewarp/" \
  --exclude "floorplan/" \
  --exclude "superposition/" \
  --exclude "scene.bin" \
  --exclude "scene.gltf" \
  "$SOURCE_DIR" "$TARGET_DIR"

touch "${TARGET_DIR}.nojekyll"

echo "Synced dist/ to $TARGET_DIR"
echo "Next steps:"
echo "  cd \"$TARGET_DIR\""
echo "  git status"
echo "  git add ."
echo "  git commit -m \"Update portfolio site\""
echo "  git push"
