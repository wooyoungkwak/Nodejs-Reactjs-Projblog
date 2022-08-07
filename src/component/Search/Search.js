import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Search({ data, setPostData }) {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);

    const targetSelecter = useRef();
    const keywordInput = useRef();

    const [target, setTarget] = useState("1");
    const [keyword, setKeyword] = useState("");

    const [tmpTarget, setTmpTarget] = useState("1");
    const [tmpKeyword, setTmpKeyword] = useState("");

    useEffect(() => {
        const targetParam = queryParams.get("target");
        const keywordParam = queryParams.get("keyword");

        targetSelecter.current.value = targetParam;

        if (keywordParam === " ") {
            keywordInput.current.value = null;
        } else {
            keywordInput.current.value = keywordParam;
        }

        setTmpTarget(targetParam);
        setTmpKeyword(keywordParam);

        setTarget(targetParam);
        setKeyword(keywordParam);
    }, []);

    useEffect(() => {
        console.log('target : ', target);
        console.log("keyword", keyword);

        switch (target) {
            case "1":
                setPostData([...data].filter((post) => post.title.includes(keyword)));
                break;
            case "2":
                setPostData([...data].filter((post) => post.contents.includes(keyword)));
                break;
            case "3":
                setPostData([...data].filter((post) => post.num === Number(keyword)));
                break;
            case "4":
                setPostData([...data].filter((post) => post.title.includes(keyword) || post.contents.includes(keyword)));
                break;
            default:
                break;
        }
    }, [target, keyword]);

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleTargetSelct = (event) => {
        setTmpTarget(event.target.value);
    };

    const handleKeyword = (event) => {
        setTmpKeyword(event.target.value);
    };

    const handleSearch = () => {
        navigate(`?sort=${queryParams.get("sort")}&order=${queryParams.get("order")}&category=${queryParams.get("category")}&target=${tmpTarget}&keyword=${tmpKeyword}&num=${queryParams.get("num")}&page=${queryParams.get("page")}`);
        setTarget(tmpTarget);
        setKeyword(tmpKeyword);
    };

    return (
        <div className="col-7">
            <label className="form-label float-start" htmlFor="inputGroupSelect01">
                검색
            </label>
            <div className="input-group">
                <select ref={targetSelecter} onChange={(e) => handleTargetSelct(e)} className="form-select text-center" id="searchSelectLabel">
                    <option value="1">제목</option>
                    <option value="2">내용</option>
                    <option value="3">번호</option>
                    <option value="4">제목+내용</option>
                </select>
                <input ref={keywordInput} onKeyDown={handleEnter} onChange={handleKeyword} type="text" className="form-control" style={{ width: "65%" }} />
                <button onClick={handleSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">
                    Search
                </button>
            </div>
        </div>
    );
}

export default Search;
