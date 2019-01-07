/**
 * BLOCK: Pricing Box Block.
 */

import { __ } from '@wordpress/i18n'
import { PricingIcon } from '@stackable/icons'
import { disabledBlocks } from 'stackable'

const schema = {
	url: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-pricing-box-column-one .ugb-button',
		attribute: 'href',
	},
	url2: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-pricing-box-column-two .ugb-button',
		attribute: 'href',
	},
	url3: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-pricing-box-column-three .ugb-button',
		attribute: 'href',
	},
	pricingBoxTitle: {
		source: 'html',
		selector: '.ugb-pricing-box-column-one h3',
		default: __( 'Basic' ),
	},
	pricingBoxTitle2: {
		source: 'html',
		selector: '.ugb-pricing-box-column-two h3',
		default: __( 'Basic' ),
	},
	pricingBoxTitle3: {
		source: 'html',
		selector: '.ugb-pricing-box-column-three h3',
		default: __( 'Basic' ),
	},
	price: {
		source: 'html',
		selector: '.ugb-pricing-box-column-one .ugb-pricing-box-pricing',
		default: __( '$9' ),
	},
	price2: {
		source: 'html',
		selector: '.ugb-pricing-box-column-two .ugb-pricing-box-pricing',
		default: __( '$9' ),
	},
	price3: {
		source: 'html',
		selector: '.ugb-pricing-box-column-three .ugb-pricing-box-pricing',
		default: __( '$9' ),
	},
	perMonthLabel: {
		source: 'html',
		selector: '.ugb-pricing-box-column-one .ugb-pricing-box-per-month-label',
		default: __( 'per month' ),
	},
	perMonthLabel2: {
		source: 'html',
		selector: '.ugb-pricing-box-column-two .ugb-pricing-box-per-month-label',
		default: __( 'per month' ),
	},
	perMonthLabel3: {
		source: 'html',
		selector: '.ugb-pricing-box-column-three .ugb-pricing-box-per-month-label',
		default: __( 'per month' ),
	},
	buttonText: {
		source: 'html',
		selector: '.ugb-pricing-box-column-one .ugb-button span',
		default: __( 'Buy Now' ),
	},
	buttonText2: {
		source: 'html',
		selector: '.ugb-pricing-box-column-two .ugb-button span',
		default: __( 'Buy Now' ),
	},
	buttonText3: {
		source: 'html',
		selector: '.ugb-pricing-box-column-three .ugb-button span',
		default: __( 'Buy Now' ),
	},
	featureList: {
		source: 'html',
		selector: '.ugb-pricing-box-column-one .ugb-pricing-box-feature-list',
		default: __( 'Consectetur adipiscing elit Suspendisse at pretium tortor Vestibulum ante ipsum primis In faucibus orci luctus et Ultrices posuere cubilia cura Aenean consectetur nec' ),
	},
	featureList2: {
		source: 'html',
		selector: '.ugb-pricing-box-column-two .ugb-pricing-box-feature-list',
		default: __( 'Consectetur adipiscing elit Suspendisse at pretium tortor Vestibulum ante ipsum primis In faucibus orci luctus et Ultrices posuere cubilia cura Aenean consectetur nec' ),
	},
	featureList3: {
		source: 'html',
		selector: '.ugb-pricing-box-column-three .ugb-pricing-box-feature-list',
		default: __( 'Consectetur adipiscing elit Suspendisse at pretium tortor Vestibulum ante ipsum primis In faucibus orci luctus et Ultrices posuere cubilia cura Aenean consectetur nec' ),
	},
	pricingBoxColor: {
		type: 'string',
	},
	priceColor: {
		type: 'string',
	},
	perMonthLabelColor: {
		type: 'string',
	},
	buttonColor: {
		type: 'string',
	},
	buttonTextColor: {
		type: 'string',
	},
	buttonDesign: {
		type: 'string',
		default: 'basic',
	},
	buttonIcon: {
		type: 'string',
	},
	featureListColor: {
		type: 'string',
	},
	columns: {
		type: 'number',
		default: 2,
	},
	size: {
		type: 'string',
		default: 'normal',
	},
	cornerButtonRadius: {
		type: 'number',
		default: 4,
	},
}

export const name = 'ugb/pricing-box'

export const settings = {
	title: __( 'Pricing Box' ),
	description: __( 'Display the different pricing tiers of your business.' ),
	icon: PricingIcon,
	category: 'stackable',
	keywords: [
		__( 'Pricing Box' ),
		__( 'Stackable' ),
	],
	attributes: schema,
	supports: {
		inserter: ! disabledBlocks.includes( name ), // Hide if disabled.
	},

	// Stackable specific settings.
	sDemoURL: 'https://wpstackable.com/pricing-table-block/',
}
