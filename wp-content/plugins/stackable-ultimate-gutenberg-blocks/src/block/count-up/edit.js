import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	PanelBackgroundSettings, ProControl, DesignPanelBody,
} from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, RichText,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'
import { RangeControl, ToggleControl, SelectControl } from '@wordpress/components'
import { applyFilters } from '@wordpress/hooks'
import { showProNotice } from 'stackable'
import { getFontFamily } from './font'

const edit = props => {
	const {
		setAttributes, className, attributes,
	} = props
	const {
		columns,
		backgroundColor,
		backgroundImageID,
		backgroundImageURL,
		backgroundOpacity,
		fixedBackground,
		textColor,
		countColor,
		countSize,
		contentWidth,
		design,
		align,
		borderRadius,
		shadow,
		countFont,
		countFontWeight,
	} = attributes

	const mainClasses = classnames( [
		className,
		'ugb-countup',
		'ugb-countup-v3', // For backward compatibility.
		`columns-${ columns }`,
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		// 'ugb-has-background': backgroundColor || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
		[ `ugb-content-width` ]: align === 'full' && contentWidth,
		[ `ugb-design-${ design }` ]: design !== 'plain',
		[ `ugb-shadow-${ shadow }` ]: design !== 'plain' && shadow !== 3,
	} )

	const mainStyle = {
		backgroundColor: design !== 'plain' && backgroundColor ? backgroundColor : undefined,
		backgroundImage: design !== 'plain' && backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		backgroundAttachment: fixedBackground ? 'fixed' : undefined,
		'--ugb-background-color': design !== 'plain' && backgroundImageURL ? backgroundColor : undefined,
		borderRadius: design !== 'plain' && borderRadius !== 12 ? borderRadius : undefined,
	}

	const countStyle = {
		color: countColor ? countColor : undefined,
		fontSize: countSize ? countSize + 'px' : undefined,
		// fontFamily: countFont && countFont !== 'theme' ? getFontFamily( countFont ) : undefined,
		fontWeight: countFontWeight ? countFontWeight : undefined,
	}
	if ( countFont && countFont !== 'theme' ) {
		countStyle.fontFamily = getFontFamily( countFont )
	}

	return (
		<Fragment>
			<div className={ mainClasses } style={ mainStyle }>
				<div className="ugb-content-wrapper">
					{ [ 1, 2, 3, 4 ].map( i => {
						const title = attributes[ `title${ i }` ]
						const description = attributes[ `description${ i }` ]
						const countText = attributes[ `countText${ i }` ]
						return (
							<div className="ugb-countup-item" key={ i }>
								<RichText
									tagName="h4"
									value={ title }
									placeholder={ __( 'Stat Title' ) }
									onChange={ value => setAttributes( { [ `title${ i }` ]: value } ) }
									style={ { color: textColor ? textColor : undefined } }
									keepPlaceholderOnFocus
								/>
								<RichText
									tagName="div"
									className="ugb-counter"
									placeholder="1,234"
									data-duration="1000"
									data-delay="16"
									value={ countText }
									onChange={ value => setAttributes( { [ `countText${ i }` ]: value } ) }
									style={ countStyle }
									keepPlaceholderOnFocus
								/>
								<RichText
									tagName="p"
									className="ugb-counter-des"
									placeholder={ __( 'Stat Description' ) }
									value={ description }
									onChange={ value => setAttributes( { [ `description${ i }` ]: value } ) }
									style={ { color: textColor ? textColor : undefined } }
									keepPlaceholderOnFocus
								/>
							</div>
						)
					} ) }
				</div>
			</div>
			<InspectorControls>
				<DesignPanelBody
					selected={ design }
					options={ applyFilters( 'stackable.count-up.edit.designs', [
						{
							label: __( 'Basic' ), value: 'basic', image: 'block/count-up/images/basic.png',
						},
						{
							label: __( 'Plain' ), value: 'plain', image: 'block/count-up/images/plain.png',
						},
					] ) }
					onChange={ design => setAttributes( { design } ) }
				>
					{ applyFilters( 'stackable.count-up.edit.designs.before', null, props ) }
					{ design !== 'plain' &&
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
					{ applyFilters( 'stackable.count-up.edit.designs.after', null, props ) }
					{ showProNotice && <ProControl size="small" /> }
				</DesignPanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: textColor,
							onChange: textColor => setAttributes( { textColor } ),
							label: __( 'Heading & Description Color' ),
						},
						{
							value: countColor,
							onChange: countColor => setAttributes( { countColor } ),
							label: __( 'Counter Color' ),
						},
					] }
				>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ columns => setAttributes( { columns } ) }
						min={ 1 }
						max={ 4 }
					/>
					<RangeControl
						label={ __( 'Counter Text Size' ) }
						max="100"
						min="10"
						value={ countSize }
						onChange={ countSize => setAttributes( { countSize } ) }
					/>
					<SelectControl
						label={ __( 'Counter Font' ) }
						options={ [
							{ label: __( 'Theme default' ), value: 'theme' },
							{ label: __( 'Sans-Serif' ), value: 'sans-serif' },
							{ label: __( 'Serif' ), value: 'serif' },
							{ label: __( 'Monospace' ), value: 'monospace' },
						] }
						value={ countFont }
						onChange={ countFont => setAttributes( { countFont } ) }
					/>
					<SelectControl
						label={ __( 'Counter Font Weight' ) }
						options={ [
							{ label: __( 'Light' ), value: '100' },
							{ label: __( 'Regular' ), value: '400' },
							{ label: __( 'Bold' ), value: '600' },
							{ label: __( 'Bolder' ), value: '800' },
						] }
						value={ countFontWeight }
						onChange={ countFontWeight => setAttributes( { countFontWeight } ) }
					/>
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
			</InspectorControls>
		</Fragment>
	)
}

export default edit
