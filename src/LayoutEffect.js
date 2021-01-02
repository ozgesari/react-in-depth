import React, { useState, useLayoutEffect, useRef} from  "react";

const LayoutEffectComponent = () => {
    const [width, setWith] = useState(0);
    const [height, setHeight] = useState(0);
    const el = useRef();

    useLayoutEffect(() => {
        setWith(el.current.clientWidth);
        setHeight(el.current.clientHeight);
    });

    return (
        <div>
            <h1>useLayoutEffect Example</h1>
            <h2>textarea width: {width}px</h2>
            <h2>textarea height: {height}px</h2>
            <textarea 
            onClick={() => {
                setWith(0);
            }}
            ref={el}
            />
        </div>
    )
}

export default LayoutEffectComponent;