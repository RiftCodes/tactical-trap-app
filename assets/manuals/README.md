# User Manuals

This folder contains user manuals for the Tactical Traps Bluetooth Lock app in multiple languages.

## Available Manuals

### Markdown Versions (In-App)

- `user_manual_en.md` - English manual
- `user_manual_es.md` - Spanish manual
- `user_manual_fr.md` - French manual

### PDF Versions (External)

- `Tactical Traps - Lock Manual.pdf` - Complete technical manual
- `bluetooth_elite_letter.pdf` - Bluetooth communication protocol

## Manual System

The app provides a **Simple Manual** view that shows key information in an easy-to-read format, and a **Full Manual** option that allows users to:

1. **View Online**: Access the complete manual on the Tactical Traps website
2. **PDF Preview**: View the full PDF manual within the app (when available locally)

## Features

- **Multi-language Support**: Manuals available in English, Spanish, and French
- **Progressive Disclosure**: Simple overview → Detailed sections → Full technical manual
- **Offline Access**: Basic manual content available without internet
- **Online Integration**: Full manuals accessible via web browser
- **PDF Support**: Native PDF viewing when files are available

## Content Structure

Each manual covers:

1. Introduction & Getting Started
2. App Features & Interface
3. Connection & Setup
4. Basic Operations
5. Advanced Features
6. Troubleshooting
7. Safety & Maintenance
8. Support & Contact

## Technical Notes

- Manuals are written in Markdown for easy maintenance
- Content is localized using Flutter's internationalization system
- PDF viewing requires the `flutter_pdfview` package
- Online manuals are accessed via `url_launcher` package
