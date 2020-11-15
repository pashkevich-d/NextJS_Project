import Router from "next/router";
import { MainLayout } from "../layouts/mainLayout";

export default function About() {
  return (
    <MainLayout title={"About page"}>
      <h1>About</h1>
      <button onClick={() => Router.push("/")}>Go to home page</button>
      <button onClick={() => Router.push("/posts")}>Go to posts page</button>
    </MainLayout>
  );
}
