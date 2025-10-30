import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getElement } from '@scripts/shared/utils';

const rootSelector = '[data-js-reviews]';

class Reviews {
	#selectors = {
		slider: '[data-js-reviews-slider]',
		nextButton: '[data-js-reviews-slider-next]',
		prevButton: '[data-js-reviews-slider-prev]',
		pagination: '[data-js-reviews-slider-pagination]',
	};

	#rootElement: HTMLElement;
	#sliderElement: HTMLElement;
	#nextButtonElement: HTMLButtonElement;
	#prevButtonElement: HTMLButtonElement;
	#paginationElement: HTMLButtonElement;

	constructor(root: HTMLElement) {
		this.#rootElement = root;
		this.#sliderElement = getElement(this.#selectors.slider, this.#rootElement);
		this.#nextButtonElement = getElement(this.#selectors.nextButton, this.#rootElement);
		this.#prevButtonElement = getElement(this.#selectors.prevButton, this.#rootElement);
		this.#paginationElement = getElement(this.#selectors.pagination, this.#rootElement);

		this.#initSlider();
	}

	#initSlider = () => {
		new Swiper(this.#sliderElement, {
			navigation: {
				nextEl: this.#nextButtonElement,
				prevEl: this.#prevButtonElement,
			},
			pagination: {
				enabled: true,
				el: this.#paginationElement,
				bulletClass: 'pagination-bullets__bullet',
				bulletActiveClass: 'pagination-bullets__bullet_action',
			},
			modules: [Navigation, Pagination],
		});
	};
}

export class ReviewsCollections {
	constructor() {
		document.querySelectorAll<HTMLElement>(rootSelector).forEach((element) => {
			new Reviews(element);
		});
	}
}
