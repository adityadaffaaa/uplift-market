import {
  NotificationButton,
  LogOutButton,
} from "./NavbarButtons";
import Image from "next/image";
import Link from "next/link";
import icons from "@/app/utils/icons";
const { ArrowDownIcon, BellIcon } = icons.navbarIcon;
const NavbarOnLoggedInCondition = ({
  user,
  accountMenu,
  handleLogOut,
}) => (
  <div className="flex items-center text-neutral-600 gap-2">
    <NotificationButton />
    <menu className="flex flex-col w-full gap-4 lg:hidden">
      <div className="flex items-center gap-4 px-4 ">
        <div className="avatar">
          <div className="w-10 rounded-xl">
            <Image
              height={40}
              width={40}
              src={"/assets/images/img-profile-picture.png"}
              alt="img"
              loading="lazy"
            />
          </div>
        </div>
        <p className="capitalize text-paragraph7">
          {user && user?.data.attributes.first_name}
        </p>
      </div>
      <hr />
      <ul>
        <li>
          <div className="flex">
            <BellIcon />
            <Link href={"#"}>Notifikasi</Link>
          </div>
        </li>
        {accountMenu.map(({ url, title, icon }, index) => (
          <li key={index}>
            <div className="flex">
              {icon}
              <Link href={url}>{title}</Link>
            </div>
          </li>
        ))}
        <li>
          <LogOutButton handleLogOut={handleLogOut} />
        </li>
      </ul>
    </menu>
    <details className="dropdown hidden lg:block">
      <summary className="m-1 items-center cursor-pointer flex gap-1 lg:gap-4 hover:bg-transparent">
        <div className="avatar">
          <div className="w-10 rounded-xl">
            <img src="assets/images/img-profile-picture.png" />
          </div>
        </div>
        <p className="capitalize text-paragraph7">
          {user && user?.data.attributes.first_name}
        </p>
        <ArrowDownIcon />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-lg w-52">
        {accountMenu.map(({ icon, title, url }, index) => (
          <li key={index}>
            <Link
              href={url}
              className="rounded-md text-paragraph9 text-neutral-600 flex gap-3"
            >
              {icon}
              {title}
            </Link>
          </li>
        ))}
        <li>
          <LogOutButton handleLogOut={handleLogOut} />
        </li>
      </ul>
    </details>
  </div>
);

export default NavbarOnLoggedInCondition;
