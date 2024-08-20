import * as fs from 'fs';
import * as path from 'path';

const imageFolder = fs.readdirSync(path.join(__dirname, "../../../public/images"))
const imageFolderPath = "../../../images"

export function getImageFolderPath() {
    return imageFolderPath
}

export function randomImage() {
    let amountImages: number = 0;
    imageFolder.forEach((file: string) => {
        amountImages++;
    });

    return Math.floor(Math.random() * amountImages)
}

export function imageAmount() {
    let amountImages: number = 0;
    imageFolder.forEach((file: string) => {
        amountImages++;
    });

    return amountImages
}