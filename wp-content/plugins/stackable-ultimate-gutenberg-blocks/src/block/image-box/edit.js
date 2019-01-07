import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	VerticalAlignmentToolbar, ImageUploadPlaceholder, ProControl,
} from '@stackable/components'
import {
	Dashicon, IconButton, PanelBody, RangeControl,
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
		attributes,
	} = props

	const {
		titleColor,
		subtitleColor,
		overlayColor,
		height,
		width,
		verticalAlign,
		horizontalAlign,
		align,
		columns,
	} = attributes

	const mainClasses = classnames( [
		className,
		'ugb-image-box-wrapper',
		'ugb-image-box-v2',
		`columns-${ columns }`,
	] )

	const mainStyles = {
		textAlign: horizontalAlign ? horizontalAlign : undefined,
		'--overlay-color': overlayColor,
	}

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ horizontalAlign }
					onChange={ horizontalAlign => setAttributes( { horizontalAlign } ) }
				/>
				<VerticalAlignmentToolbar
					value={ verticalAlign }
					onChange={ verticalAlign => setAttributes( { verticalAlign } ) }
				/>
			</BlockControls>
			<InspectorControls>
				{ showProNotice &&
					<PanelBody initialOpen={ false } title={ __( 'Design' ) }>
						<ProControl />
					</PanelBody>
				}
				<PanelBody title={ __( 'General Settings' ) }>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ columns => setAttributes( { columns } ) }
						min={ 1 }
						max={ 4 }
					/>
					<RangeControl
						label={ __( 'Height' ) }
						value={ height }
						min="135"
						max="700"
						onChange={ height => setAttributes( { height: height } ) }
					/>
					{ ( align !== 'wide' && align !== 'full' && columns === 1 ) && (
						<RangeControl
							label={ __( 'Width' ) }
							value={ width }
							min="400"
							max="999"
							help={ __( 'Only available for single column & if centered' ) }
							onChange={ width => setAttributes( { width: width } ) }
						/>
					) }
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: overlayColor,
							onChange: colorValue => setAttributes( { overlayColor: colorValue } ),
							label: __( 'Overlay Color' ),
						},
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
			</InspectorControls>
			<div className={ mainClasses } style={ mainStyles }>
				{ [ 1, 2, 3, 4 ].map( i => {
					const imageURL = attributes[ `imageURL${ i }` ]
					const imageID = attributes[ `imageID${ i }` ]
					const title = attributes[ `title${ i }` ]
					const description = attributes[ `description${ i }` ]
					const link = attributes[ `link${ i }` ]
					const boxStyles = {
						backgroundImage: imageURL ? `url(${ imageURL })` : undefined,
						maxWidth: align !== 'wide' && align !== 'full' && columns === 1 ? width : undefined,
						height: height,
						textAlign: horizontalAlign,
						justifyContent: verticalAlign,
					}
					return (
						<div className="ugb-image-box-editor-wrapper" key={ i }>
							<div className="ugb-image-box" style={ boxStyles }>
								<ImageUploadPlaceholder
									imageID={ imageID }
									imageURL={ imageURL }
									onRemove={ () => {
										setAttributes( { [ `imageURL${ i }` ]: '', [ `imageID${ i }` ]: '' } )
									} }
									onChange={ ( { url, id } ) => {
										setAttributes( { [ `imageURL${ i }` ]: url, [ `imageID${ i }` ]: id } )
									} }
									render={ null }
								/>
								{ imageURL && (
									<a href={ link } /> // eslint-disable-line
								) }
								{ imageURL && (
									<RichText
										tagName="h4"
										placeholder={ __( 'Image Title' ) }
										value={ title }
										onChange={ title => setAttributes( { [ `title${ i }` ]: title } ) }
										style={ {
											color: titleColor,
										} }
										keepPlaceholderOnFocus
									/>
								) }
								{ imageURL && (
									<RichText
										tagName="p"
										placeholder={ __( 'Image description' ) }
										value={ description }
										onChange={ description => setAttributes( { [ `description${ i }` ]: description } ) }
										style={ {
											color: subtitleColor,
										} }
										keepPlaceholderOnFocus
									/>
								) }
							</div>
							{ isSelected && (
								<form
									className="blocks-button__inline-link"
									onSubmit={ event => event.preventDefault() }>
									<Dashicon icon="admin-links" />
									<URLInput
										value={ link }
										onChange={ link => {
											setAttributes( { [ `link${ i }` ]: link } )
										} }
									/>
									<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
								</form>
							) }
						</div>
					)
				} ) }
			</div>
		</Fragment>
	)
}

export default edit
