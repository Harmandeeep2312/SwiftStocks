    import { useEffect, useState } from "react";

    export default function useAnimatedNumber(value, duration = 800) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / (duration / 16);

        const animate = () => {
        start += increment;
        if (start < value) {
            setDisplayValue(Math.floor(start));
            requestAnimationFrame(animate);
        } else {
            setDisplayValue(value);
        }
        };

        animate();
    }, [value, duration]);

    return displayValue;
    }
