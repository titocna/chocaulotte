/**
 * BLOCK: Team Member Block.
 */

import { __ } from '@wordpress/i18n'
import { TeamMemberIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

export const schema = {
	href1: {
		type: 'url',
	},
	href2: {
		type: 'url',
	},
	href3: {
		type: 'url',
	},
	mediaID1: {
		type: 'number',
	},
	mediaID2: {
		type: 'number',
	},
	mediaID3: {
		type: 'number',
	},
	mediaURL1: {
		type: 'string',
		source: 'attribute',
		selector: 'div:nth-child(1) .team-member-image',
		attribute: 'data-src',
	},
	mediaURL2: {
		type: 'string',
		source: 'attribute',
		selector: 'div:nth-child(2) .team-member-image',
		attribute: 'data-src',
	},
	mediaURL3: {
		type: 'string',
		source: 'attribute',
		selector: 'div:nth-child(3) .team-member-image',
		attribute: 'data-src',
	},
	name1: {
		source: 'html',
		selector: 'div:nth-child(1) h4',
		default: __( 'Ben Adams' ),
	},
	name2: {
		source: 'html',
		selector: 'div:nth-child(2) h4',
		default: __( 'Alex Johnson' ),
	},
	name3: {
		source: 'html',
		selector: 'div:nth-child(3) h4',
		default: __( 'Sammy Simpson' ),
	},
	position1: {
		source: 'html',
		selector: 'div:nth-child(1) .ugb-team-member-position',
		default: __( 'Founder' ),
	},
	position2: {
		source: 'html',
		selector: 'div:nth-child(2) .ugb-team-member-position',
		default: __( 'Editor' ),
	},
	position3: {
		source: 'html',
		selector: 'div:nth-child(3) .ugb-team-member-position',
		default: __( 'Programmer' ),
	},
	description1: {
		source: 'html',
		selector: 'div:nth-child(1) .ugb-team-member-desc',
		default: __( 'Ben is the head of our small team. He loves walking his dog, Walter, when he has some free time.' ),
	},
	description2: {
		source: 'html',
		selector: 'div:nth-child(2) .ugb-team-member-desc',
		default: __( 'Alex handles all written content. She enjoys painting and playing softball on the weekends.' ),
	},
	description3: {
		source: 'html',
		selector: 'div:nth-child(3) .ugb-team-member-desc',
		default: __( 'Sammy is our programmer. You\'ll usually find her nose in a book. She has a cat named Skitty.' ),
	},
	nameColor: {
		type: 'string',
	},
	posColor: {
		type: 'string',
	},
	desColor: {
		type: 'string',
	},
	columns: {
		type: 'number',
		default: 2,
	},
	shapes: {
		type: 'string',
		default: 'circle',
	},

	// Keep the old attributes. Gutenberg issue https://github.com/WordPress/gutenberg/issues/10406
	href: {
		type: 'url',
	},
	hrefTwo: {
		type: 'url',
	},
	hrefThree: {
		type: 'url',
	},
	mediaID: {
		type: 'number',
	},
	mediaIDTwo: {
		type: 'number',
	},
	mediaIDThree: {
		type: 'number',
	},
	mediaURL: {
		type: 'string',
	},
	mediaURLTwo: {
		type: 'string',
	},
	mediaURLThree: {
		type: 'string',
	},
	name: {
		type: 'string',
	},
	nameTwo: {
		type: 'string',
	},
	nameThree: {
		type: 'string',
	},
	position: {
		type: 'string',
	},
	positionTwo: {
		type: 'string',
	},
	positionThree: {
		type: 'string',
	},
	des: {
		type: 'string',
	},
	desTwo: {
		type: 'string',
	},
	desThree: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
	},
}

export const name = 'ugb/team-member'

export const settings = {
	title: __( 'Team Member' ),
	description: __( 'Display members of your team or your office. Use multiple Team Member blocks if you have a large team.' ),
	icon: TeamMemberIcon,
	category: 'stackable',
	keywords: [
		__( 'Team Member' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/team-member-block/',
}
