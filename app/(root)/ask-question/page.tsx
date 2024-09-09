import Question from "@/components/Forms/Question"
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

const AskQuestion = async () => {
  // const {userId} = auth();
  const userId = 'abc123';

  if (!userId) {
    redirect('/sign-in');
  }

  const mongoUser = await getUserById({userId})

  
  return (
    <div>
      <h1 className=" h1-bold text-dark100_light900">Ask a question</h1>
      <div className=" mt-9"><Question mongoUserId = {JSON.stringify(mongoUser._id)}/></div>
    </div>
  )
}

export default AskQuestion