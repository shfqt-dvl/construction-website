
import { useLayoutEffect } from "react";
import {
    useLocation,
    useNavigationType,
} from "react-router-dom";

const scrollPositions = new Map();

function ScrollToTop() {
    const location = useLocation();
    const navigationType = useNavigationType();

    const { pathname, hash, key } = location;

    useLayoutEffect(() => {
        // Save the previous page position before DOM changes
        const savePosition = () => {
            scrollPositions.set(key, window.scrollY);
        };

        window.addEventListener("scroll", savePosition, {
            passive: true,
        });

        // Restore or reset scroll position
        if (hash) {
            const target = document.getElementById(hash.slice(1));

            if (target) {
                target.scrollIntoView({
                    behavior: "instant",
                    block: "start",
                });
            }
        } else if (navigationType === "POP") {
            const previousPosition = scrollPositions.get(key) ?? 0;

            window.scrollTo({
                top: previousPosition,
                behavior: "instant",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "instant",
            });
        }

        return () => {
            // Runs before the previous route's DOM is removed
            savePosition();

            window.removeEventListener("scroll", savePosition);
        };
    }, [pathname, hash, key, navigationType]);

    return null;
}

export default ScrollToTop;