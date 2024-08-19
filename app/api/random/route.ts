import { NextResponse } from "next/server";
import * as fs from 'fs';
import * as path from 'path';

export async function GET() {
    let amountImages: number = 0;
    fs.readdirSync(path.join(__dirname, '../../../../../public/images')).forEach((file: string) => {
        amountImages++;
    });

    console.log(amountImages);

    return NextResponse.json({
        'request': 'randomImage',
        'imageUrl': 'https://papaplatte-api.skre.dev/images/' + Math.floor(Math.random() * amountImages) + '.jpg'
    });
}