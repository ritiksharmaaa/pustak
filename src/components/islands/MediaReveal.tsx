import { useState } from 'preact/hooks';

export function MediaReveal() {
	const [enabled, setEnabled] = useState(false);

	return (
		<div class="island-box">
			<label class="island-switch">
				<input type="checkbox" checked={enabled} onChange={() => setEnabled((value) => !value)} />
				Use the desktop reading shelf
			</label>
			<div class="media-hint">
				This island only hydrates when the media query matches. On smaller screens the page keeps a
				simple shelf layout.
				<strong>{enabled ? ' Desktop shelf actions are available.' : ' Try resizing the window.'}</strong>
			</div>
		</div>
	);
}
