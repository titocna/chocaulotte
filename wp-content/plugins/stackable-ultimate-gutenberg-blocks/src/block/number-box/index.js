/**
 * BLOCK: Number Box Block.
 */

import { __ } from '@wordpress/i18n'
import { NumberBoxIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	numberBox: {
		source: 'html',
		selector: '.ugb-number-box-column-one span',
		default: __( '01' ),
	},
	numberBoxTwo: {
		source: 'html',
		selector: '.ugb-number-box-column-two span',
		default: __( '02' ),
	},
	numberBoxThree: {
		source: 'html',
		selector: '.ugb-number-box-column-three span',
		default: __( '03' ),
	},
	name: {
		source: 'html',
		selector: '.ugb-number-box-name',
		default: __( 'Registration' ),
	},
	nameTwo: {
		source: 'html',
		selector: '.ugb-number-box-name-two',
		default: __( 'Waiting Period' ),
	},
	nameThree: {
		source: 'html',
		selector: '.ugb-number-box-name-three',
		default: __( 'Delivery' ),
	},
	body: {
		source: 'html',
		selector: '.ugb-number-box-body',
		default: __( 'This is just a sample write-up, but you can check out more info on Gutenberg on the WP repository.' ),
	},
	bodyTwo: {
		source: 'html',
		selector: '.ugb-number-box-body-two',
		default: __( 'This is just a sample write-up, but you can check out more info on Gutenberg on the WP repository.' ),
	},
	bodyThree: {
		source: 'html',
		selector: '.ugb-number-box-body-three',
		default: __( 'This is just a sample write-up, but you can check out more info on Gutenberg on the WP repository.' ),
	},
	numberBoxColor: {
		type: 'string',
	},
	nameColor: {
		type: 'string',
	},
	bodyTextColor: {
		type: 'string',
	},
	numberBGColor: {
		type: 'string',
	},
	columns: {
		type: 'number',
		default: 3,
	},
}

export const name = 'ugb/number-box'

export const settings = {
	title: __( 'Number Box' ),
	description: __( 'Display steps or methods that your users will do in your service. For example, "Get started in just 3 easy steps: 1, 2 and 3!"' ),
	icon: NumberBoxIcon,
	category: 'stackable',
	keywords: [
		__( 'Number Box' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/number-box-block/',
}
