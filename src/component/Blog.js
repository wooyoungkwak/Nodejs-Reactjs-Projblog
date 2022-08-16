import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ListTable from "./Table/ListTable";
import SortSelecter from "./Filter/Sort";
import CategorySelecter from "./Filter/Category";
import Search from "./Search/Search";
import Pagenation from "./Pagenation/Pagenation";

// 테이블 헤더
const tableHeader = ["#", "Title", "Category", "Date"];
function Blog() {
    const navigate = useNavigate();

    // 원본 데이터
    const [data, setData] = useState([]);

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

    useEffect(() => {
        fetch("http://localhost:3001/data")
        .then(res => {
            return res.json();
        })
        .then(res => {
            setData(res);
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <SortSelecter postData={postData} setSortedData={setSortedData} />
                <CategorySelecter postData={postData} setSortedData={setSortedData} />
                <Search data={data} setPostData={setPostData} />
            </div>

            <ListTable header={tableHeader} tablePostData={tablePostData} />

            <div className="row">
                <Pagenation sortedData={sortedData} setTablePostData={setTablePostData} />
                <div className="col">
                    <button onClick={(e) => handleWriteBtn(e)} type="button" className="btn btn-outline-secondary">
                        Write
                    </button>
                </div>
            </div>
            <br></br>
        </div>
    );
}

export default Blog;
