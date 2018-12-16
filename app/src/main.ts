

const bind = () => {

    const radios: HTMLCollection = document.getElementsByClassName('tab-select-radio');
    for (let i: number = 0; i < radios.length; ++ i)
        radios[i].addEventListener('click', (evt: any) =>
            updateTab(evt.target.value));
};

/**
 *
 */
const showStaticHeader = () => {
    staticHeaderVisible = true;
    (document.getElementById('static-header') as HTMLDivElement)
        .classList
        .remove('static-header-hidden');
};

/**
 *
 */
const hideStaticHeader = () => {
    staticHeaderVisible = false;
    (document.getElementById('static-header') as HTMLDivElement)
        .classList
        .add('static-header-hidden');
};

/**
 * Update selected tab
 *
 * @param value
 */
const updateTab = (value: string) => {

    const tabs: HTMLCollection = document.getElementsByClassName('page-tab');
    for (let i: number = 0; i < tabs.length; ++ i)
        tabs[i].classList.add('tab-hidden');

    (document.getElementById('tab-' + value) as HTMLDivElement)
        .classList
        .remove('tab-hidden');
};

/**
 *
 */
let staticHeaderVisible: boolean = false;

/**
 *
 */
const onScroll = () => {

    if (window.scrollY > 160 && ! staticHeaderVisible) {
        showStaticHeader();
    } else if (window.scrollY < 160 && staticHeaderVisible) {
        hideStaticHeader();
    }
};


/**
 *
 */
const init = () => {

    bind();
};


window.onload = init;
window.onscroll = onScroll;
