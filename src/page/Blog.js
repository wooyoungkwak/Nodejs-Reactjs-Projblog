import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ListTable from "../component/Table/ListTable";
import Paging from "../component/Pagenation/Paging";
import { TitleSelecter, DualTitleSelecter } from "../component/Selector/TitleSelector";
import Selecter from "../component/Selector/Selector";
import Button from "../component/Button/Button";

import SortSelecter from "../component/Selector/Sort";
import CategorySelecter from "../component/Selector/Category";
import Search from "../component/Search/Search";
import Pagenation from "../component/Pagenation/Pagenation";

// import { Button } from "bootstrap";

// 테이블 헤더
const tableHeader = ["#", "Title", "Category", "Date"];

function Blog() {
    const navigate = useNavigate();

    // 원본 데이터
    const [data, setData] = useState([]);

    const [pageSize, setPageSize] = useState(1);

    // Search가 수정
    const [postData, setPostData] = useState(data); // 게시글 데이터
    // Sort와 Category가 수정
    const [sortedData, setSortedData] = useState(data); // 정렬/필터링 된 게시글 데이터
    // Pagenation이 수정
    const [tablePostData, setTablePostData] = useState([]); // 리스트테이블에 표시될 현재 페이지의 게시글 데이터

    const handleWriteBtn = (event) => {
        navigate(`/blog/post/${data.length + 1}`, {
            state: {
                index: data.length + 1,
                currentData: data[data.length],
            },
        });
    };

    // useEffect(() => {
    //     fetch("http://localhost:3001/data")
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(res => {
    //             setData(res);
    //         })
    // }, []);

    var sortOptions = [
        "번호", "제목", "날짜"
    ];

    var categoryOptions = [
        "모두", "JAVA", "JSP", "JAVASCRIPT", "HTML"
    ];

    var orderOptions = [
        "오름차순", "내림차순"
    ];

    var sizeOptions = [
        "10", "20", "30"
    ];

    function sample(data) {
        console.log(data);
    }

    return (
        <div className="container">
            <div className="row">
                <DualTitleSelecter title={"정렬"} berforeId={"beforeSelector"} afterId={"afterSelector"} beforeOptions={sortOptions} afterOptions={orderOptions} beforeCallback={setSortedData} afterCallback={setSortedData} />
                <TitleSelecter title={"카테고리"} id={"catergorySelector"} options={categoryOptions} callback={setSortedData} />
            </div>

            <ListTable header={tableHeader} tablePostData={tablePostData} />

            <div className="row">
                <div className="col-1">
                    <Selecter id={"rowNumber"} options={sizeOptions} callback={setPageSize} className={"form-select text-center"} />
                </div>
                <div className="col-10">
                    <Paging totalSize={45} pageSize={pageSize*10} callback={sample} />
                </div>
                <div className="col">
                    <Button btnName={"write"} callback={handleWriteBtn} className={"btn btn-outline-secondary"} />
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Blog;
