import { MainLayout } from "../layouts/mainLayout";
import { useState, useEffect } from "react";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <MainLayout title={"Posts"}>
      <h1>Posts</h1>
      <ul>
        {posts && posts.length > 0
          ? posts.map((post, id) => {
              return (
                <li key={id}>
                  <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                    {post.title}
                  </Link>
                </li>
              );
            })
          : null}
      </ul>
    </MainLayout>
  );
};

Posts.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts,
  };
};

export default Posts;
