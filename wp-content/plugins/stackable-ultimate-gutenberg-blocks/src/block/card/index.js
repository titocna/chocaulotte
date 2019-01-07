/**
 * BLOCK: Card Block.
 */

import { __ } from '@wordpress/i18n'
import { TeamMemberIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

const schema = {
	mediaID: {
		type: 'number',
	},
	mediaURL: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-card-image-container',
		attribute: 'data-src',
	},
	heading: {
		source: 'html',
		selector: '.ugb-card h4',
		default: __( 'Ben Adams' ),
	},
	tagline: {
		source: 'html',
		selector: '.ugb-tagline',
		default: __( 'Ben is the head of our small team' ),
	},
	des: {
		source: 'html',
		selector: '.ugb-card-des',
		default: __( 'Ben is the head of our small team. He loves walking his dog, Walter, when he has some free time.' ),
	},
	headingColor: {
		type: 'string',
	},
	taglineColor: {
		type: 'string',
	},
	desColor: {
		type: 'string',
	},
	buttonURL: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-button',
		attribute: 'href',
	},
	buttonText: {
		source: 'html',
		selector: '.ugb-button span',
		default: __( 'Button' ),
	},
	buttonColor: {
		type: 'string',
	},
	buttonIcon: {
		type: 'string',
	},
	buttonTextColor: {
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
	buttonDesign: {
		type: 'string',
		default: 'basic',
	},
	contentAlign: {
		type: 'string',
		default: 'left',
	},
	// Design related attributes.
	design: {
		type: 'string',
		default: 'basic',
	},
	backgroundColor: {
		type: 'string',
		default: '#ffffff',
	},
	borderRadius: {
		type: 'number',
		default: 12,
	},
	shadow: {
		type: 'number',
		default: 3,
	},
}

export const name = 'ugb/card'

export const settings = {
	title: __( 'Card' ),
	description: __( 'Describe a single subject in a small card. You can use this to describe your product, service or a person.' ),
	icon: TeamMemberIcon,
	category: 'stackable',
	keywords: [
		__( 'Card' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/card-block/',
}
