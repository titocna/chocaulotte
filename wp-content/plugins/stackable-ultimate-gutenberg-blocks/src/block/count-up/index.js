/**
 * BLOCK: Count Up
 */

import { __ } from '@wordpress/i18n'
import { NumberBoxIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'
import { placeholderText } from '@stackable/util'

export const schema = {
	columns: {
		type: 'number',
		default: 4,
	},
	backgroundColor: {
		type: 'string',
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
	fixedBackground: {
		type: 'boolean',
		default: false,
	},
	title1: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(1) h4',
		default: __( 'Stat Title' ),
	},
	title2: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(2) h4',
		default: __( 'Stat Title' ),
	},
	title3: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(3) h4',
		default: __( 'Stat Title' ),
	},
	title4: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(4) h4',
		default: __( 'Stat Title' ),
	},
	countText1: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(1) .ugb-counter',
		default: '$99.99',
	},
	countText2: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(2) .ugb-counter',
		default: '1,234',
	},
	countText3: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(3) .ugb-counter',
		default: '1,234.56',
	},
	countText4: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(4) .ugb-counter',
		default: '£99.99',
	},
	description1: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(1) p',
		default: placeholderText( 'short' ),
	},
	description2: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(2) p',
		default: placeholderText( 'short' ),
	},
	description3: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(3) p',
		default: placeholderText( 'short' ),
	},
	description4: {
		source: 'html',
		selector: '.ugb-countup-item:nth-child(4) p',
		default: placeholderText( 'short' ),
	},
	textColor: {
		type: 'string',
	},
	countColor: {
		type: 'string',
	},
	countSize: {
		type: 'number',
		default: 40,
	},
	countFont: {
		type: 'string',
		default: 'theme',
	},
	countFontWeight: {
		type: 'string',
		default: '400',
	},
	contentWidth: {
		type: 'boolean',
		default: false,
	},
	design: {
		type: 'string',
		default: 'plain',
	},
	borderRadius: {
		type: 'number',
		default: 12,
	},
	shadow: {
		type: 'number',
		default: 3,
	},

	// Keep the old attributes. Gutenberg issue https://github.com/WordPress/gutenberg/issues/10406
	title: {
		source: 'html',
		selector: 'h4',
		default: __( 'Happy Customers' ),
	},
	counter: {
		source: 'html',
		selector: '.ugb-counter',
		default: '12,345',
	},
	des: {
		source: 'html',
		selector: 'p',
		default: __( 'and counting' ),
	},
	fontSize: {
		type: 'number',
		default: 60,
	},
	headingColor: {
		type: 'string',
	},
	desColor: {
		type: 'string',
	},
	color: {
		type: 'string',
	},
}

export const name = 'ugb/count-up'

export const settings = {
	title: __( 'Count Up' ),
	description: __( 'Showcase your stats. Display how many customers you have or the number of downloads of your app.' ),
	icon: NumberBoxIcon,
	category: 'stackable',
	keywords: [
		__( 'Statistics' ),
		__( 'Count Up' ),
		__( 'Stackable' ),
	],
	attributes: schema,

	supports: {
		align: [ 'center', 'wide', 'full' ],
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/count-up-block/',
}
