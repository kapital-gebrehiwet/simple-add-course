import DB from '../../../libs/db';
import course from '../../../model/course'
import {NextResponse} from 'next/server'
export async function POST(request){
    const {title,description}=await request.json();
    await DB().then(()=>
    {
        console.log(`mongodb connected successfully`)
    }).catch((err)=>{
        console.error(`mongodb connection failed`,err)
        throw new Error('Failed to connect to MongoDB')
    })

   await course.create({title,description})
    return NextResponse.json({message:'succesfully created'},{status:200})
    }

export async function GET()
{   await DB();
    const courses=await course.find();
   return  NextResponse.json(courses)

}
export async function DELETE(request)
{
    const id=request.nextUrl.searchParams.get('id');
    await DB();
    await course.findByIdAndDelete(id);
    return NextResponse.json({message:'succesffully deleted  '})
}