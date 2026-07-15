import { useEffect, useState } from 'preact/hooks';

export function IdleTicker() {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setSeconds((value) => value + 1);
		}, 1000);

		return () => window.clearInterval(timer);
	}, []);

	return (
		<div class="island-box">
			<div class="island-stat">
				<span class="island-value">{seconds}s</span>
				<span>client:idle waits until the browser is free before hydrating the reading timer.</span>
			</div>
		</div>
	);
}
