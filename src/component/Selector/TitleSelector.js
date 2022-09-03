function TitleSelecter({ title, id, options, callback}) {
    return (
        <div className="col-2">
            <label className="form-label float-start" htmlFor={id}>
                {title}
            </label>
            <div className="input-group row">
                {Selecter(id, options, callback, "form-select text-center")}
            </div>
        </div>
    );
}

function DualTitleSelecter({ title, berforeId, afterId, beforeOptions, afterOptions, beforeCallback, afterCallback }) {
    return (
        <div className="col-3">
            <label className="form-label float-start" htmlFor={berforeId}>
                {title}
            </label>
            <div className="input-group row">
                {Selecter(berforeId, beforeOptions, beforeCallback, "form-select text-center")}
                {Selecter(afterId, afterOptions, beforeCallback, "form-select text-center")}
            </div>
        </div>
    );
}

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

export {TitleSelecter, DualTitleSelecter};
