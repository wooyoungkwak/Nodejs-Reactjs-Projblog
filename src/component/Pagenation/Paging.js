import { useEffect, useState, useRef } from "react";

function Paging({ totalSize, pageSize, callback, className }) {

    let totalPage = 0;

    let [currentPageNum, setCurrentPageNum] = useState(1);

    useEffect(() => {
        callback(currentPageNum);
    }, [currentPageNum]);

    useEffect(() => {
    }, [pageSize]);

    const handlePageNumSelect = (event) => {
        let page = Number(event.target.text);
        callback(page);
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


    const renderForNumber = () => {
        const result = [];

        totalPage = totalSize / pageSize;
        let restSize = totalSize % pageSize;

        if (restSize > 0) {
            totalPage = parseInt(totalPage) + 1;
        }

        for (let i = 1; i <= totalPage; i++) {
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

    const renderPagination = () => {

        renderInit();

        return (
            <>
                <li className={currentPageNum === 1 ? "page-item disabled" : "page-item"}>
                    <a className="page-link" href="#" aria-label="Previous" onClick={(e) => handleMovePageNum(e)} id="Previous">
                        <span aria-hidden="true" href="#" id="Previous">
                            &laquo;
                        </span>
                    </a>
                </li>
                {renderForNumber()}
                <li className={currentPageNum === totalPage ? "page-item disabled" : "page-item"}>
                    <a className="page-link" href="#" aria-label="Next" onClick={(e) => handleMovePageNum(e)} id="Next">
                        <span aria-hidden="true" id="Next" href="#">
                            &raquo;
                        </span>
                    </a>
                </li>
            </>
        );
    };

    const renderInit = () => {
        let paginationClass = document.getElementsByClassName("pagination");
        paginationClass.innerHTML = '';
    }

    return (
        <>
            <ul className="pagination">
                {renderPagination()}
            </ul>
        </>
    );
}

export default Paging;
