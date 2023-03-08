window.onload = () => {

    if (document.documentElement.clientWidth <1439) {
        const { height: pageHeaderHeight } = document
        .querySelector(".header") 
        .getBoundingClientRect ();
        document.body.style.paddingTop=`${pageHeaderHeight}px`;
    }
}
