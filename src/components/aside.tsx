import Image from "next/image";

export function Aside() {
    return (
        <aside className="bg-black700 py-10 px-16 rounded-lg">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
        </aside>
    )
}