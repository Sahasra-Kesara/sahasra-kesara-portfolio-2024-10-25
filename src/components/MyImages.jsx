import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const MyImages = () => {
  return (

      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px]"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

export default MyImages;

const cards = [
  {
    url: "MyImages/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "MyImages/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "MyImages/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "MyImages/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "MyImages/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "MyImages/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "MyImages/7.jpg",
    title: "Title 7",
    id: 7,
  },
  {
    url: "MyImages/8.jpg",
    title: "Title 8",
    id: 8,
  },
  {
    url: "MyImages/9.jpg",
    title: "Title 9",
    id: 9,
  },
  {
    url: "MyImages/10.jpg",
    title: "Title 10",
    id: 10,
  },
  {
    url: "MyImages/11.jpg",
    title: "Title 11",
    id: 11,
  },
  {
    url: "MyImages/12.jpg",
    title: "Title 12",
    id: 12,
  },
];