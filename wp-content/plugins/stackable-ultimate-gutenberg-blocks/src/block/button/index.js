/**
 * BLOCK: Button Block.
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import { __ } from '@wordpress/i18n'
import { ButtonIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	buttons: {
		type: 'number',
		default: 1,
	},
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	text: {
		source: 'html',
		selector: 'a span',
		default: 'Button',
	},
	align: {
		type: 'string',
		default: 'center',
	},
	color: {
		type: 'string',
	},
	textColor: {
		type: 'string',
		default: '#ffffff',
	},
	size: {
		type: 'string',
		default: 'normal',
	},
	cornerButtonRadius: {
		type: 'number',
		default: 4,
	},
	design: {
		type: 'string',
		default: 'basic',
	},
	icon: {
		type: 'string',
	},

	url2: {
		type: 'string',
		source: 'attribute',
		selector: 'div:nth-child(2) .ugb-button',
		attribute: 'href',
	},
	text2: {
		source: 'html',
		selector: 'div:nth-child(2) .ugb-button span',
		default: 'Button',
	},
	color2: {
		type: 'string',
	},
	textColor2: {
		type: 'string',
		default: '#ffffff',
	},
	size2: {
		type: 'string',
		default: 'normal',
	},
	design2: {
		type: 'string',
		default: 'basic',
	},
	icon2: {
		type: 'string',
	},

	url3: {
		type: 'string',
		source: 'attribute',
		selector: 'div:nth-child(3) .ugb-button',
		attribute: 'href',
	},
	text3: {
		source: 'html',
		selector: 'div:nth-child(3) .ugb-button span',
		default: 'Button',
	},
	color3: {
		type: 'string',
	},
	textColor3: {
		type: 'string',
		default: '#ffffff',
	},
	size3: {
		type: 'string',
		default: 'normal',
	},
	design3: {
		type: 'string',
		default: 'basic',
	},
	icon3: {
		type: 'string',
	},
}

export const name = 'ugb/button'

export const settings = {
	title: __( 'Button' ),
	icon: ButtonIcon,
	description: __( 'Add a customizable button.' ),
	category: 'stackable',
	keywords: [
		__( 'Button' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/button-block/',
}
