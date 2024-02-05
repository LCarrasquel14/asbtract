import { info } from "@/app/info";
import CardItem from "./CardItem";
import "@/app/styles/cards.css";

const Card = () => {
  return (
    <div className=" cards ">
      {info.map((item) => (
        <CardItem key={item.id} items={item} />
      ))}
    </div>
  );
};

export default Card;
