import Header from "@/components/Header";
import Form from "@/components/Form";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import "@/app/styles/hero.css";
const page = () => {
  return (
    <div>
      <Header />
      <div className="hero">
        <Form />
      </div>
      <div>
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default page;
