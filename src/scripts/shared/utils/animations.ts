import { gsap } from 'gsap';

export const animateReduceMotion = (callback: (isReduceMotion: boolean) => void) => {
	const matchMedia = gsap.matchMedia();
	matchMedia.add(
		{
			prefersMotion: '(prefers-reduced-motion: no-preference)',
			reduceMotion: '(prefers-reduced-motion: reduce)',
		},
		(context) => {
			const isReduceMotion = context.conditions?.reduceMotion ?? false;

			callback(isReduceMotion);
		},
	);
};
