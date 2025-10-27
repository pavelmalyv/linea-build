import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

const rootSelector = '[data-js-animation-words-up]';

class WordsUp {
	#rootElement: HTMLElement;

	constructor(root: HTMLElement) {
		this.#rootElement = root;

		this.#initAnimate();
	}

	#initAnimate = () => {
		SplitText.create(this.#rootElement, {
			type: 'lines words',
			linesClass: 'words-up',
			wordsClass: 'words-up__word',
			autoSplit: true,
			tag: 'span',
			onSplit: (self) => {
				return gsap.from(self.words, {
					scrollTrigger: {
						trigger: this.#rootElement,
						start: 'top 80%',
						toggleActions: 'play none none reverse',
					},
					ease: 'power2.inOut',
					duration: 0.5,
					yPercent: 115,
					stagger: 0.1,
				});
			},
		});
	};
}

export class WordsUpCollections {
	constructor() {
		document.querySelectorAll<HTMLElement>(rootSelector).forEach((element) => {
			new WordsUp(element);
		});
	}
}
