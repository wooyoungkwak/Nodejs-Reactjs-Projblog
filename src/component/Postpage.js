import { event } from "jquery";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import PostEdit from "./PostEdit";
import PostView from "./PostView";

function PostPage() {
    const state = useLocation().state;
    const navigate = useNavigate();

    // 제목
    const [title, setTitle] = useState(state.currentData === undefined ? "" : state.currentData.title);
    // 카테고리
    const [category, setCategory] = useState("HTML");
    // 내용
    const [contents, setContents] = useState(state.currentData === undefined ? "" : state.currentData.contents);

    // 포스트 페이지의 모드(편집, 보기)
    const [mode, setMode] = useState(state.currentData === undefined ? "edit" : "view");
 
    if (mode === "edit") {
        return <PostEdit state={state} navigate={navigate} setMode={setMode} title={title} category={category} contents={contents} setTitle={setTitle} setCategory={setCategory} setContents={setContents} />
    } else {
        return <PostView navigate={navigate} setMode={setMode} index={state.index} title={title} quillText={contents} />
    }
}

export default PostPage;
