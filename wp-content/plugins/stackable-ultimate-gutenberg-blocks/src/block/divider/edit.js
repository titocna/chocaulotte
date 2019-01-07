import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { ProControl } from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, BlockControls, AlignmentToolbar,
} from '@wordpress/editor'
import { RangeControl, PanelBody } from '@wordpress/components'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'

const edit = props => {
	const { className } = props
	const {
		height, width, color, alignment,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-divider',
	] )

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ function( alignment ) {
						props.setAttributes( { alignment: alignment } )
					} }
				/>
			</BlockControls>
			<InspectorControls>
				{ showProNotice &&
					<PanelBody initialOpen={ false } title={ __( 'Design' ) }>
						<ProControl />
					</PanelBody>
				}
				<PanelBody>
					<RangeControl
						label={ __( 'Height' ) }
						value={ height }
						min="1"
						max="10"
						onChange={ function( height ) {
							props.setAttributes( { height: height } )
						} }
					/>
					<RangeControl
						label={ __( 'Width' ) }
						value={ width }
						min="10"
						max="100"
						step="0.1"
						onChange={ function( width ) {
							props.setAttributes( { width: width } )
						} }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: color,
							onChange: colorValue => props.setAttributes( { color: colorValue } ),
							label: __( 'Divider Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
			<div className={ mainClasses } style={ { paddingTop: 8, paddingBottom: 8 } }>
				<hr align={ alignment } style={ {
					marginTop: 0, marginBottom: 0, backgroundColor: color, width: width + '%', height: height,
				} } />
			</div>
		</Fragment>
	)
}

export default edit
