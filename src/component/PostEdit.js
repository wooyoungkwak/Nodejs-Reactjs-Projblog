import QuillEditor from "./Editor/QuillEditor";

import { useState, useEffect } from "react";


function PostEdit({ state, navigate, setMode, title, category, contents, setTitle, setCategory, setContents }) {
    useEffect(() => {
        if (state.currentData !== undefined) {
            setTitle(state.currentData.title);
            setCategory(state.currentData.category);
            setContents(state.currentData.contents);
        }
    }, []);

    const handleCategory = (event) => {
        switch (event.target.value) {
            case "1":
                setCategory("HTML");
                break;
            case "2":
                setCategory("CSS");
                break;
            case "3":
                setCategory("Javascript");
                break;
            default:
                break;
        }
    };

    const handleCancelBtn = (event) => {
        if (state.currentData === undefined) {
            navigate(-1);
        } else {
            setMode("view");
        }
    };

    const handlePostBtn = (event) => {
        const date = new Date();
        const data = {
            title: title,
            category: category,
            date: date.toLocaleDateString("ko-kr"),
            contents: contents,
        };

        if (state.currentData === undefined) {
            fetch("http://localhost:3001/data", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).catch((err) => console.error("Error : ", err));
            navigate(-1);
        } else {
            fetch(`http://localhost:3001/data/${state.index}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
                .then(setMode("view"))
                .catch((err) => console.error("Error : ", err));
        }
    };

    function onChange(newValue) {
        console.log("change", newValue);
      }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <div className="input-group input-group-lg mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-lg" style={{ width: "10%" }}>
                            Title
                        </span>
                        <input value={title} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                <div className="col-2">
                    <select className="form-select form-select-lg mb-3 text-center" aria-label=".form-select-lg example" onChange={(e) => handleCategory(e)}>
                        <option value="1">HTML</option>
                        <option value="2">CSS</option>
                        <option value="3">Javascript</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <QuillEditor contents={contents} setContents={setContents} />
                </div>
            </div>
            <br></br>
            <div className="row">
                <div align="right">
                    <button type="button" className="btn btn-outline-secondary col-1 align-self-end" onClick={(e) => handlePostBtn(e)}>
                        Post
                    </button>
                    <a> </a>
                    <button type="button" className="btn btn-outline-secondary col-1 align-self-end" onClick={(e) => handleCancelBtn(e)}>
                        Cancel
                    </button>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default PostEdit;
