export default class popUpImage {
    constructor(container) {
        this.container = container;
    }
    open() {
        this.container.closest('.popup-image').classList.add('popup_is-opened');
    }
    close() {
        this.container.closest('.popup-image').classList.remove('popup_is-opened');
    }
}