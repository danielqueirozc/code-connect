import { CardPost } from "@/components/cardPost";

// const post = {
//   "id": 1,
//   "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   "title": "Introdução ao React",
//   "slug": "introducao-ao-react",
//   "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   "author": {
//       "id": 101,
//       "name": "Ana Beatriz",
//       "username": "anabeatriz_dev",
//       "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//   }
// }

async function getAllPosts() {
  const response = await fetch('http://localhost:3042/posts')

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

interface PostProps {
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

export default async function Home() { // coloquei async para obter os posts no lado do servidor ao inves do client
  const posts: PostProps[] = await getAllPosts() // call to external API

  return (
    <>
      {posts.map(post => (
        <CardPost key={post.id} post={post} /> // passo o post como prop para o CardPost
      ))}
    </>
  );
}
