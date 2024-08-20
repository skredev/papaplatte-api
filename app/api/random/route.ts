import { NextResponse } from "next/server";
import { randomImage } from "@/lib/api-utils"

export const dynamic = 'force-dynamic'

export async function GET() {
    return NextResponse.json({
        'request': 'randomImage',
        'imageUrl': 'https://papaplatte-api.skre.dev/images/' + randomImage() + '.jpg'
    });
}