import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
    try {
        const { fullname, email, password } = await req.json();

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return NextResponse.json({ error: '이미 사용 중인 이메일입니다.' }, { status: 400 });
        }

        const user = await prisma.user.create({
            data: {
                fullname,
                email,
                password
            }
        });

        return NextResponse.json({ success: true, user: { id: user.id, email: user.email } }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
    }
}
