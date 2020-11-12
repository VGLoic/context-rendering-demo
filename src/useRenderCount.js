import React from "react";

export default function useRenderCount() {
    const renderCountRef = React.useRef(1);

    React.useEffect(() => {
        renderCountRef.current += 1;
    })

    return renderCountRef;
}