import classnames from 'classnames'
import { ButtonEdit } from '@stackable/components'
import { RichText } from '@wordpress/editor'

const save = props => {
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
						<ButtonEdit.Content
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

export default save
