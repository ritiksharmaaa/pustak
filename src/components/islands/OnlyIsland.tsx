import { useState } from 'preact/hooks';

export function OnlyIsland() {
	const [pressed, setPressed] = useState(false);

	return (
		<div class="island-box">
			<button class="island-button" type="button" onClick={() => setPressed((value) => !value)}>
				{pressed ? 'Book saved on the client' : 'Quick add to reading list'}
			</button>
			<p class="directive-note" style="margin-top: 12px;">
				This component is rendered only by Preact on the client, so it is a browser-only helper for
				a fast save flow.
			</p>
		</div>
	);
}
