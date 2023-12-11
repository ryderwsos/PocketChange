import connect from "@/app/lib/db";
import Prompt from "../../../model/promptModel";
import Category from "../../../model/categoryModel";

export async function GET(request, {params}){
    const {category} = params;
    await connect();
    
    try{
        const categoryId = await Category.findOne({name: category}).select({_id: 1});
        const promptByCategory = await Prompt.find({category: categoryId})

        return Response.json({data: [promptByCategory]})
    }catch(err){
        console.error(err);
    }
}