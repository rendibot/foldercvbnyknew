# Proses Banyak File TXT ke VCF

A simple web tool to convert multiple TXT files containing phone numbers into VCF format. Each file can have its own VCF name, and phone numbers will be formatted into contacts with incremental names.

## Features:
1. Convert multiple TXT files to VCF format.
2. Option to set the VCF file name for each TXT file.
3. Auto-generate contact names with a specified format (e.g., `anjay 1`, `anjay 2`, etc.).
4. Downloads the generated VCF file for each TXT input.

### How to Use:
1. Click the "Proses Berkas" button to upload your TXT files.
2. Optionally, set a custom VCF file name. If left empty, the VCF file will take the original TXT file name.
3. Each phone number in the TXT file will be given a contact name in the format `anjay 1`, `anjay 2`, etc.
4. Click "Hasilkan VCF" to generate and download the VCF file.

### File Structure:
- **index.html**: The main HTML file for the web interface.
- **style.css**: The styling for the interface.
- **script.js**: The logic to handle file reading, processing, and VCF generation.