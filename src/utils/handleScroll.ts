/* eslint-disable @typescript-eslint/no-unused-expressions */
const scrollHandler = (callback: any) => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
        callback
    } else if (windowBottom === 0) {
        callback
    }
}


export { scrollHandler }