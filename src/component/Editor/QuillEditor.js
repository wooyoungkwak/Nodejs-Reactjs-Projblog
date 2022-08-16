import { useState, useEffect } from "react";

import ReactQuill from "react-quill";
// import { useQuill } from 'react-quilljs';

import hljs from "highlight.js";

import "react-quill/dist/quill.snow.css";

import "highlight.js/styles/base16/github.css";

function QuillEditor({ contents, setContents }) {
    hljs.configure({
        languages: ["javascript"],
    });

    const theme = 'snow';
    const placeholder = "여기에 작성하세요..."

    const modules = {
        toolbar: {
            syntax: true,
            align: "left",
            container: [[{ header: [1, 2, 3, false] }], [{ align: [] }], ["bold", "italic", "underline", "strike"], [{ list: "ordered" }, { list: "bullet" }, "link"]],
        },
    };

    return (
        <div>
            <ReactQuill value={contents} placeholder={placeholder} theme={theme} modules={modules} onChange={(e) => setContents(e)} />
        </div>
    );
}

export default QuillEditor;
