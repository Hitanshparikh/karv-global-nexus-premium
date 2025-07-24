@echo off
echo Building the project...
call npm run build

echo Starting HTTP server on all network interfaces...
cd dist
python -m http.server 8080 --bind 0.0.0.0

pause
