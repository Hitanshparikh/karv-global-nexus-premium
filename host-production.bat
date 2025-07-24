@echo off
echo Building production version...
call npm run build

echo Starting preview server...
call npm run preview

pause
