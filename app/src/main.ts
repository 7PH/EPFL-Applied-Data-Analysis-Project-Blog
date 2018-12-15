

const bind = () => {

    const radios: HTMLCollection = document.getElementsByClassName('tab-select-radio');
    for (let i: number = 0; i < radios.length; ++ i)
        radios[i].addEventListener('click', (evt: any) =>
            updateTab(evt.target.value));
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
const init = () => {

    bind();
};


window.onload = init;
