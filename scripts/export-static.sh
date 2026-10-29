#!/usr/bin/env bash
# Gera a versão estática do site (GitHub Pages) a partir do build de produção.
# Uso: npm run build && bash scripts/export-static.sh [pasta-de-saida]
set -euo pipefail
OUT="${1:-out}"
PORT="${PORT:-8799}"
DOMINIO="www.glowuplaser.com.br"

node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js dev \
  --config dist/server/wrangler.json --local --persist-to .wrangler/state \
  --ip 127.0.0.1 --port "$PORT" --inspector-port 0 > .wrangler-export.log 2>&1 &
SERVIDOR=$!
trap 'kill $SERVIDOR 2>/dev/null || true' EXIT
for _ in $(seq 1 60); do curl -sf -o /dev/null "http://127.0.0.1:$PORT/" && break; sleep 1; done

rm -rf "$OUT" && mkdir -p "$OUT"
cp -R dist/client/. "$OUT/"
rm -f "$OUT/_headers" "$OUT/vinext-client-entry-manifest.json"

baixar() { curl -sf "http://127.0.0.1:$PORT$1" -o "$OUT$2"; }
baixar / /index.html
for p in servicos privacidade; do mkdir -p "$OUT/$p"; baixar "/$p" "/$p/index.html"; done
baixar /sitemap.xml /sitemap.xml
baixar /robots.txt /robots.txt

# /cadastro era redirecionamento no servidor; no Pages vira meta refresh.
mkdir -p "$OUT/cadastro"
cat > "$OUT/cadastro/index.html" <<HTML
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=/#unidades"><link rel="canonical" href="https://$DOMINIO/#unidades"><title>Glow Up Laser</title></head><body><a href="/#unidades">Nossas unidades</a></body></html>
HTML

cp "$OUT/index.html" "$OUT/404.html"
echo "$DOMINIO" > "$OUT/CNAME"
touch "$OUT/.nojekyll"

if grep -rq "127.0.0.1" "$OUT" --include=*.html --include=*.xml --include=*.txt; then
  echo "ERRO: endereço local vazou para o export" >&2; exit 1
fi
echo "Export estático pronto em $OUT"
