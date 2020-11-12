import React from "react";

export default function useForceRerender() {
    const [, forceRerender] = React.useReducer(c => c + 1, 0);
    return forceRerender;
}