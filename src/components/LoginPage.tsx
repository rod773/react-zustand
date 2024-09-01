import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);

  const login = useAuthStore((state) => state.login);

  const logout = useAuthStore((state) => state.logout);

  const user = useAuthStore((state) => state.user);

  return (
    <>
      <h3> LoginPage </h3>

      {authStatus === "authenticated" ? (
        <div> {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No authenticated</div>
      )}

      {authStatus === "authenticated" ? (
        <button onClick={logout}> Logout</button>
      ) : (
        <button onClick={() => login("rod@gmail.com", "123")}> Login</button>
      )}
    </>
  );
};
