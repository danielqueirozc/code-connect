import Image from "next/image";

interface AvatarProps {
    author: {
        id?: number;
        name: string;
        username: string;
        avatar: string;
    }
}

export function Avatar({ author }: AvatarProps) {
    return (
        <div className="flex justify-between">
           <div />
           <div className="flex items-center gap-[4.5px]">
            <Image 
                    src={author.avatar} 
                    alt={author.name} 
                    width={32} 
                    height={32} 
                />
                <span>@{author.username}</span>
           </div>
        </div>
    )
}