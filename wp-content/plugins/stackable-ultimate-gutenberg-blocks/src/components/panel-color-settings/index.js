/**
 * A Panel for selecting designs
 */

import { PanelBody, ColorIndicator } from '@wordpress/components'
import { sprintf, __ } from '@wordpress/i18n'
import { ColorPaletteControl } from '@stackable/components'

function PanelColorSettings( props ) {
	const {
		colorSettings, title = __( 'Color Settings' ),
	} = props

	const className = 'editor-panel-color-settings'

	return (
		<PanelBody
			className="ugb-color-panel-body"
			{ ...props }
			title={
				<span className={ `${ className }__panel-title` }>
					{ title }
					{ renderColorIndicators( colorSettings ) }
				</span>
			}
		>
			{ colorSettings.map( ( settings, index ) => (
				<ColorPaletteControl
					key={ index }
					{ ...settings }
				/>
			) ) }
			{ props.children }
		</PanelBody>
	)
}

const renderColorIndicators = colorSettings => {
	return colorSettings.map(
		( { value, label }, index ) => {
			if ( ! value ) {
				return null
			}

			const ariaLabel = sprintf( __( '(%s: %s)' ), label.toLowerCase(), value )

			return (
				<ColorIndicator
					key={ index }
					colorValue={ value }
					aria-label={ ariaLabel }
				/>
			)
		}
	)
}

export default PanelColorSettings
