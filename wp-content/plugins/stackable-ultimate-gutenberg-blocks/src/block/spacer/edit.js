import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { InspectorControls } from '@wordpress/editor'
import { PanelBody, RangeControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'

const edit = props => {
	const { className } = props
	const { height } = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-spacer',
	] )

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Height' ) }
						value={ height }
						min="30"
						max="200"
						onChange={ height => {
							props.setAttributes( { height } )
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ mainClasses } style={ { height: height + 'px' } }></div>
		</Fragment>
	)
}

export default edit
