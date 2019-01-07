import { __ } from '@wordpress/i18n'
import { svgRenderToString } from '@stackable/util'

import {
	ArrowIcon,
	CheckIcon,
	PlusIcon,
	StarIcon,
	CrossIcon,
	ArrowCircleIcon,
	ArrowOutlineIcon,
	CheckCircleIcon,
	CheckOutlineIcon,
	PlusCircleIcon,
	PlusOutlineIcon,
	StarCircleIcon,
	StarOutlineIcon,
	CrossCircleIcon,
	CrossOutlineIcon,
} from './icons'

/**
 * The list of available icons for the Icon List block.
 */
const BLOCK_ICONS = {
	check: {
		iconFunc: CheckIcon,
		circleFunc: CheckCircleIcon,
		outlineFunc: CheckOutlineIcon,
		title: __( 'Check' ),
		value: 'check',
	},
	plus: {
		iconFunc: PlusIcon,
		circleFunc: PlusCircleIcon,
		outlineFunc: PlusOutlineIcon,
		title: __( 'Plus' ),
		value: 'plus',
	},
	arrow: {
		iconFunc: ArrowIcon,
		circleFunc: ArrowCircleIcon,
		outlineFunc: ArrowOutlineIcon,
		title: __( 'Arrow' ),
		value: 'arrow',
	},
	cross: {
		iconFunc: CrossIcon,
		circleFunc: CrossCircleIcon,
		outlineFunc: CrossOutlineIcon,
		title: __( 'Cross' ),
		value: 'cross',
	},
	star: {
		iconFunc: StarIcon,
		circleFunc: StarCircleIcon,
		outlineFunc: StarOutlineIcon,
		title: __( 'Star' ),
		value: 'star',
	},
}

/**
 * Gets the name of the shape function in the `BLOCK_ICONS` object.
 *
 * @param {string} iconShape The name of the shape.
 *
 * @return {string} The name of the icon function in the `BLOCK_ICONS` that can be called.
 */
const getIconShapeFunction = iconShape => {
	if ( iconShape === 'circle' || iconShape === 'outline' ) {
		return `${ iconShape }Func`
	}
	return 'iconFunc'
}

/**
 * Gets the SVG component for the given icon and shape.
 *
 * @param {string} icon The name of the icon e.g. `star`
 * @param {string} shape The shape of the icon e.g. `` or `circle`
 *
 * @return {Object} An svg component.
 */
export const getIconSVG = ( icon, shape = '' ) => {
	return BLOCK_ICONS[ icon ][ getIconShapeFunction( shape ) ]()
}

/**
 * Gets the SVG string for the given icon and shape that's based64 encoded for use inside styles.
 *
 * @param {string} icon The name of the icon e.g. `star`
 * @param {string} iconShape The shape of the icon e.g. `` or `circle`
 * @param {string} iconColor
 *
 * @return {string} A base64 encoded SVG component to be used inside style attributes.
 */
export const getIconSVGBase64 = ( icon, iconShape, iconColor ) => {
	const shapeFunc = getIconShapeFunction( iconShape )
	const iconString = svgRenderToString( BLOCK_ICONS[ icon ][ shapeFunc ]( iconColor ), false )
	return btoa( iconString )
}

/**
 * Gets a list of toolbars for picking an icon for the Icon List block.
 *
 * @param {Object} props
 *
 * @return {Array} An array of objects that can be used for the `controls` attribute of a Toolbar Component
 */
export const getIconToolbarList = props => {
	const {
		isActive = () => {},
		onChange = () => {},
	} = props

	return Object.keys( BLOCK_ICONS ).map( value => {
		return {
			...BLOCK_ICONS[ value ],
			icon: getIconSVG( value ),
			isActive: isActive( value ),
			onClick: onChange( value ),
		}
	} )
}

/**
 * Gets a list of toolbars for picking an icon shape based on the given icon.
 *
 * @param {string} icon The name of the icon to show the shapes for.
 * @param {Object} props
 *
 * @return {Array} An array of objects that can be used for the `controls` attribute of a Toolbar Component
 */
export const getIconShapeToolbarList = ( icon, props ) => {
	const {
		isActive = () => {},
		onChange = () => {},
	} = props
	return [ '', 'circle', 'outline' ].map( value => {
		return {
			...BLOCK_ICONS[ icon ],
			icon: getIconSVG( icon, value ),
			isActive: isActive( value ),
			onClick: onChange( value ),
		}
	} )
}
