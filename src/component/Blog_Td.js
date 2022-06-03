let categoryType;
function Td({ item, index }) {
    switch (item.category) {
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

    return (
        <>
            <tr>
                <th>{index}</th>
                <td>{item.title}</td>
                <td>
                    <span className={categoryType}>{item.category}</span>
                </td>
                <td>{item.date}</td>
            </tr>
        </>
    );
}

export default Td;
