import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function SortSelecter({ postData, setSortedData }) {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);

    const sortSelecter = useRef();
    const orderSelecter = useRef();

    const [sortState, setSort] = useState(1); // 정렬 상태
    const [orderState, setOrder] = useState(1); // 차순 상태

    const handleSortSelect = (event) => {
        navigate(`?sort=${sortState}&order=${queryParams.get("order")}&category=${queryParams.get("category")}&target=${queryParams.get("target")}&keyword=${queryParams.get("keyword")}&num=${queryParams.get("num")}&page=${queryParams.get("page")}`);
        setSort(Number(event.target.value));
    }

    const handleOrderSelect = (event) => {
        navigate(`?sort=${queryParams.get("sort")}&order=${orderState}&category=${queryParams.get("category")}&target=${queryParams.get("target")}&keyword=${queryParams.get("keyword")}&num=${queryParams.get("num")}&page=${queryParams.get("page")}`);
        setOrder(Number(event.target.value));
    };

    useEffect(() => {
        const sortParam = Number(queryParams.get('sort'));
        const orderParam = Number(queryParams.get('order'));

        sortSelecter.current.value = sortParam;
        orderSelecter.current.value = orderParam;

        setSort(sortParam);
        setOrder(orderParam);
    }, []);

    useEffect(() => {
        switch (sortState) {
            case 1:
                if (orderState === 1) {
                    setSortedData((data) =>
                        [...data].sort((a, b) => {
                            return a.num - b.num;
                        })
                    );
                } else {
                    setSortedData((data) =>
                        [...data].sort((a, b) => {
                            return b.num - a.num;
                        })
                    );
                }

                break;
            case 2:
                if (orderState === 1) {
                    setSortedData((data) =>
                        [...data].sort((a, b) => {
                            let x = a.title.toLowerCase();
                            let y = b.title.toLowerCase();

                            if (x < y) return -1;
                            if (x > y) return 1;

                            return 0;
                        })
                    );
                } else {
                    setSortedData((data) =>
                        [...data].sort((a, b) => {
                            let x = a.title.toLowerCase();
                            let y = b.title.toLowerCase();

                            if (x < y) return 1;
                            if (x > y) return -1;

                            return 0;
                        })
                    );
                }

                break;
            case 3:
                if (orderState === 1) {
                    setSortedData((data) =>
                        [...data].sort((a, b) => {
                            let x = a.date.toLowerCase();
                            let y = b.date.toLowerCase();

                            if (x < y) return 1;
                            if (x > y) return -1;

                            return 0;
                        })
                    );
                } else {
                    setSortedData((data) =>
                        [...data].sort((a, b) => {
                            let x = a.date.toLowerCase();
                            let y = b.date.toLowerCase();

                            if (x < y) return -1;
                            if (x > y) return 1;

                            return 0;
                        })
                    );
                }
                break;
            default:
                break;
        }
    }, [sortState, orderState, postData]);

    return (
        <div className="col-3">
            <label className="form-label float-start" htmlFor="inputGroupSelect01">
                정렬
            </label>
            <div className="input-group row">
                <select ref={sortSelecter} onChange={(e) => handleSortSelect(e)} className="form-select text-center" id="inputGroupSelect01">
                    <option value="1">번호</option>
                    <option value="2">제목</option>
                    <option value="3">날짜</option>
                </select>
                <select ref={orderSelecter} onChange={(e) => handleOrderSelect(e)} className="form-select text-center" id="inputGroupSelect02">
                    <option value="1">오름차순</option>
                    <option value="2">내림차순</option>
                </select>
            </div>
        </div>
    );
}

export default SortSelecter;
