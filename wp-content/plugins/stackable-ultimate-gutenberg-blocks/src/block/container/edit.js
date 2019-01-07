import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	PanelBackgroundSettings, HorizontalAlignmentToolbar, VerticalAlignmentToolbar, ProControl,
} from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, BlockControls, AlignmentToolbar, InnerBlocks,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'
import {
	SelectControl, PanelBody, ToggleControl, RangeControl,
} from '@wordpress/components'
import { showProNotice } from 'stackable'

const TEMPLATE = [
	[ 'core/heading', { content: __( 'Container Title' ) } ],
	[ 'core/paragraph', { content: __( 'Some container content' ) } ],
]

const edit = props => {
	const {
		className,
		setAttributes,
	} = props

	const {
		contentAlign,
		textColor,
		backgroundColor,
		backgroundImageID,
		backgroundImageURL,
		backgroundOpacity,
		fixedBackground,
		height,
		contentLocation,
		verticalAlign,
		contentWidth,
		align,
		borderRadius,
		shadow,
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
		[ `ugb-shadow-${ shadow }` ]: shadow !== 3,
	} )

	const mainStyle = {
		'--ugb-text-color': textColor ? textColor : undefined,
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		backgroundImage: backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		backgroundAttachment: fixedBackground ? 'fixed' : undefined,
		'--ugb-background-color': backgroundImageURL ? backgroundColor : undefined,
		'justify-content': ( height === 'full' || height === 'half' ) && verticalAlign ? verticalAlign : undefined,
		borderRadius: borderRadius !== 12 ? borderRadius : undefined,
	}

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ contentAlign }
					onChange={ contentAlign => setAttributes( { contentAlign } ) }
				/>
				<HorizontalAlignmentToolbar
					value={ contentLocation }
					onChange={ contentLocation => setAttributes( { contentLocation } ) }
				/>
				{ ( height === 'full' || height === 'half' ) &&
					<VerticalAlignmentToolbar
						value={ verticalAlign }
						onChange={ verticalAlign => setAttributes( { verticalAlign } ) }
					/>
				}
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
					<SelectControl
						label={ __( 'Height' ) }
						options={ [
							{ label: __( 'Short' ), value: 'short' },
							{ label: __( 'Normal' ), value: 'normal' },
							{ label: __( 'Tall' ), value: 'tall' },
							{ label: __( 'Half-screen height' ), value: 'half' },
							{ label: __( 'Full-screen height' ), value: 'full' },
						] }
						value={ height }
						onChange={ height => {
							setAttributes( { height } )
						} }
					/>
					{ align === 'full' &&
						<ToggleControl
							label={ __( 'Restrict to Content Width' ) }
							checked={ contentWidth }
							onChange={ contentWidth => setAttributes( { contentWidth } ) }
						/>
					}
					{ align !== 'full' &&
						<RangeControl
							label={ __( 'Border Radius' ) }
							value={ borderRadius }
							onChange={ borderRadius => setAttributes( { borderRadius } ) }
							min={ 0 }
							max={ 50 }
						/>
					}
					<RangeControl
						label={ __( 'Shadow / Outline' ) }
						value={ shadow }
						onChange={ shadow => setAttributes( { shadow } ) }
						min={ 0 }
						max={ 9 }
					/>
				</PanelColorSettings>
				<PanelBackgroundSettings
					initialOpen={ true }
					backgroundColor={ backgroundColor }
					backgroundImageID={ backgroundImageID }
					backgroundImageURL={ backgroundImageURL }
					backgroundOpacity={ backgroundOpacity }
					fixedBackground={ fixedBackground }
					onChangeBackgroundColor={ backgroundColor => setAttributes( { backgroundColor: typeof backgroundColor === 'undefined' ? 'transparent' : backgroundColor } ) }
					onChangeBackgroundImage={ ( { url, id } ) => setAttributes( { backgroundImageURL: url, backgroundImageID: id } ) }
					onRemoveBackgroundImage={ () => {
						setAttributes( { backgroundImageURL: '', backgroundImageID: 0 } )
					} }
					onChangeBackgroundOpacity={ backgroundOpacity => setAttributes( { backgroundOpacity } ) }
					onChangeFixedBackground={ value => setAttributes( { fixedBackground: !! value } ) }
				/>
			</InspectorControls>
			<div className={ mainClasses } style={ mainStyle }>
				<div className="ugb-container__wrapper">
					<div className="ugb-container__content-wrapper">
						<InnerBlocks template={ TEMPLATE } />
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default edit
