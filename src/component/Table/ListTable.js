function ListTable({ header, tablePostData }) {
    const createHeader = () => {
        const result = [];

        for (let i = 0; i < header.length; i++) {
            result.push(
                <th key={i} scope="col">
                    {header[i]}
                </th>
            );
        }

        return result;
    };

    const createListItem = () => {
        const TdList = [];
        let categoryType;

        for (let i = 0; i < tablePostData.length; i++) {
            switch (tablePostData[i].category) {
                case "Javascript":
                    categoryType = "badge rounded-pill bg-warning";
                    break;
                case "HTML":
                    categoryType = "badge rounded-pill bg-danger bg-opacity-75";
                    break;
                case "CSS":
                    categoryType = "badge rounded-pill bg-primary";
                    break;
                default:
                    break;
            }

            TdList.push(
                <tr key={i}>
                    <th>{tablePostData[i].num}</th>
                    <td>{tablePostData[i].title}</td>
                    <td>
                        <span className={categoryType}>{tablePostData[i].category}</span>
                    </td>
                    <td>{tablePostData[i].date}</td>
                </tr>
            );
        }

        return TdList;
    };

    if (tablePostData === undefined) {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <div className="row">
                    <div className="col align-self-center">
                        <h4>게시글이 존재하지 않습니다.</h4>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        );
    }

    return (
        <table className="table">
            <thead>
                <tr>{createHeader()}</tr>
            </thead>
            <tbody>{createListItem()}</tbody>
        </table>
    );
}

export default ListTable;
