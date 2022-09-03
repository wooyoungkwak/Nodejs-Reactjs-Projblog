import { useEffect, useState, useRef } from "react";

function TitleSelectorSearch({ options, callback}) {

    const [selectData, setSelectData] = useState("1");
    const inputRef = useRef(null);

    const handleEnter = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = () => {
        callback(selectData, inputRef.current.value);
    };

    function Selecter(id, options, callback, className) {

        const handleSelect = (event) => {
            callback(event.target.value);
        }
    
        function optionList() {
            let tags = [];
    
            for (let i = 0; i < options.length; i++) {
                tags.push(<option key={i} value={i+1}>{options[i]}</option>);
            }
    
            return tags;
        }
    
        return (
            <select onChange={e => handleSelect(e)} className={className} id={id}>
                {optionList()}
            </select>
        );
    }
    
    return (
        <div className="col">
            <label className="form-label float-start" htmlFor="inputGroupSelect01">
                검색
            </label>
            <div className="input-group">
                {Selecter("searchSelectLabel", options, setSelectData, "form-select text-center")}
                <input ref={inputRef} onKeyDown={handleEnter} type="text" className="form-control" style={{ width: "65%" }} />
                <button onClick={handleSearch} className="btn btn-outline-secondary" type="button" id="button-addon2">
                    Search
                </button>
            </div>
        </div>
    );
}

export default TitleSelectorSearch;
