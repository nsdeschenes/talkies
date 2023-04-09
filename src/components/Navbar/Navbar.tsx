import { currentUser } from "@clerk/nextjs/app-beta";
import NavbarClient from "./NavbarClient";

async function Navbar() {
  const user = await currentUser();

  const userFound = !!user;

  const userInfo = {
    profileImageUrl: user?.profileImageUrl ?? "",
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    userFound: userFound,
  };

  return (
    <nav className="sticky top-0">
      <NavbarClient userInfo={userInfo} />
    </nav>
  );
}

export default Navbar;
