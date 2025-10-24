import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getElement } from '@scripts/shared/utils/element';

const rootSelector = '[data-js-portfolio]';

class Portfolio {
	#selectors = {
		slider: '[data-js-portfolio-slider]',
		nextButton: '[data-js-portfolio-slider-next]',
		prevButton: '[data-js-portfolio-slider-prev]',
		pagination: '[data-js-portfolio-slider-pagination]',
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
			slidesPerView: 'auto',
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

export class PortfolioCollections {
	constructor() {
		document.querySelectorAll<HTMLElement>(rootSelector).forEach((element) => {
			new Portfolio(element);
		});
	}
}
