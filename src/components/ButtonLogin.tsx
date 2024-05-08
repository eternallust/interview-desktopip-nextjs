"use client";
import Button from "./Button";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ButtonLogin() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const currentPage = usePathname();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [currentPage]);

  const handleClick = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      alert("Anda Telah Logout");
    }
    router.push("/sign-in");
  };
  return (
    <Button
      label={token ? "Sign Out" : "Sign In"}
      className="bg-yellow-custom !w-20"
      textColor="text-dark-blue"
      onClick={handleClick}
    />
  );
}
