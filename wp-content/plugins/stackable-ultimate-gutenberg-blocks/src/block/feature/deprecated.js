import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { RichText } from '@wordpress/editor'
import {
	DeprecatedButtonContent_1_9,
	DeprecatedButtonContent_1_4,
} from '@stackable/components/button-edit'

export const deprecatedSchema_1_9 = {
	textColor: {
		type: 'string',
	},
	invert: {
		type: 'boolean',
		default: false,
	},
	contentAlign: {
		type: 'string',
		default: 'left',
	},
	imageSize: {
		type: 'number',
		default: 400,
	},
	imageID: {
		type: 'number',
	},
	imageUrl: {
		type: 'url',
	},
	title: {
		source: 'html',
		selector: 'h2',
		default: __( 'Feature Title' ),
	},
	description: {
		source: 'html',
		selector: 'p',
		default: __( 'Some feature description for an awesome feature' ),
	},
	buttonURL: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-button-inner',
		attribute: 'href',
	},
	buttonText: {
		source: 'html',
		selector: '.ugb-button-inner',
		default: __( 'Learn More' ),
	},
	buttonColor: {
		type: 'string',
	},
	buttonTextColor: {
		type: 'string',
	},
	buttonSize: {
		type: 'string',
		default: 'normal',
	},
	buttonBorderRadius: {
		type: 'number',
		default: 4,
	},
	buttonDesign: {
		type: 'string',
		default: 'basic',
	},
	buttonIcon: {
		type: 'string',
	},
	backgroundColor: {
		type: 'string',
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
}

export const deprecatedSave_1_9 = props => {
	const {
		className,
	} = props

	const {
		invert,
		contentAlign,
		textColor,
		imageSize,
		imageUrl,
		title,
		description,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		buttonSize,
		buttonBorderRadius,
		buttonDesign,
		buttonIcon,
		backgroundColor,
		backgroundImageURL,
		backgroundOpacity,
		fixedBackground,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-feature',
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		[ `ugb-content-${ contentAlign }` ]: contentAlign,
		'ugb-invert': invert,
		'ugb-has-background': backgroundColor || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
	} )

	const mainStyle = {
		'--image-size': imageSize ? `${ imageSize }px` : undefined,
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		backgroundImage: backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		backgroundAttachment: fixedBackground ? 'fixed' : undefined,
		'--ugb-background-color': backgroundImageURL ? backgroundColor : undefined,
	}

	return (
		<div className={ mainClasses } style={ mainStyle }>
			<div className="ugb-feature-wrapper">
				<div>
					{ ! RichText.isEmpty( title ) && (
						<RichText.Content
							tagName="h2"
							style={ { color: textColor } }
							value={ title }
						/>
					) }
					{ ! RichText.isEmpty( description ) && (
						<RichText.Content
							tagName="p"
							style={ { color: textColor } }
							value={ description }
						/>
					) }
					{ ! RichText.isEmpty( buttonText ) && (
						<DeprecatedButtonContent_1_9
							size={ buttonSize }
							url={ buttonURL }
							align={ contentAlign }
							color={ buttonTextColor }
							text={ buttonText }
							icon={ buttonIcon }
							design={ buttonDesign }
							backgroundColor={ buttonColor }
							borderRadius={ buttonBorderRadius }
						/>
					) }
				</div>
				<div className="ugb-feature-image-side">
					{ imageUrl && (
						<img src={ imageUrl } alt={ title } />
					) }
				</div>
			</div>
		</div>
	)
}

export const deprecatedSchema_1_4 = {
	backgroundColor: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	invert: {
		type: 'boolean',
		default: false,
	},
	contentAlign: {
		type: 'string',
		default: 'left',
	},
	imageSize: {
		type: 'number',
		default: 400,
	},
	imageID: {
		type: 'number',
	},
	imageUrl: {
		type: 'url',
	},
	title: {
		source: 'html',
		selector: 'h2',
		default: __( 'Feature Title' ),
	},
	description: {
		source: 'html',
		selector: 'p',
		default: __( 'Some feature description for an awesome feature' ),
	},
	buttonURL: {
		type: 'string',
		source: 'attribute',
		selector: '.ugb-button-inner',
		attribute: 'href',
	},
	buttonText: {
		source: 'html',
		selector: '.ugb-button-inner',
		default: __( 'Learn More' ),
	},
	buttonColor: {
		type: 'string',
	},
	buttonTextColor: {
		type: 'string',
	},
	buttonSize: {
		type: 'string',
		default: 'normal',
	},
	buttonBorderRadius: {
		type: 'number',
		default: 4,
	},
}

export const deprecatedSave_1_4 = props => {
	const {
		className,
	} = props

	const {
		invert,
		contentAlign,
		backgroundColor,
		textColor,
		imageSize,
		imageUrl,
		title,
		description,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		buttonSize,
		buttonBorderRadius,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-feature',
	], {
		'ugb-has-background': backgroundColor,
		[ `ugb-content-${ contentAlign }` ]: contentAlign,
		'ugb-invert': invert,
	} )

	const style = {
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		'--image-size': imageSize ? `${ imageSize }px` : undefined,
	}

	return (
		<div className={ mainClasses } style={ style }>
			<div className="ugb-feature-wrapper">
				<div>
					{ ! RichText.isEmpty( title ) && (
						<RichText.Content
							tagName="h2"
							style={ { color: textColor } }
							value={ title }
						/>
					) }
					{ ! RichText.isEmpty( description ) && (
						<RichText.Content
							tagName="p"
							style={ { color: textColor } }
							value={ description }
						/>
					) }
					{ ! RichText.isEmpty( buttonText ) && (
						<DeprecatedButtonContent_1_4 size={ buttonSize } url={ buttonURL } align={ contentAlign } color={ buttonTextColor } text={ buttonText } backgroundColor={ buttonColor } borderRadius={ buttonBorderRadius } />
					) }
				</div>
				<div className="ugb-feature-image-side">
					{ imageUrl && (
						<img src={ imageUrl } alt={ title } />
					) }
				</div>
			</div>
		</div>
	)
}

const deprecated = [
	{
		attributes: deprecatedSchema_1_9,
		save: deprecatedSave_1_9,
	},
	{
		attributes: deprecatedSchema_1_4,
		save: deprecatedSave_1_4,
	},
]

export default deprecated
