# Show all available commands
default:
    @just --list

# Build with watch mode - automatically rebuilds when files change
build-watch:
    pnpm exec turbo build:watch

# Build for web platform
build-web:
    pnpm exec turbo build:web

# Start development server with hot reload
dev:
    pnpm exec turbo dev

# Build for Capacitor (mobile platforms - Android/iOS)
build-capasitor:
    pnpm exec turbo build:capasitor

# Install all project dependencies using pnpm
install:
    pnpm install
