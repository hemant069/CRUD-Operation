import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import CrudModal from "@/Model/crud.model";

// PUT Handler
export async function PUT(
  req: Request,
  context: { params: { _id: string } } // This ensures type alignment
): Promise<Response> {
  await dbConnect();

  try {
    const { _id } = context.params;
    const message = await req.json();

    if (!_id) {
      return NextResponse.json(
        { message: "Invalid ID provided" },
        { status: 400 }
      );
    }

    const existingMessage = await CrudModal.findById(_id);
    if (!existingMessage) {
      return NextResponse.json(
        { message: "Message not found" },
        { status: 404 }
      );
    }

    const updatedMessage = await CrudModal.updateOne({ _id }, message);

    return NextResponse.json(
      { message: "Message updated successfully", updatedMessage },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PUT handler:", error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  context: { params: { _id: string } }
): Promise<Response> {
  await dbConnect();

  try {
    const { _id } = context.params;

    const message = await CrudModal.findById(_id);
    if (!message) {
      return NextResponse.json(
        { message: "Message not found" },
        { status: 404 }
      );
    }

    const deletedMessage = await CrudModal.deleteOne({ _id });

    if (deletedMessage.deletedCount === 0) {
      return NextResponse.json(
        { message: "Failed to delete message" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Message deleted successfully", deletedMessage },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in DELETE handler:", error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
