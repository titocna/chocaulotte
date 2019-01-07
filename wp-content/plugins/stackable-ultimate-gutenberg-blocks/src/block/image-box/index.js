/**
 * BLOCK: Image Box Block.
 */

import { __ } from '@wordpress/i18n'
import { PictureIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	columns: {
		type: 'number',
		default: 3,
	},
	titleColor: {
		type: 'string',
		default: '#ffffff',
	},
	subtitleColor: {
		type: 'string',
		default: '#ffffff',
	},
	overlayColor: {
		type: 'string',
	},
	width: {
		type: 'number',
		default: 400,
	},
	height: {
		type: 'number',
		default: 400,
	},
	verticalAlign: {
		type: 'string',
		default: 'center',
	},
	horizontalAlign: {
		type: 'string',
		default: 'center',
	},

	// Keep the old attributes. Gutenberg issue https://github.com/WordPress/gutenberg/issues/10406
	full: {
		type: 'boolean',
		default: false,
	},
	title: {
		source: 'html',
		selector: 'h4',
		default: __( 'Title' ),
	},
	subtitle: {
		source: 'html',
		selector: 'p',
		default: __( 'Subtitle goes here' ),
	},
	id: {
		type: 'number',
	},
	url: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-image-box',
		attribute: 'data-url',
	},
	href: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
}

// Wrap in curly or else statement will merge with the previous one and will error out.
{ [ 1, 2, 3, 4 ].forEach( i => {
	schema[ `title${ i }` ] = {
		source: 'html',
		selector: `.ugb-image-box-wrapper > *:nth-child(${ i }) h4`,
		default: __( 'Title' ),
	}
	schema[ `description${ i }` ] = {
		source: 'html',
		selector: `.ugb-image-box-wrapper > *:nth-child(${ i }) p`,
		default: __( 'Image description' ),
	}
	schema[ `imageURL${ i }` ] = {
		type: 'string',
	}
	schema[ `imageID${ i }` ] = {
		type: 'number',
	}
	schema[ `link${ i }` ] = {
		type: 'string',
		source: 'attribute',
		selector: `.ugb-image-box-wrapper > *:nth-child(${ i }) a`,
		attribute: 'href',
	}
} ) }

export const name = 'ugb/image-box'

export const settings = {
	title: __( 'Image Box' ),
	description: __( 'Display an image that shows more information when hovered on. Can be used as a fancy link to other pages.' ),
	icon: PictureIcon,
	category: 'stackable',
	keywords: [
		__( 'Image Box' ),
		__( 'Stackable' ),
	],
	supports: {
		align: [ 'center', 'wide', 'full' ],
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},
	attributes: schema,

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/image-box-block/',
}
