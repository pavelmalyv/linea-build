const rootSelector = '[data-js-header]';

class Header {
	#rootElement: HTMLElement;

	#stateClasses = {
		isFix: 'is-fix',
	};

	constructor(rootElement: HTMLElement) {
		this.#rootElement = rootElement;

		this.#bindEvents();
		this.#handleScroll();
	}

	#bindEvents = () => {
		window.addEventListener('scroll', this.#handleScroll);
	};

	#handleScroll = () => {
		requestAnimationFrame(() => {
			const isFix = window.scrollY > 0;
			this.#rootElement.classList.toggle(this.#stateClasses.isFix, isFix);
		});
	};
}

export class HeaderCollections {
	constructor() {
		document.querySelectorAll<HTMLElement>(rootSelector).forEach((element) => {
			new Header(element);
		});
	}
}
