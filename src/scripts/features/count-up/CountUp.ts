import { SCROLL_TRIGGER_BASE } from '@scripts/shared/config';
import { animateReduceMotion } from '@scripts/shared/utils';
import { CountUp as CountUpJS } from 'countup.js';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const rootSelector = '[data-js-animation-count-up]';

class CountUp {
	#selectors = {
		item: '[data-js-animation-count-up-item]',
	};

	#rootElement: HTMLElement;
	#itemsElements: NodeListOf<HTMLElement>;
	#countUps: CountUpJS[] = [];

	constructor(root: HTMLElement) {
		this.#rootElement = root;
		this.#itemsElements = this.#rootElement.querySelectorAll<HTMLElement>(this.#selectors.item);

		this.#initCountUps();
	}

	#initCountUps = () => {
		animateReduceMotion((isReduceMotion) => {
			if (isReduceMotion) return false;

			this.#itemsElements.forEach((element) => {
				const countUpJs = new CountUpJS(element, null, {
					duration: 3,
				});

				this.#countUps.push(countUpJs);
			});

			this.#initAnimate();
		});
	};

	#initAnimate = () => {
		ScrollTrigger.create({
			...SCROLL_TRIGGER_BASE,
			trigger: this.#rootElement,
			onEnter: () => this.#startAll(),
		});
	};

	#startAll = () => {
		this.#countUps.forEach((countUpJs) => {
			countUpJs.start();
		});
	};
}

export class CountUpCollections {
	constructor() {
		document.querySelectorAll<HTMLElement>(rootSelector).forEach((element) => {
			new CountUp(element);
		});
	}
}
