function PostView({navigate, setMode, index, title, quillText}) {
    const handleEditBtn = (event) => {
        setMode("edit");
    };

    const handleDeleteBtn = (event) => {
        fetch(`http://localhost:3001/data/${index}`, { method: "DELETE", headers: { "Content-Type": "application/json" }}).catch((err) => console.error("Error : ", err));
        navigate(-1);
    };

    return (
        <div className="container">
            <table className="table">
                <thead className="text-right">
                    <tr>
                        <td>
                            <h1 className="ql-editor">{title}</h1>
                        </td>
                        <td align="right">
                            <button onClick={(e) => handleEditBtn(e)} type="button" className="btn btn-outline-secondary align-self-end btn-sm">
                                Edit
                            </button>
                            <a> </a>
                            <button onClick={(e) => handleDeleteBtn(e)} type="button" className="btn btn-outline-danger align-self-end btn-sm">
                                Delete
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: quillText }}></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PostView;