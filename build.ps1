# PowerShell script to build the project
Write-Host "Building the project..." -ForegroundColor Green

try {
    # Run the build command
    npm run build
    
    if (Test-Path "dist") {
        Write-Host "✅ Build successful! The 'dist' folder has been created." -ForegroundColor Green
        Write-Host "📁 Location: $(Get-Location)\dist" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Next steps for Netlify deployment:" -ForegroundColor Cyan
        Write-Host "1. Go to https://app.netlify.com/drop" -ForegroundColor White
        Write-Host "2. Drag and drop the 'dist' folder" -ForegroundColor White
        Write-Host "3. Your site will be live!" -ForegroundColor White
    } else {
        Write-Host "❌ Build failed - dist folder not created" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error during build: $($_.Exception.Message)" -ForegroundColor Red
}

Read-Host "Press Enter to continue"
