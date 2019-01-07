import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	PanelBody, ToggleControl, SelectControl,
} from '@wordpress/components'
import {
	PanelColorSettings, InspectorControls, RichText,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'

const edit = props => {
	const notifAlert = [
		{ value: 'success', label: __( 'Success' ) },
		{ value: 'error', label: __( 'Error' ) },
		{ value: 'warning', label: __( 'Warning' ) },
		{ value: 'info', label: __( 'Information' ) },
	]

	const {
		setAttributes,
		className,
	} = props

	const {
		text,
		color,
		textColor,
		notifType,
		dismissible,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-notification',
		`type-${ notifType }`,
		`dismissible-${ dismissible }`,
	] )

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						label={ __( 'Dismissible' ) }
						checked={ dismissible }
						onChange={ () => setAttributes( { dismissible: ! dismissible } ) }
					/>
					<SelectControl
						label={ __( 'Notification Type' ) }
						value={ notifType }
						options={ notifAlert.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ newSize => {
							setAttributes( { notifType: newSize } )
						} }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: color,
							onChange: colorValue => setAttributes( { color: colorValue } ),
							label: __( 'Background Color' ),
						},
						{
							value: textColor,
							onChange: colorValue => setAttributes( { textColor: colorValue } ),
							label: __( 'Text Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
			<div className={ mainClasses }>
				{ dismissible && (
					<span key="button" className={ 'close-button' }>
						<svg viewBox="0 0 28.3 28.3" style={ { fill: textColor } }>
							<path d="M52.4-166.2c3.2,0,3.2-5,0-5C49.2-171.2,49.2-166.2,52.4-166.2L52.4-166.2z" />
							<path d="M16.8,13.9L26.9,3.8c0.6-0.6,0.6-1.5,0-2.1s-1.5-0.6-2.1,0L14.7,11.8L4.6,1.7C4,1.1,3.1,1.1,2.5,1.7s-0.6,1.5,0,2.1l10.1,10.1L2.5,24c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4L14.7,16l10.1,10.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L16.8,13.9z" />
						</svg>
					</span>
				) }
				<RichText
					tagName="p"
					placeholder={ props.attributes.text.default }
					value={ text }
					onChange={ text => setAttributes( { text: text } ) }
					className={ `wp-ugb-notif notif-${ notifType }` }
					style={ {
						backgroundColor: color,
						color: textColor,
					} }
				/>
			</div>
		</Fragment>
	)
}

export default edit
