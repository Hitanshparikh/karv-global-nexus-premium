@echo off
echo ========================================
echo   KARV Group - HTML Version Setup
echo ========================================
echo.

echo Step 1: Copying assets from dist folder...
if exist "..\dist\assets" (
    xcopy "..\dist\assets\*" "assets\" /E /I /Y
    echo ✅ Assets copied successfully
) else (
    echo ❌ Assets folder not found. Please run 'npm run build' first.
)

echo.
echo Step 2: Copying uploaded images...
if exist "..\dist\lovable-uploads" (
    xcopy "..\dist\lovable-uploads\*" "lovable-uploads\" /E /I /Y
    echo ✅ Uploaded images copied successfully
) else (
    echo ⚠️  Lovable uploads folder not found.
)

echo.
echo Step 3: Testing if everything is ready...
if exist "index.html" (
    echo ✅ HTML files are ready
) else (
    echo ❌ HTML files missing
)

if exist "css\styles.css" (
    echo ✅ CSS file is ready
) else (
    echo ❌ CSS file missing
)

if exist "js\main.js" (
    echo ✅ JavaScript file is ready
) else (
    echo ❌ JavaScript file missing
)

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Your HTML version is ready! You can now:
echo.
echo 1. Open index.html in your browser
echo 2. Deploy the html-version folder to any web server
echo 3. Use with Netlify drag-and-drop deployment
echo.
echo For PHP conversion:
echo - Rename .html files to .php
echo - Update navigation links accordingly
echo.

pause
