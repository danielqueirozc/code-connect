import Image from "next/image";
import { Avatar } from "./avatar";

interface Postprops {
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
        };
    }
}

export function CardPost({ post }: Postprops) {
    return (
        <article>
            <header>
                <figure>
                    <Image 
                        src={post.cover} 
                        alt={post.title} 
                        width={438} 
                        height={133} 
                    /> 
                </figure>
            </header>

            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>

            <footer>
                <Avatar author={post.author} />
            </footer>
        </article>
    )

}
        