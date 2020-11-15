import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MainLayout } from "../../layouts/mainLayout";

export default function Post({ post: serverPost }) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(async () => {
    const response = await fetch(
      `http://localhost:4200/posts/${router.query.id}`
    );
    const data = await response.json();
    if (!serverPost) {
      setPost(data);
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
    </MainLayout>
  );
}

Post.getInitialProps = async (ctx) => {
  if (!ctx.req) {
    return { post: null };
  }
  const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
  const post = await response.json();

  return {
    post,
  };
};
