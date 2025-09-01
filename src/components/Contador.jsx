import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)

    return (
    <button
            onClick={() => setCount(count + 1)}
            style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px",
            }}
        >
            Haz click: {count}
        </button>
    );

}

export default Counter;