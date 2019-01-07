import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	PanelColorSettings, InspectorControls, RichText,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'

const edit = props => {
	const {
		isSelected, setAttributes, className,
	} = props

	const {
		color, text, quoteColor,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-pullquote',
	] )

	return (
		<Fragment>
			<blockquote
				className={ mainClasses }
				style={ { '--quote-color': quoteColor } }>
				<RichText
					tagName="p"
					className="ugb-pullquote-text"
					value={ text }
					onChange={ nextValue => setAttributes( { text: nextValue } ) }
					placeholder={ __( 'Write quote…' ) }
					formattingControls={ [ 'bold', 'italic', 'strikethrough', 'link' ] }
					isSelected={ isSelected }
					keepPlaceholderOnFocus
					style={ {
						color: color,
					} }
				/>
			</blockquote>
			<InspectorControls>
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
			</InspectorControls>
		</Fragment>
	)
}

export default edit
