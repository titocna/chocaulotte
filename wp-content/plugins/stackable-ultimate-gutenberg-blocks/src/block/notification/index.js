/**
 * BLOCK: Notification
 */

import { __ } from '@wordpress/i18n'
import { NotificationIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	text: {
		source: 'html',
		selector: 'p',
		default: __( 'This is an informational alert, usually used for successful subscriptions, promo announcements, and the like.' ),
	},
	color: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	notifType: {
		type: 'string',
		default: 'success',
	},
	dismissible: {
		type: 'boolean',
		default: false,
	},
}

export const name = 'ugb/notification'

export const settings = {
	title: __( 'Notification' ),
	description: __( 'Show a notice to your readers. People can dismiss the notice to permanently hide it.' ),
	icon: NotificationIcon,
	category: 'stackable',
	keywords: [
		__( 'Notification' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/notification-block/',
}
