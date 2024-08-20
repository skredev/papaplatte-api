import * as fs from 'fs';
import * as path from 'path';

export function randomImage() {
    let amountImages: number = 0;
    fs.readdirSync(path.join(__dirname, '../../../../../public/images')).forEach((file: string) => {
        amountImages++;
    });

    return Math.floor(Math.random() * amountImages)
}