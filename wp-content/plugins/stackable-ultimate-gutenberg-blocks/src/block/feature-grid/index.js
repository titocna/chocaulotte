/**
 * BLOCK: Feature Grid Block.
 */

import { __ } from '@wordpress/i18n'
import { FeatureGridIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	design: {
		type: 'string',
		default: 'basic',
	},
	columns: {
		type: 'number',
		default: 3,
	},
	imageSize: {
		type: 'number',
		default: 100,
	},
	imageID1: {
		type: 'number',
	},
	imageID2: {
		type: 'number',
	},
	imageID3: {
		type: 'number',
	},
	imageUrl1: {
		type: 'url',
	},
	imageUrl2: {
		type: 'url',
	},
	imageUrl3: {
		type: 'url',
	},
	title1: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(1) h5',
		default: __( 'Feature 1' ),
	},
	title2: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(2) h5',
		default: __( 'Feature 2' ),
	},
	title3: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(3) h5',
		default: __( 'Feature 3' ),
	},
	description1: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(1) .ugb-fg-description',
		default: __( 'Some feature description for an awesome feature' ),
	},
	description2: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(2) .ugb-fg-description',
		default: __( 'Some feature description for an awesome feature' ),
	},
	description3: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(3) .ugb-fg-description',
		default: __( 'Some feature description for an awesome feature' ),
	},
	linkUrl1: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-feature-grid > *:nth-child(1) .ugb-fg-link',
		attribute: 'href',
	},
	linkUrl2: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-feature-grid > *:nth-child(2) .ugb-fg-link',
		attribute: 'href',
	},
	linkUrl3: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-feature-grid > *:nth-child(3) .ugb-fg-link',
		attribute: 'href',
	},
	linkText1: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(1) .ugb-fg-link',
		default: __( 'View More' ),
	},
	linkText2: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(2) .ugb-fg-link',
		default: __( 'View More' ),
	},
	linkText3: {
		source: 'html',
		selector: '.ugb-feature-grid > *:nth-child(3) .ugb-fg-link',
		default: __( 'View More' ),
	},
}

export const name = 'ugb/feature-grid'

export const settings = {
	title: __( 'Feature Grid' ),
	description: __( 'Display multiple product features or services. You can use Feature Grids one after another.' ),
	icon: FeatureGridIcon,
	category: 'stackable',
	keywords: [
		__( 'Feature Grid' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/feature-grid-block/',
}
