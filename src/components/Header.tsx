import Image from "next/image";
import ButtonLogin from "./ButtonLogin";

export default function Header({ name }: { name: string }) {
  return (
    <header className="relative md:flex justify-center">
      <nav className="bg-dark-blue p-4 flex justify-between items-center md:absolute z-30 md:w-[calc(100%-40px)] mt-4 rounded">
        <div className="md:hidden">
          <Image src="/svg/burger.svg" alt="menu" width={14} height={12} />
        </div>
        <h1 className="text-base text-yellow-custom max-md:pl-12">{name}</h1>
        <ul className="flex flex-1 space-x-4 px-4 max-md:hidden">
          <li>
            <a
              href="/"
              className="text-yellow-custom text-base hover:text-white"
            >
              Home
            </a>
          </li>
        </ul>
        <ButtonLogin />
      </nav>
    </header>
  );
}
