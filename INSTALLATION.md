# Installation Guide for IE Global Website

## Prerequisites

You need to install Node.js first. Here are the recommended methods:

### Method 1: Official Node.js Installer (Recommended)
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the LTS version (v20.x or v22.x)
3. Run the installer package (.pkg file)
4. Follow the installation wizard

### Method 2: Using Homebrew (if you have it)
```bash
brew install node
```

### Method 3: Using NVM (Node Version Manager)
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run:
source ~/.zshrc

# Install and use Node.js
nvm install --lts
nvm use --lts
```

## Verify Installation

After installing Node.js, verify it's working:

```bash
node --version  # Should show v20.x.x or v22.x.x
npm --version   # Should show 10.x.x or 11.x.x
```

## Install Project Dependencies

Once Node.js is installed, run these commands in the project directory:

```bash
# Navigate to the project directory
cd "/Users/cassiandrefke/Desktop/IE Global"

# Install all dependencies
npm install

# Start the development server
npm run dev
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Troubleshooting

### If you get permission errors:
```bash
# Fix npm permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm
```

### If you get EACCES errors:
```bash
# Create a directory for global packages
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### If Node.js version is too old:
Make sure you're using Node.js 18+ (preferably 20+). The project uses Next.js 15 which requires a recent Node.js version.

## Next Steps

1. Install Node.js using one of the methods above
2. Run `npm install` in the project directory
3. Run `npm run dev` to start the development server
4. Open http://localhost:3000 in your browser

The website should now be running locally with hot reload enabled!
