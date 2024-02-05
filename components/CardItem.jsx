import Image from "next/image";
import Link from "next/link";
import "@/app/styles/cardInfo.css";

const CardItem = ({ items }) => {
  return (
    <div className="flex flex-row mb-20 pr-16">
      <Image src={items.img} width={50} height={30} className="img mr-4" />
      <div>
        <h1 className=" text-2xl font-extrabold mb-4">{items.title}</h1>
        <p className="mb-4 text-card">{items.text}</p>
        <Link className="link-info" href="/">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
