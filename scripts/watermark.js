const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Paths
const PRODUCTS_DIR = path.join(__dirname, '../public/images');
const WATERMARK_IMG = path.join(__dirname, '../public/images/skwhitelogo.png'); // Using white logo
const BACKUP_DIR = path.join(__dirname, '../public/images/products_backup');

const PRODUCT_FILES = [
  'chakri.png', 'farsi_puri.png', 'gathiya.png', 'khakhra.png',
  'lason papadi.webp', 'makai_pauva.png', 'methi_para(1).png',
  'methi_para.png', 'papadi.png', 'sakkar_para.png', 'sev.png',
  'sev_mamra.png', 'thepla.jpg', 'thepla.png', 'thepla.webp'
];

async function addWatermarks() {
  if (!fs.existsSync(WATERMARK_IMG)) {
    console.error('Watermark image not found:', WATERMARK_IMG);
    return;
  }

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log('Created backup directory:', BACKUP_DIR);
  }

  const files = fs.readdirSync(PRODUCTS_DIR);
  let processedCount = 0;

  for (const file of files) {
    if (PRODUCT_FILES.includes(file)) {
      const originalPath = path.join(PRODUCTS_DIR, file);
      const backupPath = path.join(BACKUP_DIR, file);

      // Skip if it's already a backup or processed (we can check by filename or just rely on the backup directory)
      if (!fs.existsSync(backupPath)) {
        // 1. Copy original to backup
        fs.copyFileSync(originalPath, backupPath);
      }

      try {
        // 2. Load the original image from backup to prevent re-watermarking
        const image = sharp(backupPath);
        const metadata = await image.metadata();

        // Calculate watermark size (e.g., 20% of image width)
        const wmWidth = Math.round(metadata.width * 0.20);

        // 3. Resize watermark and set opacity to 40%
        const watermarkBuffer = await sharp(WATERMARK_IMG)
          .resize({ width: wmWidth })
          // Remove opacity/composite with alpha channel
          .composite([{
             input: Buffer.from([255, 255, 255, 100]), // Apply opacity (approx 40%)
             raw: { width: 1, height: 1, channels: 4 },
             tile: true,
             blend: 'dest-in'
          }])
          .toBuffer()
          .catch(() => {
             // Fallback if opacity composite fails, just resize
             return sharp(WATERMARK_IMG).resize({ width: wmWidth }).toBuffer();
          });

        // 4. Composite watermark over the original image (bottom right corner with padding)
        await sharp(backupPath)
          .composite([
            {
              input: watermarkBuffer,
              gravity: 'southeast', // Bottom right corner
            },
          ])
          .toFile(originalPath); // Overwrite the image in products directory

        console.log(`✅ Watermarked: ${file}`);
        processedCount++;
      } catch (err) {
        console.error(`❌ Error watermarking ${file}:`, err);
      }
    }
  }

  console.log(`\n🎉 Successfully watermarked ${processedCount} images!`);
  console.log(`Original images were backed up to: /public/images/products_backup/`);
}

addWatermarks();
