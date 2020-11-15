import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <nav>
        <Head>
          <title>{title} | Pashkevich Dmitry</title>
          <meta name='description' content='Test project based on Next JS' />
          <meta name='keywords' content='next, js, react' />
          <meta charSet='utf-8' />
        </Head>
        <Link href='/'>
          <span>Home</span>
        </Link>
        <Link href='/posts'>
          <span>Posts</span>
        </Link>
        <Link href='/about'>
          <span>About</span>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          left: 0;
          right: 0;
          height: 60px;
          background: darkblue;
          top: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav span {
          color: white;
          cursor: pointer;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
