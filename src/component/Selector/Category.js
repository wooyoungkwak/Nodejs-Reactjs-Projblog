import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import { useState, useEffect, useRef } from 'react';

function CategorySelecter({ postData , setSortedData }) {
    const location = useLocation();
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(location.search);
    
    const selecter = useRef();
    const [category, setCategory] = useState(1);

    useEffect(() => {
        const qParam = Number(queryParams.get('category'));
        selecter.current.value = qParam;
        setCategory(qParam);
    }, []);

    useEffect(() => {
        switch (category) {
            case 1:
                setSortedData([...postData]);
                break;
            case 2:
                setSortedData(
                    [...postData].filter(post => post.category === 'HTML')
                );
                break;
            case 3:
                setSortedData(
                    [...postData].filter(post => post.category === 'CSS')
                );
                break;
            case 4:
                setSortedData(
                    [...postData].filter(post => post.category === 'Javascript')
                );
                break;
            default:
                setSortedData([...postData]);
                break;
        }
    }, [category, postData]);

    const handleCategorySelect = (event) => {
        navigate(`?sort=${queryParams.get("sort")}&order=${queryParams.get("order")}&category=${event.target.value}&target=${queryParams.get("target")}&keyword=${queryParams.get("keyword")}&num=${queryParams.get("num")}&page=${queryParams.get("page")}`);
        setCategory(Number(event.target.value));
    }

    return (
        <div className="col-2">
            <label className="form-label float-start" htmlFor="inputGroupSelect01">
                카테고리
            </label>
            <div className="input-group row">
                <select ref={selecter} onChange={e => handleCategorySelect(e)} className="form-select text-center" id="inputGroupSelect02">
                    <option value="1">모두</option>
                    <option value="2">HTML</option>
                    <option value="3">CSS</option>
                    <option value="4">Javascript</option>
                </select>
            </div>
        </div>
    );
}

export default CategorySelecter;
