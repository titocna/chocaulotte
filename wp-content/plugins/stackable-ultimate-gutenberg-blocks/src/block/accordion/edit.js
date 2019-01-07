import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { ProControl } from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, RichText,
} from '@wordpress/editor'
import { PanelBody, ToggleControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'
import { ArrowIcon } from './index'

const edit = props => {
	const {
		className,
		setAttributes,
	} = props

	const {
		headingColor,
		headingBackgroundColor,
		heading,
		text,
		openStart,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-accordion',
	], {
		'ugb-open-start': openStart,
	} )

	return (
		<Fragment>
			<InspectorControls>
				{ showProNotice &&
					<PanelBody initialOpen={ false } title={ __( 'Design' ) }>
						<ProControl />
					</PanelBody>
				}
				<PanelColorSettings
					title={ __( 'General Settings' ) }
					colorSettings={ [
						{
							value: headingColor,
							onChange: headingColor => setAttributes( { headingColor } ),
							label: __( 'Heading Color' ),
						},
						{
							value: headingBackgroundColor,
							onChange: headingBackgroundColor => setAttributes( { headingBackgroundColor } ),
							label: __( 'Heading Background Color' ),
						},
					] }
				>
					<ToggleControl
						label={ __( 'Open at the start' ) }
						checked={ openStart }
						onChange={ openStart => setAttributes( { openStart } ) }
					/>
				</PanelColorSettings>
			</InspectorControls>
			<div className={ mainClasses }>
				<div className="ugb-accordion__heading"
					style={ {
						backgroundColor: headingBackgroundColor ? headingBackgroundColor : undefined,
					} }
				>
					<RichText
						tagName="h4"
						value={ heading }
						onChange={ heading => setAttributes( { heading } ) }
						style={ {
							color: headingColor ? headingColor : undefined,
						} }
						keepPlaceholderOnFocus
					/>
					{ ArrowIcon( {
						fill: headingColor ? headingColor : undefined,
					} ) }
				</div>
				<RichText
					tagName="p"
					value={ text }
					className="ugb-accordion__text"
					onChange={ text => setAttributes( { text } ) }
					keepPlaceholderOnFocus
				/>
			</div>
		</Fragment>
	)
}

export default edit
