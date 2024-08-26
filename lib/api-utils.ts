import * as fs from 'fs';
import * as path from 'path';

const imageFolder = fs.readdirSync(path.join(__dirname, "../../../public/images"))
const imageFolderPath = "../../../images"

// Returning the image folder path
export function getImageFolderPath() {
    return imageFolderPath
}

// Returning random Image ID
export function randomImage() {
    let amountImages: number = 0;
    imageFolder.forEach((file: string) => {
        amountImages++;
    });

    return Math.floor(Math.random() * amountImages)
}

//  Returning the current amount of images in the folder
export function imageAmount() {
    let amountImages: number = 0;
    imageFolder.forEach((file: string) => {
        amountImages++;
    });

    return amountImages
}