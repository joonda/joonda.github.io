import MainPage from "@/components/mainpage";
import { getPostList } from "@/lib/posts";


export default async function Main() {

    const postList = await getPostList()

    return (
        <MainPage postList={postList} />
    )
}