function Selecter({ id, options, callback, className}) {

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

export default Selecter;
