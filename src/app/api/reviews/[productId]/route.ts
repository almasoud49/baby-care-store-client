import { NextResponse } from 'next/server';
import clientPromise from '@/libs/mongodb'; 

export async function POST(request: Request, { params }: { params: { productId: string } }) {
  try {
    const { productId } = params;
    const body = await request.json();
    const { reviewerName, rating, comment } = body;

    if ( !reviewerName || !rating || !comment) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('babyCare');
    const collection = db.collection('reviews');

    const review = {
      productId,
      reviewerName,
      rating,
      comment,
      createdAt: new Date(),
    };

    await collection.insertOne(review);

    return NextResponse.json({ message: 'Review added successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error adding review:', error);
    return NextResponse.json({ error: 'Failed to add review' }, { status: 500 });
  }
}
