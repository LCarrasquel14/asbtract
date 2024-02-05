import Image from "next/image";
import Link from "next/link";
import "@/app/styles/header.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 py-11 px-20 bg-black text-white ">
      <div className="flex flex-row ">
        <Link
          href="https://www.abstract.com/"
          className="flex flex-row letterhead-left"
        >
          <Image
            src="/brand.png"
            alt="letterhead of the page"
            width={35}
            height={35}
          />
          <span className="text-2xl ml-2 mr-4 font-semibold ">Abstract</span>
        </Link>
        <Link href="/">
          <span className="border-l-2 border-solid border-white font-semibold text-2xl pl-4 letterhead-right">
            Help center
          </span>
        </Link>
      </div>
      <div>
        <Link href="/support">
          <button className=" mr-5 py-2 px-6 border border-solid border-white rounded-md text-2xl">
            Submit a request
          </button>
        </Link>
        <Link href="/sing-in">
          <button className="py-2 px-6 bg-blue-600 rounded-md text-2xl">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
