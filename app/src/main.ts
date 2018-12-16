
const STATIC_HEADER_THRESHOLD: number = 400;

const pageControlsDiv = document.getElementById('page-tab-controls') as HTMLDivElement;
const staticHeaderDiv = document.getElementById('static-header') as HTMLDivElement;
const pageBody = document.getElementById('page-body') as HTMLDivElement;
const pageTabs = document.getElementById('page-tabs') as HTMLDivElement;

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

    staticHeaderDiv
        .classList
        .remove('static-header-hidden');

    staticHeaderDiv.appendChild(pageControlsDiv);
};

/**
 *
 */
const hideStaticHeader = () => {

    staticHeaderVisible = false;

    staticHeaderDiv
        .classList
        .add('static-header-hidden');

    pageBody.insertBefore(pageControlsDiv, pageTabs);
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

    if (window.scrollY > STATIC_HEADER_THRESHOLD && ! staticHeaderVisible) {
        showStaticHeader();
    } else if (window.scrollY < STATIC_HEADER_THRESHOLD && staticHeaderVisible) {
        hideStaticHeader();
    }
};


/**
 *
 */
const init = () => {

    bind();

    updateTab('0');
};


window.onload = init;
window.onscroll = onScroll;
