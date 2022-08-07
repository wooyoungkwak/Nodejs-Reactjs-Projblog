import { useState } from "react";
import { useLocation } from "react-router-dom";

function PostPage() {
    const state = useLocation().state;
    const [mode, setMode] = useState(state.currentData === undefined ? "edit" : "view");

    // const [editorState, setEditorState] = useState(EditorState.createEmpty());

    return (
        <div className="container">
            <div className="row">
                <div className="col-10">
                    <div className="input-group input-group-lg mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-lg" style={{ width: "10%" }}>
                            Title
                        </span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                </div>
                <div className="col-2">
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                        <option selected>Category</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                
            </div>
            <div className="row"></div>
            <br></br>
        </div>
    );
}

export default PostPage;
