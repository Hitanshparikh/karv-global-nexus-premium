@echo off
echo ========================================
echo   Building for Netlify Deployment
echo ========================================

echo.
echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Building production version...
call npm run build

echo.
echo Step 3: Build complete!
echo.
echo Next steps:
echo 1. Go to https://app.netlify.com/drop
echo 2. Drag and drop the 'dist' folder
echo 3. Your site will be live instantly!
echo.
echo Alternative: Use Netlify CLI
echo - Install: npm install -g netlify-cli
echo - Deploy: netlify deploy --prod --dir=dist
echo.

pause
