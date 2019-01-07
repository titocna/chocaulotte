import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	ButtonEdit, PanelButtonSettings, PanelBackgroundSettings, ImageUploadPlaceholder, ProControl,
} from '@stackable/components'
import {
	IconButton, Dashicon, PanelBody, RangeControl, ToggleControl,
} from '@wordpress/components'
import {
	PanelColorSettings, InspectorControls, BlockControls, RichText, URLInput, AlignmentToolbar,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'

const edit = props => {
	const {
		isSelected,
		className,
		setAttributes,
	} = props

	const {
		invert,
		contentAlign,
		textColor,
		imageSize,
		imageID,
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
		backgroundImageID,
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
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ contentAlign => setAttributes( { contentAlign } ) }
				/>
			</BlockControls>
			<InspectorControls>
				{ showProNotice &&
					<PanelBody initialOpen={ false } title={ __( 'Design' ) }>
						<ProControl />
					</PanelBody>
				}
				<PanelColorSettings
					initialOpen={ true }
					title={ __( 'General Settings' ) }
					colorSettings={ [
						{
							value: textColor,
							onChange: textColor => setAttributes( { textColor } ),
							label: __( 'Text Color' ),
						},
					] }
				>
					<ToggleControl
						label={ __( 'Reverse Horizontally' ) }
						checked={ invert }
						onChange={ () => setAttributes( { invert: ! invert } ) }
					/>
					<RangeControl
						label={ __( 'Image Size' ) }
						value={ imageSize }
						onChange={ imageSize => setAttributes( { imageSize } ) }
						help={ __( 'The theme\'s content width may have an effect here.' ) }
						min={ 100 }
						max={ 600 }
					/>
				</PanelColorSettings>
				<PanelBackgroundSettings
					backgroundColor={ backgroundColor }
					backgroundImageID={ backgroundImageID }
					backgroundImageURL={ backgroundImageURL }
					backgroundOpacity={ backgroundOpacity }
					fixedBackground={ fixedBackground }
					onChangeBackgroundColor={ backgroundColor => setAttributes( { backgroundColor } ) }
					onChangeBackgroundImage={ ( { url, id } ) => setAttributes( { backgroundImageURL: url, backgroundImageID: id } ) }
					onRemoveBackgroundImage={ () => {
						setAttributes( { backgroundImageURL: '', backgroundImageID: 0 } )
					} }
					onChangeBackgroundOpacity={ backgroundOpacity => setAttributes( { backgroundOpacity } ) }
					onChangeFixedBackground={ value => setAttributes( { fixedBackground: !! value } ) }
				/>
				<PanelButtonSettings
					initialOpen={ false }
					buttonColor={ buttonColor }
					buttonTextColor={ buttonTextColor }
					buttonSize={ buttonSize }
					buttonBorderRadius={ buttonBorderRadius }
					buttonDesign={ buttonDesign }
					buttonIcon={ buttonIcon }
					onChangeButtonColor={ value => setAttributes( { buttonColor: value } ) }
					onChangeButtonTextColor={ value => setAttributes( { buttonTextColor: value } ) }
					onChangeButtonSize={ value => {
						setAttributes( { buttonSize: value } )
					} }
					onChangeButtonBorderRadius={ value => setAttributes( { buttonBorderRadius: value } ) }
					onChangeButtonDesign={ buttonDesign => setAttributes( { buttonDesign } ) }
					onChangeButtonIcon={ buttonIcon => setAttributes( { buttonIcon } ) }
				/>
			</InspectorControls>
			<div className={ mainClasses } style={ mainStyle }>
				<div className="ugb-feature-wrapper">
					<div>
						<RichText
							tagName="h2"
							value={ title }
							onChange={ title => setAttributes( { title } ) }
							placeholder={ __( 'Feature Title' ) }
							style={ { color: textColor } }
							keepPlaceholderOnFocus
						/>
						<RichText
							tagName="p"
							value={ description }
							onChange={ description => setAttributes( { description } ) }
							placeholder={ __( 'Some feature description for an awesome feature' ) }
							style={ { color: textColor } }
							keepPlaceholderOnFocus
						/>
						<ButtonEdit
							size={ buttonSize }
							align={ contentAlign }
							color={ buttonTextColor }
							backgroundColor={ buttonColor }
							text={ buttonText }
							borderRadius={ buttonBorderRadius }
							design={ buttonDesign }
							icon={ buttonIcon }
							onChange={ buttonText => setAttributes( { buttonText } ) }
						/>
					</div>
					<div className="ugb-feature-image-side">
						<ImageUploadPlaceholder
							imageID={ imageID }
							imageURL={ imageUrl }
							onRemove={ () => {
								setAttributes( { imageUrl: '', imageID: '' } )
							} }
							onChange={ ( { url, id } ) => {
								setAttributes( { imageUrl: url, imageID: id } )
							} }
							render={ <img src={ imageUrl } alt={ __( 'feature' ) } /> }
						/>
					</div>
				</div>
			</div>
			{ isSelected && (
				<form
					key={ 'form-link' }
					onSubmit={ event => event.preventDefault() }
					className={ `blocks-button__inline-link ugb-button-${ contentAlign }` }
				>
					<Dashicon icon={ 'admin-links' } />
					<URLInput
						value={ buttonURL }
						onChange={ buttonURL => setAttributes( { buttonURL } ) }
					/>
					<IconButton
						icon={ 'editor-break' }
						label={ __( 'Apply' ) }
						type={ 'submit' }
					/>
				</form>
			) }
		</Fragment>
	)
}

export default edit
