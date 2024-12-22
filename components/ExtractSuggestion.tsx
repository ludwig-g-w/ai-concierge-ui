import React from "react";
import { motion } from "framer-motion";
import { SuggestionItem } from "@/components/SuggestionItem";
import { Suggestion } from "@/types";

interface ExtractSuggestionProps {
  suggestions: Suggestion[];
}

export const ExtractSuggestion: React.FC<ExtractSuggestionProps> = ({
  suggestions,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      setCurrentIndex((prev) => (prev + 1) % suggestions.length);
    } else {
      setCurrentIndex((prev) =>
        prev === 0 ? suggestions.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="relative h-[300px]">
      {suggestions.map((suggestion: Suggestion, index: number) => {
        const adjustedIndex =
          (index - currentIndex + suggestions.length) % suggestions.length;

        return (
          <motion.div
            key={index}
            className="absolute w-full"
            style={{
              zIndex: suggestions.length - adjustedIndex,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: adjustedIndex * 10,
              scale: 1 - adjustedIndex * 0.05,
              opacity: adjustedIndex === 0 ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
            drag={adjustedIndex === 0 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <SuggestionItem
              title={suggestion.title}
              description={suggestion.description}
              location={suggestion.location}
              url={suggestion.url}
              time={suggestion.time}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
