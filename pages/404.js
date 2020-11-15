import Link from "next/link";
import { MainLayout } from "../layouts/mainLayout";
import styles from "../styles/error.module.css";

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={styles.errorTitle}>Error 404</h1>
      <p>
        You can start from the <Link href='/'>home page</Link>{" "}
      </p>
    </MainLayout>
  );
}
