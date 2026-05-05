#!/usr/bin/env bash
set -euo pipefail

for f in "${PWD}"/*.png; do
    echo "${f}"

    magick "${f}" -filter cubicspline -resize 2000> -quality 50 "${f%.png}.webp"
done