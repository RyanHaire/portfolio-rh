import React from "react";
import ReactMarkdown from "react-markdown";

// Define the props interface
interface TutorialProps {
  title: string;
  content: string;
}

const Tutorial: React.FC<TutorialProps> = ({ title, content }) => {
  return (
    <div className="tutorial">
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Tutorial;