import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);

  const login = useAuthStore((state) => state.login);

  const logout = useAuthStore((state) => state.logout);

  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
  });

  return (
    <>
      <h3> LoginPage </h3>

      {authStatus === "authenticated" ? (
        <div> {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>No authenticated</div>
      )}
    </>
  );
};
