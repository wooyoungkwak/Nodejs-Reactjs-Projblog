import { useNavigate } from "react-router-dom";

function ListTable({ header, tablePostData }) {
    const navigate = useNavigate();

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

    const handlePostClick = (event, id, data) => {
        navigate(`/blog/post/${id}`, {
            state: {
                index: id,
                currentData: data,
            },
        });
    }

    const createListItem = () => {
        const TdList = [];

        for (let i = 0; i < tablePostData.length; i++) {
            TdList.push(
                <tr key={i} onDoubleClick={(e) => handlePostClick(e, tablePostData[i].id, tablePostData[i])}>
                    <th>{tablePostData[i].id}</th>
                    <td>{tablePostData[i].title}</td>
                    <td>
                        <span>{tablePostData[i].category}</span>
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
