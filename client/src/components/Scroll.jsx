import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ScrollCard from "./ScrollCard";
import "../assets/scroll.css"; // Import the custom CSS for hiding scrollbar

const Scroll = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://dogapi.dog/api/v2/breeds");
        if (response.data.data) {
          setProducts(response.data.data.slice(0, 12)); // Limit to 12 items
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 2;
    let scrollAmount = 0;

    const scroll = () => {
      if (!isDragging.current) {
        scrollContainer.scrollLeft += scrollSpeed;
        scrollAmount += scrollSpeed;

        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, 50);

    return () => clearInterval(interval);
  }, [products]);

  // Drag & Touch Scrolling
  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current =
      e.pageX || e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    const x = (e.pageX || e.touches[0].pageX) - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Adjust for sensitivity
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto bg-[#a8cc44] whitespace-nowrap px-4 py-6 cursor-grab select-none hide-scrollbar"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <div className="flex space-x-4 w-max">
        {products.map((item) => (
          <ScrollCard key={item.id} title={item.attributes.name} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Scroll);
