# Favicon Files

This directory contains favicon files for ByteLab Infotech.

## Required Files

### Standard Favicons
- `favicon.ico` - Multi-size ICO file (16x16, 32x32, 48x48)
- `favicon-16x16.png` - 16x16 PNG
- `favicon-32x32.png` - 32x32 PNG

### Mobile Icons
- `apple-touch-icon.png` - 180x180 PNG (iOS home screen)
- `android-chrome-192x192.png` - 192x192 PNG (Android)

## Generating Favicons

### From Logo SVG

1. **Using Online Tools:**
   - [RealFaviconGenerator](https://realfavicongenerator.net/)
   - [Favicon.io](https://favicon.io/)
   - Upload your logo SVG and generate all required sizes

2. **Using Design Software:**
   - Export logo at required sizes
   - Use ImageMagick or similar tools to batch convert
   - Ensure transparent backgrounds where needed

3. **ICO File Creation:**
   - Use [ICO Convert](https://icoconvert.com/) or similar
   - Include multiple sizes (16x16, 32x32, 48x48) in single ICO

### File Specifications

- **Format**: PNG for all except favicon.ico
- **Background**: Transparent (for PNG files)
- **Colors**: Should match brand colors
- **Optimization**: Compress files for web (use tools like TinyPNG)

## Current Status

Place favicon files in this directory. The layout.tsx file is configured to use these files automatically.

## File Naming

Keep the exact file names as specified above. Next.js will automatically detect and serve these files.

