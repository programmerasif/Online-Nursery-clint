"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { PinContainer } from "./3d-pin";
import { AnimatedPinDemo } from "@/pages/Test";
import img from "../../assets/man.jpg";
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    comment: string;
    name: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  const star = [1, 2, 3, 4, 5];
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 overflow-hidden", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <div className="flex gap-5">
            <PinContainer
              title={<AnimatedPinDemo />}
              href="https://twitter.com/mannupaaji"
              containerClassName="w-full max relative rounded-2xl  flex-shrink-0  px-8"
              key={idx}
            >
              <blockquote className="w-[415px] bg-gradient-to-bl from-[#cee6c6] to-[#e8ebe79d] min-h-[170px] max-h-[170px] px-2 py-1 rounded-md">
                <div className="flex justify-start items-end gap-2 pb-4 pt-2 pe-2">
                  <img src={img} alt="" className="w-16 rounded-full ring-offset-2 ring-2 ring-[#6ABE4C] " />
                  <div className="flex flex-col justify-self-start">
                    <div className="flex justify-start items-center gap-1">
                      {star.map((item) => (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-3 text-orange-500"
                          key={item}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="font-semibold">{item?.name}</span>
                  </div>
                </div>
                <div className="text-gray-700 text-xs">{`" ${item?.comment} "`}</div>
              </blockquote>
            </PinContainer>
          </div>
        ))}
      </ul>
    </div>
  );
};
