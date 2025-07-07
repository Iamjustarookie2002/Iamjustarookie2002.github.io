# PowerShell Script to Fix Common Issues and Enable Better Command Execution
# Run this script as Administrator or in your user profile

Write-Host "Fixing PowerShell configuration..." -ForegroundColor Green

# Enable PSReadLine for better command line experience
try {
    Import-Module PSReadLine -Force
    Write-Host "✓ PSReadLine module loaded successfully" -ForegroundColor Green
} catch {
    Write-Host "⚠ PSReadLine module not available" -ForegroundColor Yellow
}

# Set execution policy to allow local scripts (if needed)
try {
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
    Write-Host "✓ Execution policy set to RemoteSigned for current user" -ForegroundColor Green
} catch {
    Write-Host "⚠ Could not set execution policy" -ForegroundColor Yellow
}

# Create aliases for common commands
if (!(Get-Alias -Name "ren" -ErrorAction SilentlyContinue)) {
    New-Alias -Name "ren" -Value "Rename-Item"
    Write-Host "✓ Created alias 'ren' for Rename-Item" -ForegroundColor Green
}

if (!(Get-Alias -Name "move" -ErrorAction SilentlyContinue)) {
    New-Alias -Name "move" -Value "Move-Item"
    Write-Host "✓ Created alias 'move' for Move-Item" -ForegroundColor Green
}

# Function to run commands with better error handling
function Invoke-SafeCommand {
    param(
        [string]$Command,
        [string]$Description = "Command"
    )
    
    Write-Host "Running: $Description" -ForegroundColor Cyan
    try {
        Invoke-Expression $Command
        Write-Host "✓ $Description completed successfully" -ForegroundColor Green
    } catch {
        Write-Host "✗ Error running $Description : $($_.Exception.Message)" -ForegroundColor Red
    }
}

# Function to rename files safely
function Rename-FileSafe {
    param(
        [string]$Path,
        [string]$NewName,
        [string]$Description = "File rename"
    )
    
    if (Test-Path $Path) {
        try {
            Rename-Item -Path $Path -NewName $NewName -Force
            Write-Host "✓ $Description completed: $Path -> $NewName" -ForegroundColor Green
        } catch {
            Write-Host "✗ Error in $Description : $($_.Exception.Message)" -ForegroundColor Red
        }
    } else {
        Write-Host "⚠ File not found: $Path" -ForegroundColor Yellow
    }
}

Write-Host "`nPowerShell configuration completed!" -ForegroundColor Green
Write-Host "You can now use:" -ForegroundColor Cyan
Write-Host "  - 'ren' instead of 'Rename-Item'" -ForegroundColor White
Write-Host "  - 'move' instead of 'Move-Item'" -ForegroundColor White
Write-Host "  - 'Invoke-SafeCommand' for better error handling" -ForegroundColor White
Write-Host "  - 'Rename-FileSafe' for safe file renaming" -ForegroundColor White

Write-Host "`nExample usage:" -ForegroundColor Cyan
Write-Host "  Rename-FileSafe -Path 'Hero.tsx' -NewName 'Anime.tsx' -Description 'Rename Hero to Anime'" -ForegroundColor White
Write-Host "  Invoke-SafeCommand -Command 'npm run dev' -Description 'Start development server'" -ForegroundColor White 