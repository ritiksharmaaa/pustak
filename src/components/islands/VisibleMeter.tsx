import { useEffect, useState } from 'preact/hooks';

export function VisibleMeter() {
	const [visibleFor, setVisibleFor] = useState(0);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setVisibleFor((value) => value + 1);
		}, 1000);

		return () => window.clearInterval(timer);
	}, []);

	return (
		<div class="island-box">
			<div class="island-stat">
				<span class="island-value">{visibleFor}s</span>
				<span>client:visible only wakes up once the recommended books scroll into view.</span>
			</div>
		</div>
	);
}
