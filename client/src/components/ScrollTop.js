import React, { useState } from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function BackToTopButton() {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", checkScrollTop);

    return (
        <div >
            <p className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}>
                <KeyboardArrowUpIcon />
                BACK TO TOP
                <KeyboardArrowUpIcon />
            </p>
        </div>
    )
}

export default BackToTopButton;
