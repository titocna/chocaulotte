import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	ButtonEdit, PanelButtonSettings, PanelBackgroundSettings, ProControl, DesignPanelBody,
} from '@stackable/components'
import { placeholderText } from '@stackable/util'
import {
	Dashicon, IconButton, RangeControl, ToggleControl,
} from '@wordpress/components'
import {
	PanelColorSettings, InspectorControls, RichText, URLInput,
} from '@wordpress/editor'
import { applyFilters } from '@wordpress/hooks'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'

const edit = props => {
	const {
		isSelected,
		className,
		setAttributes,
	} = props

	const {
		url,
		buttonText,
		buttonDesign,
		buttonIcon,
		ctaTitle,
		bodyText,
		color,
		textColor,
		size,
		borderButtonRadius,
		bodyTextColor,
		titleColor,
		backgroundColor,
		backgroundImageID,
		backgroundImageURL,
		backgroundOpacity,
		fixedBackground,
		design,
		borderRadius,
		shadow,
		align,
		contentWidth,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-cta',
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		[ `ugb-design-${ design }` ]: design !== 'basic',
		[ `ugb-shadow-${ shadow }` ]: design !== 'plain' && shadow !== 3,
		'ugb-has-background': backgroundColor || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
		[ `ugb-content-width` ]: align === 'full' && contentWidth,
	} )

	const mainStyle = {
		backgroundColor: design !== 'plain' && backgroundColor ? backgroundColor : undefined,
		backgroundImage: design !== 'plain' && backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		backgroundAttachment: fixedBackground ? 'fixed' : undefined,
		'--ugb-background-color': design !== 'plain' && backgroundImageURL ? backgroundColor : undefined,
		borderRadius: design !== 'plain' && borderRadius !== 12 ? borderRadius : undefined,
	}

	return (
		<Fragment>
			<InspectorControls>
				<DesignPanelBody
					selected={ design }
					options={ applyFilters( 'stackable.cta.edit.designs', [
						{
							label: __( 'Basic' ), value: 'basic', image: 'block/call-to-action/images/basic.png',
						},
						{
							label: __( 'Plain' ), value: 'plain', image: 'block/call-to-action/images/plain.png',
						},
					] ) }
					onChange={ design => setAttributes( { design } ) }
				>
					{ applyFilters( 'stackable.cta.edit.designs.after', null, props ) }
					{ design !== 'plain' && align !== 'full' &&
						<RangeControl
							label={ __( 'Border Radius' ) }
							value={ borderRadius }
							onChange={ borderRadius => setAttributes( { borderRadius } ) }
							min={ 0 }
							max={ 50 }
						/>
					}
					{ design !== 'plain' &&
						<RangeControl
							label={ __( 'Shadow / Outline' ) }
							value={ shadow }
							onChange={ shadow => setAttributes( { shadow } ) }
							min={ 0 }
							max={ 9 }
						/>
					}
					{ align === 'full' &&
						<ToggleControl
							label={ __( 'Restrict to Content Width' ) }
							checked={ contentWidth }
							onChange={ contentWidth => setAttributes( { contentWidth } ) }
						/>
					}
					{ showProNotice && <ProControl size="small" /> }
				</DesignPanelBody>
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
							value: bodyTextColor,
							onChange: colorValue => setAttributes( { bodyTextColor: colorValue } ),
							label: __( 'Body Text Color' ),
						},
					] }
				>
				</PanelColorSettings>
				{ design !== 'plain' &&
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
				}
				<PanelButtonSettings
					initialOpen={ false }
					buttonColor={ color }
					buttonTextColor={ textColor }
					buttonSize={ size }
					buttonBorderRadius={ borderButtonRadius }
					buttonDesign={ buttonDesign }
					buttonIcon={ buttonIcon }
					onChangeButtonColor={ value => setAttributes( { color: value } ) }
					onChangeButtonTextColor={ value => setAttributes( { textColor: value } ) }
					onChangeButtonSize={ value => {
						setAttributes( { size: value } )
					} }
					onChangeButtonBorderRadius={ value => setAttributes( { borderButtonRadius: value } ) }
					onChangeButtonDesign={ buttonDesign => setAttributes( { buttonDesign } ) }
					onChangeButtonIcon={ buttonIcon => setAttributes( { buttonIcon } ) }
				/>
			</InspectorControls>
			<div className={ mainClasses } style={ mainStyle }>
				<div className="ugb-content-wrapper">
					<RichText
						className="ugb-cta-title"
						tagName="h3"
						placeholder={ placeholderText( 'title' ) }
						value={ ctaTitle }
						onChange={ text => setAttributes( { ctaTitle: text } ) }
						keepPlaceholderOnFocus
						style={ {
							color: titleColor,
						} }
					/>
					<RichText
						tagName="p"
						value={ bodyText }
						className="ugb-cta-bodyText"
						onChange={ text => setAttributes( { bodyText: text } ) }
						placeholder={ placeholderText() }
						keepPlaceholderOnFocus
						style={ {
							color: bodyTextColor,
						} }
					/>
					<ButtonEdit
						size={ size }
						color={ textColor }
						backgroundColor={ color }
						text={ buttonText }
						borderRadius={ borderButtonRadius }
						design={ buttonDesign }
						icon={ buttonIcon }
						onChange={ text => setAttributes( { buttonText: text } ) }
					/>
				</div>
			</div>
			{ isSelected && (
				<form
					onSubmit={ event => event.preventDefault() }
					className="blocks-button__inline-link">
					<Dashicon icon="admin-links" />
					<URLInput
						value={ url }
						onChange={ value => setAttributes( { url: value } ) }
					/>
					<IconButton
						icon="editor-break"
						label={ __( 'Apply' ) }
						type="submit"
					/>
				</form>
			) }
		</Fragment>
	)
}

export default edit
