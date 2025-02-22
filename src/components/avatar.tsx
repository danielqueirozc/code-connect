import Image from "next/image";

interface AvatarProps {
    author: {
        id?: number;
        name?: string;
        username: string;
        avatar: string;
    }
}

export function Avatar({ author }: AvatarProps) {
    return (
        <div>
            <Image 
                src={author.avatar} 
                alt={author.username} 
                width={32} 
                height={32} 
            />
            <span>{author.username}</span>
        </div>
    )
}