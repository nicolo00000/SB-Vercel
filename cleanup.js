const fs = require('fs').promises;
const path = require('path');

const DAYS_TO_KEEP = 7; // Keep files newer than 7 days
const DIR_TO_CLEAN = path.join(process.cwd(), '.next', 'cache');

async function cleanup() {
  try {
    const now = Date.now();
    const files = await fs.readdir(DIR_TO_CLEAN);

    for (const file of files) {
      const filePath = path.join(DIR_TO_CLEAN, file);
      const stats = await fs.stat(filePath);

      if (now - stats.mtime.getTime() > DAYS_TO_KEEP * 24 * 60 * 60 * 1000) {
        if (stats.isDirectory()) {
          await fs.rm(filePath, { recursive: true });
          console.log(`Removed directory: ${filePath}`);
        } else {
          await fs.unlink(filePath);
          console.log(`Removed file: ${filePath}`);
        }
      }
    }

    console.log('Cleanup completed successfully');
  } catch (error) {
    console.error('Error during cleanup:', error);
  }
}

cleanup();