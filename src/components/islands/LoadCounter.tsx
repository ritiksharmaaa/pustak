import { useState } from 'preact/hooks';

export function LoadCounter() {
	const [count, setCount] = useState(0);

	return (
		<div class="island-box">
			<div class="island-row">
				<button class="island-button" type="button" onClick={() => setCount((value) => value + 1)}>
					Save to Want to Read
				</button>
				<div class="island-stat">
					<span class="island-value">{count}</span>
					<span>client:load makes this save button ready right after the page loads.</span>
				</div>
			</div>
		</div>
	);
}
