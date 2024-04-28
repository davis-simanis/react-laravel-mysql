import { createElement } from "react";

export default function Row(props) {
    const { data = [], celltype = "td" } = props;

    return (
        <tr className="Row">
            {data.map((value, key) =>
                createElement(celltype, { className: "Row-Cell", key }, value)
            )}
        </tr>
    );
}
