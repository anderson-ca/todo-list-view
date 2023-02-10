import { useSession, signIn } from "next-auth/react";
import Link from "next/link";

const Layout = ({ children }) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <main>{children}</main>
      </>
    );
  }

  return (
    <>
      Not signed in
    </>
  );
};

export default Layout;
