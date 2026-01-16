import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { glob } from 'glob';
import path from 'path';

const convertImages = async () => {
  const imageFiles = glob.sync('public/**/*.{jpg,jpeg,png,avif,JPG,JPEG,PNG,AVIF}');
  
  let converted = 0;
  
  for (const file of imageFiles) {
    const dir = path.dirname(file); // Gets the actual folder of each image
    
    await imagemin([file], {
      destination: dir, // Saves WebP in the SAME folder as the original
      plugins: [
        imageminWebp({
          quality: 80
        })
      ]
    });
    
    converted++;
  }

  console.log(`✅ Converted ${converted} images to WebP!`);
};

convertImages();