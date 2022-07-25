import { useRef } from 'react';

const usePreviousVal = (val: any) => {
    const prevRef = useRef(val);

    const isChanged = val !== prevRef.current;

    if (!isChanged) {
        return;
    }
    const prevVal = prevRef.current;
    prevRef.current = val;

    return { isChanged, prev: prevVal, new: val };
};

export default usePreviousVal;
