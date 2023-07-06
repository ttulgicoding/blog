import React,{useRef,useEffect} from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";



const CodeBlock = ({ language, value }) => {

  const codeBlockRef = useRef(null);

  useEffect(() => {
    if (codeBlockRef.current) {
      codeBlockRef.current.childNodes[0].style.fontSize = '20px';
    }
  }, []);


  return (
    <div ref={codeBlockRef}>
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
