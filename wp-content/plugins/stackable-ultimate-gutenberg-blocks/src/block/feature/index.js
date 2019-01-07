/**
 * BLOCK: Feature Block.
 */

import { __ } from '@wordpress/i18n'
import { FeatureIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	textColor: {
		type: 'string',
	},
	invert: {
		type: 'boolean',
		default: false,
	},
	contentAlign: {
		type: 'string',
		default: 'left',
	},
	imageSize: {
		type: 'number',
		default: 400,
	},
	imageID: {
		type: 'number',
	},
	imageUrl: {
		type: 'url',
	},
	title: {
		source: 'html',
		selector: 'h2',
		default: __( 'Feature Title' ),
	},
	description: {
		source: 'html',
		selector: 'p',
		default: __( 'Some feature description for an awesome feature' ),
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
		default: __( 'Learn More' ),
	},
	buttonColor: {
		type: 'string',
	},
	buttonTextColor: {
		type: 'string',
	},
	buttonSize: {
		type: 'string',
		default: 'normal',
	},
	buttonBorderRadius: {
		type: 'number',
		default: 4,
	},
	buttonDesign: {
		type: 'string',
		default: 'basic',
	},
	buttonIcon: {
		type: 'string',
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
}

export const name = 'ugb/feature'

export const settings = {
	title: __( 'Feature' ),
	description: __( 'Display a product feature or a service in a large area.' ),
	icon: FeatureIcon,
	category: 'stackable',
	keywords: [
		__( 'Feature' ),
		__( 'Stackable' ),
	],
	supports: {
		align: [ 'center', 'wide', 'full' ],
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},
	attributes: schema,

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/feature-block/',
}
