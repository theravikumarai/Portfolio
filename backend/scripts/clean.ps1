Write-Host "Cleaning previous build..." -ForegroundColor Yellow

$buildFolder = Join-Path $PSScriptRoot "..\build"
$zipFile = Join-Path $PSScriptRoot "..\deployment.zip"

if (Test-Path $buildFolder) {
    Remove-Item $buildFolder -Recurse -Force
}

if (Test-Path $zipFile) {
    Remove-Item $zipFile -Force
}

Write-Host "Cleanup completed." -ForegroundColor Green