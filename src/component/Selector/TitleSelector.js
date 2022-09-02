import Selecter from "./Selector";

function TitleSelecter({ title, id, options, callback}) {
    return (
        <div className="col-2">
            <label className="form-label float-start" htmlFor={id}>
                {title}
            </label>
            <div className="input-group row">
                <Selecter title={title} id={id} options={options} callback={callback} className={"form-select text-center"}/>
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
                <Selecter title={title} id={berforeId} options={beforeOptions} callback={beforeCallback} className={"form-select text-center"}/>
                <Selecter title={title} id={afterId} options={afterOptions} callback={afterCallback} className={"form-select text-center"}/>
            </div>
        </div>
    );
}

export {TitleSelecter, DualTitleSelecter};
