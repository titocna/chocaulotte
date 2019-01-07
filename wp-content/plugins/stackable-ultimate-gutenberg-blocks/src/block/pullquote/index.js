/**
 * BLOCK: Pullquote
 */

import { __ } from '@wordpress/i18n'
import { QuoteIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	text: {
		source: 'html',
		selector: 'p',
		default: __( 'It\'s okay to acknowledge that life can get complicated, but we musn\'t forget the beauty in its simplicity, too. From the multitude of stars above, to freshly mowed grass in the morning, life is simply wonderful.' ),
	},
	color: {
		type: 'string',
		default: '',
	},
	quoteColor: {
		type: 'string',
		default: '',
	},
}

export const name = 'ugb/pullquote'

export const settings = {
	title: __( 'Pullquote' ),
	description: __( 'Display a quote. This is similar to the Blockquote block, but meant to display a quote from within your current post.' ),
	icon: QuoteIcon,
	category: 'stackable',
	keywords: [
		__( 'Pullquote' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/pull-quote-block/',
}
