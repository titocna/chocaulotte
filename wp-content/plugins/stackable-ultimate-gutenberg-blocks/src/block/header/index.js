/**
 * BLOCK: Header Block.
 */
import { __ } from '@wordpress/i18n'
import { HeaderIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

const schema = {
	title: {
		source: 'html',
		selector: 'h2',
		default: __( 'Heading Title' ),
	},
	subtitle: {
		source: 'html',
		selector: 'p',
		default: __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue tincidunt nisit ut pretium. Duis blandit, tortor et suscipit tincidunt, dolor metus mattis neque, ac varius magna nibh ac tortor.' ),
	},
	buttonURL: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-button',
		attribute: 'href',
	},
	titleColor: {
		type: 'string',
		default: '#ffffff',
	},
	subtitleColor: {
		type: 'string',
		default: '#ffffff',
	},
	buttonText: {
		source: 'html',
		selector: '.ugb-button span',
		default: __( 'Button' ),
	},
	buttonColor: {
		type: 'string',
	},
	buttonTextColor: {
		type: 'string',
		default: '#ffffff',
	},
	buttonDesign: {
		type: 'string',
		default: 'basic',
	},
	buttonIcon: {
		type: 'string',
	},
	size: {
		type: 'string',
		default: 'normal',
	},
	cornerButtonRadius: {
		type: 'number',
		default: 4,
	},
	contentAlign: {
		type: 'string',
		default: 'center',
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
	fixedBackground: {
		type: 'boolean',
		default: false,
	},

	// Keep the old attributes. Gutenberg issue https://github.com/WordPress/gutenberg/issues/10406
	opacity: {
		type: 'number',
		default: 5,
	},
	url: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-header .ugb-header-section',
		attribute: 'data-url',
	},
	id: {
		type: 'number',
	},
}

export const name = 'ugb/header'

export const settings = {
	title: __( 'Header' ),
	description: __( 'A large header title area. Typically used at the very top of a page.' ),
	icon: HeaderIcon,
	category: 'stackable',
	keywords: [
		__( 'Header' ),
		__( 'Stackable' ),
	],
	supports: {
		align: [ 'center', 'wide', 'full' ],
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},
	attributes: schema,

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/header-block/',
}
