import { gsap } from 'gsap';

const rootSelector = '[data-js-animation-slide-up]';

class SlideUp {
	#selectors = {
		item: '[data-js-animation-slide-up-item]',
	};

	#rootElement: HTMLElement;
	#itemsElements: NodeListOf<HTMLElement>;

	constructor(root: HTMLElement) {
		this.#rootElement = root;
		this.#itemsElements = this.#rootElement.querySelectorAll<HTMLElement>(this.#selectors.item);

		this.#initAnimate();
	}

	#initAnimate = () => {
		gsap.to(this.#itemsElements, {
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'power3.out',
		});
	};
}

export class SlideUpCollections {
	constructor() {
		document.querySelectorAll<HTMLElement>(rootSelector).forEach((element) => {
			new SlideUp(element);
		});
	}
}
