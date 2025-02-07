import React from "react";
import ReactMarkdown from "react-markdown";

// Define the props interface
interface TutorialPostProps {
  title: string;
  content: string;
}

const TutorialPost: React.FC<TutorialPostProps> = ({ title, content }) => {
  return (
    <div className="tutorial">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default TutorialPost;