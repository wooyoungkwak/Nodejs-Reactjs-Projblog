import Td from "./Blog_Td.js";

function Tr({ postData, sortState }) {
    let sortingDate;

    switch (sortState) {
        case 1:
            sortingDate = postData.sort((a, b) => {
                return a.num - b.num;
            });
            break;
        case 2:
            sortingDate = postData.sort((a, b) => {
                let x = a.title.toLowerCase();
                let y = b.title.toLowerCase();
                
                if(x < y)
                    return -1;
                if(x > y)
                    return 1;
                
                return 0;
            });
            break;
        case 3:
            sortingDate = postData.sort((a, b) => {
                let x = a.date.toLowerCase();
                let y = b.date.toLowerCase();
                
                if(x < y)
                    return -1;
                if(x > y)
                    return 1;
                
                return 0;
            });
            break;
        default:
            break;
    }

    return (
        <tbody>
            {sortingDate.map((item) => {
                return <Td key={item.num} item={item} index={sortingDate.indexOf(item) + 1}/>;
            })}
        </tbody>
    );
}

export default Tr;
