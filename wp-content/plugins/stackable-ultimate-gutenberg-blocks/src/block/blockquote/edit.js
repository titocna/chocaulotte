import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { ProControl, PanelBackgroundSettings } from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, RichText,
} from '@wordpress/editor'
import { PanelBody } from '@wordpress/components'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'

const edit = props => {
	const {
		isSelected, setAttributes, className,
	} = props

	const {
		color, text, quoteColor,
		backgroundColor, backgroundImageID, backgroundImageURL, backgroundOpacity, fixedBackground,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-blockquote',
		'ugb-has-background-opacity-' + ( 1 * Math.round( backgroundOpacity / 1 ) ),
	], {
		'ugb-has-background': backgroundColor || backgroundImageURL,
		'ugb-has-background-image': backgroundImageURL,
	} )

	const mainStyle = {
		'--quote-color': quoteColor ? quoteColor : undefined,
		backgroundColor: backgroundColor ? backgroundColor : undefined,
		backgroundImage: backgroundImageURL ? `url(${ backgroundImageURL })` : undefined,
		backgroundAttachment: fixedBackground ? 'fixed' : undefined,
		'--ugb-background-color': backgroundImageURL ? backgroundColor : undefined,
	}

	return (
		<Fragment>
			<blockquote
				className={ mainClasses }
				style={ mainStyle }>
				<RichText
					className="ugb-blockquote-text"
					value={ text }
					onChange={ nextValue => setAttributes( { text: nextValue } ) }
					isSelected={ isSelected }
					style={ {
						color: color,
					} }
				/>
			</blockquote>
			<InspectorControls>
				{ showProNotice &&
					<PanelBody initialOpen={ false } title={ __( 'Design' ) }>
						<ProControl />
					</PanelBody>
				}
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: color,
							onChange: colorValue => setAttributes( { color: colorValue } ),
							label: __( 'Text Color' ),
						},
						{
							value: quoteColor,
							onChange: colorValue => setAttributes( { quoteColor: colorValue } ),
							label: __( 'Quote Color' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelBackgroundSettings
					backgroundColor={ backgroundColor }
					backgroundImageID={ backgroundImageID }
					backgroundImageURL={ backgroundImageURL }
					backgroundOpacity={ backgroundOpacity }
					fixedBackground={ fixedBackground }
					onChangeBackgroundColor={ value => setAttributes( { backgroundColor: value } ) }
					onChangeBackgroundImage={ ( { url, id } ) => setAttributes( { backgroundImageURL: url, backgroundImageID: id } ) }
					onRemoveBackgroundImage={ () => {
						setAttributes( { backgroundImageURL: '', backgroundImageID: 0 } )
					} }
					onChangeBackgroundOpacity={ value => setAttributes( { backgroundOpacity: value } ) }
					onChangeFixedBackground={ value => setAttributes( { fixedBackground: !! value } ) }
				/>
			</InspectorControls>
		</Fragment>
	)
}

export default edit
