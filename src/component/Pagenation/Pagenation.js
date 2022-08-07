// import PageNumSelect from "./Blog_PageNumSelect.js";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Pagenation({ sortedData, setTablePostData }) {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);

    const division = (arr, n) => {
        const length = arr.length;
        const divide = Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0);
        const tmpArray = [...arr];
        const newArray = [];

        for (let i = 0; i <= divide; i++) {
            newArray.push(tmpArray.splice(0, n));
        }
        newArray.pop();

        return newArray;
    };

    const postNumSelecter = useRef();

    // 리스트테이블에 표시될 게시글의 개수
    const [postNum, setPostNum] = useState(10);
    const [currentPageNum, setCurrentPageNum] = useState(1);

    // 리스트테이블에 표시될 현재 페이지의 게시글 데이터
    const [pagePostData, setPagePostData] = useState(division(sortedData, postNum));

    useEffect(() => {
        const page = Number(queryParams.get("page"));
        const num = Number(queryParams.get("num"));

        postNumSelecter.current.value = num;

        setPostNum(num);
        setCurrentPageNum(page);
    }, []);

    useEffect(() => {
        setPagePostData(division(sortedData, postNum));
    }, [postNum, sortedData]);

    useEffect(() => {
        setTablePostData(pagePostData[currentPageNum - 1]);
    }, [currentPageNum, pagePostData]);

    const handlePostNumSelect = (event) => {
        const num = Number(event.target.value);

        navigate(`?sort=${queryParams.get("sort")}&order=${queryParams.get("order")}&category=${queryParams.get("category")}&target=${queryParams.get("target")}&keyword=${queryParams.get("keyword")}&num=${num}&page=${queryParams.get("page")}`);
        setPostNum(num);
        setCurrentPageNum(1);
    };

    const handlePageNumSelect = (event) => {
        const page = Number(event.target.text);

        navigate(`?sort=${queryParams.get("sort")}&order=${queryParams.get("order")}&category=${queryParams.get("category")}&target=${queryParams.get("target")}&keyword=${queryParams.get("keyword")}&num=${queryParams.get("num")}&page=${page}`);
        setCurrentPageNum(page);
    };

    const handleMovePageNum = (event) => {
        switch (event.target.id) {
            case "Next":
                setCurrentPageNum((prev) => prev + 1);
                break;
            case "Previous":
                setCurrentPageNum((prev) => prev - 1);
                break;
        }
    };

    const renderNumber = () => {
        const result = [];
        let firstNum;
        let lastNum;

        if (pagePostData.length > 4) {
            if (currentPageNum <= 3) {
                firstNum = 1;
                lastNum = pagePostData.length < 5 ? pagePostData.length : 5;
            } else if (currentPageNum >= pagePostData.length - 2) {
                firstNum = pagePostData.length - 4;
                lastNum = pagePostData.length;
            } else {
                firstNum = currentPageNum - 2;
                lastNum = currentPageNum + 2;
            }
        } else {
            firstNum = 1;
            lastNum = pagePostData.length;
        }

        for (let i = firstNum; i <= lastNum; i++) {
            result.push(
                <li key={i} className={i === currentPageNum ? "page-item active" : "page-item"}>
                    <a className="page-link" onClick={(e) => handlePageNumSelect(e)}>
                        {i}
                    </a>
                </li>
            );
        }

        return result;
    };

    return (
        <>
        <div className="col-1">
                <select ref={postNumSelecter} onChange={(e) => handlePostNumSelect(e)} className="form-select text-center">
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
            </div>
            <div className="col-10">
                <ul className="pagination">
                    <li className={currentPageNum === 1 ? "page-item disabled" : "page-item"}>
                        <a className="page-link" href="#" aria-label="Previous" onClick={(e) => handleMovePageNum(e)} id="Previous">
                            <span aria-hidden="true" href="#" id="Previous">
                                &laquo;
                            </span>
                        </a>
                    </li>
                    {renderNumber()}
                    <li className={currentPageNum === pagePostData.length ? "page-item disabled" : "page-item"}>
                        <a className="page-link" href="#" aria-label="Next" onClick={(e) => handleMovePageNum(e)} id="Next">
                            <span aria-hidden="true" id="Next" href="#">
                                &raquo;
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
            
    );
}

export default Pagenation;
