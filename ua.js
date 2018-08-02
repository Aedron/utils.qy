
// Detecting mobile device
const is = {
    Android() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera() {
        return navigator.userAgent.match(/Opera/i);
    },
    Windows() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    Mobile() {
        return (is.Android() || is.BlackBerry() || is.iOS() || is.Opera() || is.Windows());
    },
};


export {
    is
}
