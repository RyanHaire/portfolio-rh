import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from 'rehype-external-links'
import { useNavigate } from "react-router-dom";

// Define the props interface
interface TutorialPostProps {
  title?: string;
  content: string;
}

const TutorialPost: React.FC<TutorialPostProps> = ({ title, content }) => {
  const navigate = useNavigate()

  return (
    <div className="tutorial prose prose-lg">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>
      {title && <h1>{title}</h1>}
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}]]} className="prose">{content}</ReactMarkdown>
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>    
    </div>
  );
};

export default TutorialPost;