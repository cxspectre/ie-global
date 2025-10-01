#!/bin/bash

# IE Global Website Setup Script
echo "🚀 Setting up IE Global website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "📥 Please install Node.js first:"
    echo "   1. Go to https://nodejs.org/"
    echo "   2. Download the LTS version"
    echo "   3. Run the installer"
    echo "   4. Restart your terminal"
    echo ""
    echo "After installing Node.js, run this script again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version is too old. Please install Node.js 18 or higher."
    echo "Current version: $(node --version)"
    exit 1
fi

echo "✅ Node.js $(node --version) is installed"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not available"
    exit 1
fi

echo "✅ npm $(npm --version) is available"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! You can now start the development server:"
    echo "   npm run dev"
    echo ""
    echo "Then open http://localhost:3000 in your browser"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi
