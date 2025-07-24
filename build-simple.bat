@echo off
echo ========================================
echo   Building Project for Netlify
echo ========================================
echo.

echo Running npm run build...
npm run build

echo.
if exist "dist" (
    echo ✅ SUCCESS! The dist folder has been created.
    echo.
    echo 📁 Location: %CD%\dist
    echo.
    echo Next steps for Netlify deployment:
    echo 1. Go to https://app.netlify.com/drop
    echo 2. Drag and drop the 'dist' folder
    echo 3. Your site will be live!
    echo.
) else (
    echo ❌ BUILD FAILED - dist folder not created
    echo Check for errors above
    echo.
)

pause
