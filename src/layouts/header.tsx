import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"


export default function Header() {

    return (
        <section className="w-full flex justify-center bg-gray-50 shadow-sm">
            <div className="flex justify-between max-w-5xl w-full p-4 items-center">
                <div>
                    <Link href={'/blog'} className="font-bold text-lg">Hyun_dev</Link>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href={'/blog'}>Posts</Link>
                    <Link href={'/about'}>About</Link>
                    <Button variant="ghost" size='icon' className="size-5">
                        <Link href={'https://github.com/joonda'}>
                            <FaGithub />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}