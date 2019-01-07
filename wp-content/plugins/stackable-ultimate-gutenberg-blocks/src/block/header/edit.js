import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	ButtonEdit, PanelButtonSettings, PanelBackgroundSettings, ProControl,
} from '@stackable/components'
import {
	Dashicon, IconButton, PanelBody,
} from '@wordpress/components'
import {
	PanelColorSettings, InspectorControls, BlockControls, AlignmentToolbar, RichText, URLInput,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'

const edit = props => {
	const {
		className,
		setAttributes,
		isSelected,
	} = props

	const {
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		buttonDesign,
		buttonIcon,
		cornerButtonRadius,
		size,
		title,
		titleColor,
		subtitle,
		subtitleColor,
		contentAlign,
		backgroundColor,
		backgroundImageID,
		backgroundImageURL,
		backgroundOpacity,
		fixedBackground,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-header',
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		'ugb-has-background': backgroundColor || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
	} )

	const mainStyle = {
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		backgroundImage: backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		backgroundAttachment: fixedBackground ? 'fixed' : undefined,
		'--ugb-background-color': backgroundImageURL ? backgroundColor : undefined,
		textAlign: contentAlign ? contentAlign : undefined,
	}

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ newAlign => setAttributes( { contentAlign: newAlign } ) }
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
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: titleColor,
							onChange: colorValue => setAttributes( { titleColor: colorValue } ),
							label: __( 'Title Color' ),
						},
						{
							value: subtitleColor,
							onChange: colorValue => setAttributes( { subtitleColor: colorValue } ),
							label: __( 'Subtitle Color' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelBackgroundSettings
					initialOpen={ true }
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
					buttonSize={ size }
					buttonBorderRadius={ cornerButtonRadius }
					buttonDesign={ buttonDesign }
					buttonIcon={ buttonIcon }
					onChangeButtonColor={ value => setAttributes( { buttonColor: value } ) }
					onChangeButtonTextColor={ value => setAttributes( { buttonTextColor: value } ) }
					onChangeButtonSize={ value => {
						setAttributes( { size: value } )
					} }
					onChangeButtonBorderRadius={ value => setAttributes( { cornerButtonRadius: value } ) }
					onChangeButtonDesign={ buttonDesign => setAttributes( { buttonDesign } ) }
					onChangeButtonIcon={ buttonIcon => setAttributes( { buttonIcon } ) }
				/>
			</InspectorControls>
			<div className={ mainClasses } style={ mainStyle }>
				<div className="ugb-header-wrapper">
					<RichText
						tagName="h2"
						className="ugb-header-title"
						placeholder={ title.default }
						value={ title }
						onChange={ value => setAttributes( { title: value } ) }
						style={ {
							textAlign: contentAlign,
							color: titleColor,
						} }
					/>
					<RichText
						tagName="p"
						className="ugb-header-subtitle"
						placeholder={ subtitle.default }
						value={ subtitle }
						onChange={ value => setAttributes( { subtitle: value } ) }
						style={ {
							textAlign: contentAlign,
							color: subtitleColor,
						} }
					/>
					<ButtonEdit
						size={ size }
						align={ contentAlign }
						color={ buttonTextColor }
						backgroundColor={ buttonColor }
						text={ buttonText }
						borderRadius={ cornerButtonRadius }
						design={ buttonDesign }
						icon={ buttonIcon }
						onChange={ text => setAttributes( { buttonText: text } ) }
					/>
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
						onChange={ value => setAttributes( { buttonURL: value } ) }
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
