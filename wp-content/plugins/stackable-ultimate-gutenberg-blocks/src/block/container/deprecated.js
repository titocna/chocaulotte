import classnames from 'classnames'
import { InnerBlocks } from '@wordpress/editor'

export const deprecatedSchema_1_9_1 = {
	textColor: {
		type: 'string',
	},
	contentAlign: {
		type: 'string',
		default: '',
	},
	backgroundColor: {
		type: 'string',
		default: '#f1f1f1',
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
	height: {
		type: 'string',
		default: 'normal',
	},
	contentWidth: {
		type: 'boolean',
		default: false,
	},
	contentLocation: {
		type: 'string',
		default: 'full',
	},
	verticalAlign: {
		type: 'string',
		default: 'center',
	},
}

export const deprecatedSave_1_9_1 = props => {
	const {
		className,
	} = props

	const {
		contentAlign,
		textColor,
		backgroundColor,
		backgroundImageURL,
		backgroundOpacity,
		fixedBackground,
		height,
		contentLocation,
		verticalAlign,
		contentWidth,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-container',
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		[ `ugb-content-${ contentAlign }` ]: contentAlign,
		'ugb-has-background': ( backgroundColor && backgroundColor !== 'transparent' ) || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
		[ `ugb-height-${ height }` ]: height,
		[ `ugb-align-horizontal-${ contentLocation }` ]: contentLocation,
		[ `ugb-content-width` ]: contentWidth,
	} )

	const mainStyle = {
		'--ugb-text-color': textColor ? textColor : undefined,
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		backgroundImage: backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		backgroundAttachment: fixedBackground ? 'fixed' : undefined,
		'--ugb-background-color': backgroundImageURL ? backgroundColor : undefined,
		'justify-content': ( height === 'full' || height === 'half' ) && verticalAlign ? verticalAlign : undefined,
	}

	return (
		<div className={ mainClasses } style={ mainStyle }>
			<div className="ugb-container__wrapper">
				<div className="ugb-container__content-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	)
}

const deprecated = [
	{
		attributes: deprecatedSchema_1_9_1,
		save: deprecatedSave_1_9_1,
	},
]

export default deprecated
