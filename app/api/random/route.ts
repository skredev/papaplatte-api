import { NextResponse } from "next/server";
import { randomImage } from "@/lib/api-utils"

export const dynamic = 'force-dynamic'

export async function GET() {
    let randomImageId = randomImage()
    return NextResponse.json({
        'request': 'randomImage',
        'preview': 'https://papaplatte-api.skre.dev/preview?id=' + randomImageId,
        'imageUrl': 'https://papaplatte-api.skre.dev/images/' + randomImageId + '.jpg'
    });
}