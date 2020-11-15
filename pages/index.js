import Head from "next/head";
import Link from "next/link";
import { MainLayout } from "../layouts/mainLayout";

export default function Home() {
  return (
    <div>
      <MainLayout title={"Home page"}>
        <h1>Home</h1>
        <p>
          <Link href='about'>
            <a>About</a>
          </Link>
        </p>
        <p>
          <Link href='posts'>
            <a href='/posts'>Posts</a>
          </Link>
        </p>
      </MainLayout>
    </div>
  );
}
