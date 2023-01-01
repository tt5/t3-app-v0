import { signIn, signOut, useSession } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }
  return (
    <div>
      {session ? (
        <>
          <p>hi {session.user?.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Login with Github</button>
      )}
    </div>
  );
};

export default Login;
