import DB from '../../../../libs/db';
import course from '../../../../model/course'
import {NextResponse} from 'next/server'


export async function PUT(request,{params})
{
    const {id}=params;
    const{newTitle:title,newDescription:description}=await request.json();
    await DB();
    await course.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:'successfully updated'},{status:200})

}
export async function GET(request,{params})
    {
        const {id}=params;
        await DB();
        const cours=await course.findOne({_id:id})
        return NextResponse.json(cours)
    }
