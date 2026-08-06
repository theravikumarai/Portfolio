Write-Host "Deploying Lambda..." -ForegroundColor Cyan

$projectRoot = Resolve-Path "$PSScriptRoot\.."

# Build
& "$PSScriptRoot\build_lambda.ps1"

# Create ZIP
Compress-Archive `
-Path "$projectRoot\build\*" `
-DestinationPath "$projectRoot\deployment.zip" `
-Force

Write-Host ""
Write-Host "Deployment package created:" -ForegroundColor Green
Write-Host "$projectRoot\deployment.zip"
Write-Host ""
Write-Host "Upload deployment.zip to AWS Lambda."