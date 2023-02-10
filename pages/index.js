import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { useSession } from "next-auth/react";
import Todos from "../components/Todos";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Hello, {session.user.name}! <br />
        Here are your todos
        <Todos />
      </>
    );
  }

  return (
    <>
      Not signed in Use is as guest
      <Link href="/guest">Here</Link>
    </>
  );
}
