/**
 * BLOCK: Video Popup Block.
 */

import { __ } from '@wordpress/i18n'
import { VideoPopupIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	videoLink: {
		type: 'string',
	},
	videoID: {
		type: 'string',
		source: 'attribute',
		selector: 'div',
		attribute: 'data-video',
	},
	playButtonType: {
		type: 'string',
		default: 'normal',
	},
	backgroundColor: {
		type: 'string',
		default: '#000000',
	},
	backgroundImageID: {
		type: 'number',
	},
	backgroundImageURL: {
		type: 'string',
	},
	backgroundOpacity: {
		type: 'number',
		default: 5,
	},

	// Keep the old attributes. Gutenberg issue https://github.com/WordPress/gutenberg/issues/10406
	overlayColor: {
		type: 'string',
	},
	mediaLink: {
		type: 'string',
	},
	mediaID: {
		type: 'number',
	},
}

export const name = 'ugb/video-popup'

export const settings = {
	title: __( 'Video Popup' ),
	description: __( 'Display a large thumbnail that your users can click to play a video full-screen. Great for introductory or tutorial videos.' ),
	icon: VideoPopupIcon,
	category: 'stackable',
	keywords: [
		__( 'Video Popup' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/video-popup-block/',
}
