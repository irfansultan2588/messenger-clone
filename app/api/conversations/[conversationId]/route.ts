import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";

interface IParams {
    conversationId?: string;
}

export async function DELETE(
    request: Request,
    { params }: { params: IParams }
  ) {
    try {
      const { conversationId } = params;
      const currentUser = await getCurrentUser();
  
      if (!currentUser?.id) {
        return new NextResponse('Unauthorized', {status: 401});
      }
  
      
    } catch (error) {
      return NextResponse.json(null);
    }
  }