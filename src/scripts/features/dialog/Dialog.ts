import { getElement } from '@scripts/shared/utils/element';
import SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.js';

const rootButtonSelector = '[data-js-open-dialog-id]';

class Dialog {
	#selectors = {
		closeButton: '[data-js-close-current-dialog]',
	};

	#attributes = {
		rootButton: 'data-js-open-dialog-id',
	};

	#rootElement: HTMLElement;
	#dialogElement: SlDialog;
	#closeButtonsElements: NodeListOf<HTMLElement>;

	constructor(rootElement: HTMLElement) {
		this.#rootElement = rootElement;
		const dialogId = rootElement.getAttribute(this.#attributes.rootButton);
		this.#dialogElement = getElement<SlDialog>(`sl-dialog[id='${dialogId}']`);
		this.#closeButtonsElements = this.#dialogElement.querySelectorAll(this.#selectors.closeButton);
		this.#bindEvents();
	}

	#bindEvents = () => {
		this.#rootElement.addEventListener('click', this.#handleOpenButton);

		this.#closeButtonsElements.forEach((element) => {
			element.addEventListener('click', this.#handleCloseButton);
		});
	};

	#handleOpenButton = () => {
		this.#dialogElement.show();
	};

	#handleCloseButton = () => {
		this.#dialogElement.hide();
	};
}

export class DialogCollections {
	constructor() {
		document.querySelectorAll<HTMLElement>(rootButtonSelector).forEach((element) => {
			new Dialog(element);
		});
	}
}
