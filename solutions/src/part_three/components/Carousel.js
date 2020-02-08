export default class Carousel {
    constructor(element) {
        this.element = element;
        this.currentIndex = 1;
        this.leftBtn = this.element.querySelector('.left-button');
        this.rightBtn = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('.imageContainer');
        this.images.forEach(container => container.style.display = 'none');
        this.images[this.currentIndex - 1].style.display = 'block';
        this.leftBtn.addEventListener('click', () => this.leftSelect());
        this.rightBtn.addEventListener('click', () => this.rightSelect());

    }
    rightSelect() {
        if (this.currentIndex < this.images.length) {
            this.currentIndex += 1;
        } else {
            this.currentIndex = 1;
        }
        this.images.forEach(container => container.style.display = 'none');
        this.images[this.currentIndex - 1].style.display = 'block';
    }
    leftSelect() {
        if (this.currentIndex == 1) {
            this.currentIndex = this.images.length;
        } else {
            this.currentIndex -= 1;
        }
        this.images.forEach(container => container.style.display = 'none');
        this.images[this.currentIndex - 1].style.display = 'block';
    }
}