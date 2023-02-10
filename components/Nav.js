import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <nav className="nav">
      <ul>
        {session ? (
          <li>
            <button onClick={() => signOut()}>Sign out</button>
          </li>
        ) : (
          <li>
            <button onClick={() => signIn()}>Sign in</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
