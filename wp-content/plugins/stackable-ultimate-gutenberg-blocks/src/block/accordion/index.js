/**
 * BLOCK: Accordion Block.
 */

import { __ } from '@wordpress/i18n'
import { AccordionIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const ArrowIcon = props => {
	return (
		<svg role="img" focusable="false" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" { ...props }>
			<polygon points="16.7,3.3 10,10 3.3,3.4 0,6.7 10,16.7 10,16.6 20,6.7 " />
		</svg>
	)
}

export const schema = {
	heading: {
		source: 'html',
		selector: '.ugb-accordion__heading h4',
		default: __( 'Accordion Title' ),
	},
	text: {
		source: 'html',
		selector: '.ugb-accordion__text',
		default: __( 'Get Stackable: Ultimate Gutenberg Blocks today.  Apart from adding new blocks, it gives Gutenberg users more options and settings to tinker with, expanding Gutenberg’s functionality.' ),
	},
	headingColor: {
		type: 'string',
	},
	headingBackgroundColor: {
		type: 'string',
	},
	openStart: {
		type: 'boolean',
		default: false,
	},
}

export const name = 'ugb/accordion'

export const settings = {
	title: __( 'Accordion' ),
	description: __( 'A title that your visitors can toggle to view more text. Use as FAQs or multiple ones for an Accordion.' ),
	icon: AccordionIcon,
	category: 'stackable',
	keywords: [
		__( 'Accordion' ),
		__( 'Toggle' ),
		__( 'Stackable' ),
	],
	attributes: schema,

	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/accordion-block/',
}
