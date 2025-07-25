import MainPage from "@/components/mainpage";
import { getSortedPostList } from "@/lib/posts";


export default async function Main() {

    const postList = await getSortedPostList()

    return (
        <MainPage postList={postList} />
    )
}