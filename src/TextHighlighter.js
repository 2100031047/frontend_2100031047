import React from 'react';
import './TextHighlighter.css';

const TextHighlighter = ({ text }) => {
    const highlightLongWords = (text) => {
        const words = text.split(/(\s+)/);
        return words.map((word, index) => {
            if (word.length > 8) {
                return <span key={index} className="highlight">{word}</span>;
            }
            return word;
        });
    };

    return (
        <div className="text-container">
            {highlightLongWords(text)}
        </div>
    );
};

export default TextHighlighter;
