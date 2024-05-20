import { logoutAccount } from "@/lib/actions/user.actions";
import { LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handleLogout = async () => {
    const logout = await logoutAccount();
    if (logout) router.push("/sign-in");
  };
  return (
    <footer className="footer ">
      <div className={type === "mobile" ? "footer_name-moblie" : "footer_name"}>
        <p className="text-2xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-moblie" : "footer_email"}
      >
        <h1 className="text-14 truncate  text-gray-700 font-semibold">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600 ">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" alt="logo" fill />
      </div>
    </footer>
  );
};

export default Footer;
