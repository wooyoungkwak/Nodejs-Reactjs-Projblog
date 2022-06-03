import { useState, useEffect } from "react";

import Tr from "./Blog_Tr";

function Blog() {
    const date = new Date();
    const nowDate = date.toLocaleDateString("ko-kr");

    const [postData, setPostData] = useState([
        {
            num: 1,
            title: "a",
            category: "Javascript",
            date: nowDate,
        },
        {
            num: 2,
            title: "f",
            category: "HTML",
            date: "2022. 6. 3.",
        },
        {
            num: 3,
            title: "e",
            category: "HTML",
            date: nowDate,
        },
        {
            num: 4,
            title: "c",
            category: "CSS",
            date: nowDate,
        },
        {
            num: 5,
            title: "d",
            category: "Javascript",
            date: nowDate,
        },
        {
            num: 6,
            title: "b",
            category: "Javascript",
            date: nowDate,
        },
    ]);
    const [sortState, setSortState] = useState(1);

    const handleSortSelect = (event) => {
        switch (event.target.value) {
            case "1":
                setSortState(1);
                break;
            case "2":
                setSortState(2);
                break;
            case "3":
                setSortState(3);
                break;
            default:
                setSortState(1);
                break;
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <label className="form-label float-start" htmlFor="inputGroupSelect01">
                        정렬
                    </label>
                    <div className="input-group">
                        <select onChange={(e) => handleSortSelect(e)} className="form-select text-center" id="inputGroupSelect01">
                            <option value="1">기본</option>
                            <option value="2">제목 순</option>
                            <option value="3">오래된 순</option>
                        </select>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <Tr postData={postData} sortState={sortState} />
            </table>
        </div>
    );
}

export default Blog;
