"use client"
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Blog = () => {
    const [markdownContent, setMarkdownContent] = useState<string>('');

    useEffect(() => {
        const fetchMarkdown = async () => {
            const response = await fetch('https://raw.githubusercontent.com/killsime/my-blog/main/README.md');
            const text = await response.text();
            setMarkdownContent(text);
        };

        fetchMarkdown();
    }, []);

    return (
        <div className="prose lg:prose-xl">
            <h1>这是博客页面</h1>
            <ReactMarkdown
                children={markdownContent}
                components={{
                    code({ node, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return match ? (
                            <SyntaxHighlighter
                                style={dracula}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            />
        </div>
    );
};

export default Blog;