import connect from "@/app/lib/db";
import Prompt from "../../../model/promptModel";
import User from "@/app/api/model/userModel";

export async function GET(request, {params}){
    const {user} = params;
    await connect();
    
    try{
        const userId = await User.findOne({username: user}).select({_id: 1});
        const promptByUser = await Prompt.find({createdBy: userId})

        return Response.json({data: [promptByUser]})
    }catch(err){
        console.error(err);
    }
}