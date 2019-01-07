import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	ButtonEdit, PanelButtonSettings, ImageUploadPlaceholder, ProControl, DesignPanelBody, ColorPaletteControl,
} from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, RichText, URLInput, BlockControls, AlignmentToolbar,
} from '@wordpress/editor'
import {
	IconButton, Dashicon, RangeControl,
} from '@wordpress/components'
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
		heading,
		tagline,
		des,
		mediaID,
		mediaURL,
		headingColor,
		taglineColor,
		desColor,
		buttonURL,
		buttonText,
		buttonColor,
		buttonTextColor,
		size,
		cornerButtonRadius,
		contentAlign,
		buttonDesign,
		buttonIcon,
		design,
		backgroundColor,
		borderRadius,
		shadow,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-card',
	], {
		[ `ugb-design-${ design }` ]: design !== 'basic',
		[ `ugb-shadow-${ shadow }` ]: design !== 'plain' && shadow !== 3,
	} )

	const mainStyles = {
		borderRadius: design !== 'plain' && borderRadius !== 12 ? borderRadius : undefined,
		backgroundColor: design !== 'plain' ? backgroundColor : undefined,
	}

	const imageClasses = classnames( [
		'ugb-card-image-container',
	], {
		[ `ugb-shadow-${ shadow }` ]: design === 'plain',
	} )

	const imageStyles = {
		borderRadius: design === 'plain' ? borderRadius : undefined,
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
				<DesignPanelBody
					selected={ design }
					options={ applyFilters( 'stackable.card.edit.designs', [
						{
							label: __( 'Basic' ), value: 'basic', image: 'block/card/images/basic.png',
						},
						{
							label: __( 'Plain' ), value: 'plain', image: 'block/card/images/plain.png',
						},
					] ) }
					onChange={ design => setAttributes( { design } ) }
				>
					{ applyFilters( 'stackable.card.edit.designs.before', null, props ) }
					{ ! [ 'plain', 'full' ].includes( design ) &&
						<ColorPaletteControl
							label={ __( 'Background Color' ) }
							value={ backgroundColor }
							onChange={ backgroundColor => setAttributes( { backgroundColor } ) }
						/>
					}
					<RangeControl
						label={ __( 'Border Radius' ) }
						value={ borderRadius }
						onChange={ borderRadius => setAttributes( { borderRadius } ) }
						min={ 0 }
						max={ 50 }
					/>
					<RangeControl
						label={ __( 'Shadow / Outline' ) }
						value={ shadow }
						onChange={ shadow => setAttributes( { shadow } ) }
						min={ 0 }
						max={ 9 }
					/>
					{ applyFilters( 'stackable.card.edit.designs.after', null, props ) }
					{ showProNotice && <ProControl size="small" /> }
				</DesignPanelBody>
				<PanelColorSettings
					title={ __( 'Text Colors' ) }
					colorSettings={ [
						{
							value: headingColor,
							onChange: colorValue => setAttributes( { headingColor: colorValue } ),
							label: __( 'Heading Color' ),
						},
						{
							value: taglineColor,
							onChange: colorValue => setAttributes( { taglineColor: colorValue } ),
							label: __( 'Tagline Color' ),
						},
						{
							value: desColor,
							onChange: colorValue => setAttributes( { desColor: colorValue } ),
							label: __( 'Description Color' ),
						},
					] }
				>
				</PanelColorSettings>
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
					onChangeButtonSize={ value => setAttributes( { size: value } ) }
					onChangeButtonBorderRadius={ value => setAttributes( { cornerButtonRadius: value } ) }
					onChangeButtonDesign={ buttonDesign => setAttributes( { buttonDesign } ) }
					onChangeButtonIcon={ buttonIcon => setAttributes( { buttonIcon } ) }
				/>
			</InspectorControls>
			<div className={ mainClasses } style={ mainStyles }>
				<ImageUploadPlaceholder
					className={ imageClasses }
					style={ imageStyles }
					imageID={ mediaID }
					imageURL={ mediaURL }
					onRemove={ () => setAttributes( { mediaURL: '', mediaID: '' } ) }
					onChange={ ( { url, id } ) => setAttributes( { mediaURL: url, mediaID: id } ) }
				/>
				<RichText
					tagName="h4"
					value={ heading }
					className="ugb-card-heading"
					placeholder={ __( 'Card Heading' ) }
					onChange={ text => setAttributes( { heading: text } ) }
					style={ {
						color: headingColor,
						textAlign: contentAlign,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName="p"
					value={ tagline }
					className="ugb-tagline"
					placeholder={ __( 'Put your tagline here' ) }
					onChange={ text => setAttributes( { tagline: text } ) }
					style={ {
						color: taglineColor,
						textAlign: contentAlign,
					} }
					keepPlaceholderOnFocus
				/>
				<RichText
					tagName="p"
					value={ des }
					className="ugb-card-des"
					placeholder={ __( 'Add your card description here. You can add all kinds of descriptions about your card.' ) }
					onChange={ text => setAttributes( { des: text } ) }
					style={ {
						color: desColor,
						textAlign: contentAlign,
					} }
					keepPlaceholderOnFocus
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
			{ isSelected && (
				<form
					onSubmit={ event => event.preventDefault() }
					className={ `blocks-button__inline-link ugb-button-${ contentAlign }` }
					style={ { marginTop: 10 } }
				>
					<Dashicon icon="admin-links" />
					<URLInput
						value={ buttonURL }
						onChange={ value => setAttributes( { buttonURL: value } ) }
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
