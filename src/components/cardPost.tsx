import Image from "next/image";
import { Avatar } from "./avatar";

interface PostProps {
    post: {
        id: number;
        cover: string;
        title: string;
        slug: string;
        body: string;
        markdown: string;
        author: {
            id: number;
            name: string;
            username: string;
            avatar: string;
        }
    }
}

export function CardPost({ post }: PostProps) {
    return (
        <article className="w-[486px] h-[431px]">
            <header className="rounded-t-lg bg-[#888888] p-6">
                <figure>
                    <Image
                        className="rounded-lg"
                        src={post.cover} 
                        alt={post.title} 
                        width={438}
                        height={133} 
                    /> 
                </figure>
            </header>

            <div className="flex flex-col gap-8 bg-[#171D1F] rounded-b-lg p-4 text-[#BCBCBC]">
                <section className="flex flex-col gap-2">
                    <h2 className="font-semibold text-lg/[27px] ">{post.title}</h2>
                    <p className="font-normal text-[15px]/[22.5px]">{post.body}</p>

                    <span className="text-[#81FE88] text-lg/[27px] underline ">Ver detalhes</span>
                </section>

                <footer>
                    <Avatar author={post.author} />
                </footer>
            </div>
        </article>
    )

}
        