
import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	getIconSVGBase64,
	getIconSVG,
	getIconToolbarList,
	getIconShapeToolbarList,
} from './util'
import {
	PanelColorSettings, InspectorControls, RichText,
} from '@wordpress/editor'
import {
	PanelBody, RangeControl, Toolbar, BaseControl,
} from '@wordpress/components'
import { Fragment } from '@wordpress/element'

const edit = props => {
	const {
		className,
		setAttributes,
	} = props

	const {
		icon,
		iconShape,
		iconColor,
		iconSize,
		text,
		columns,
		gap,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-icon-list',
		`ugb-icon-${ icon }`,
		`column-${ columns }`,
	] )

	const iconSVGString = getIconSVGBase64( icon, iconShape, iconColor )
	const style = {
		'--icon': 'url(\'data:image/svg+xml;base64,' + iconSVGString + '\')',
		'--icon-size': iconSize ? `${ iconSize }px` : undefined,
		'--gap': gap ? `${ gap }px` : undefined,
	}

	function applyIcon( icon ) {
		return () => setAttributes( { icon } )
	}
	function applyIconShape( iconShape ) {
		return () => setAttributes( { iconShape } )
	}

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody>
					<BaseControl label={ __( 'Icon' ) }>
						<Toolbar
							icon={ getIconSVG( icon ) }
							controls={ getIconToolbarList( {
								onChange: value => applyIcon( value ),
								isActive: value => icon === value,
							} ) }
						/>
					</BaseControl>
					<BaseControl label={ __( 'Icon Shape' ) }>
						<Toolbar
							icon={ getIconSVG( icon, iconShape ) }
							controls={ getIconShapeToolbarList( icon, {
								onChange: value => applyIconShape( value ),
								isActive: value => iconShape === value,
							} ) }
						/>
					</BaseControl>
					<PanelColorSettings
						title={ __( 'Icon Color' ) }
						className="ugb-icon-list-color-picker"
						initialOpen={ true }
						opened={ true }
						colorSettings={ [ {
							value: iconColor,
							onChange: iconColor => setAttributes( { iconColor } ),
							label: __( 'Icon Color' ),
						} ] }
					/>
					<RangeControl
						label={ __( 'Icon Size' ) }
						value={ iconSize }
						onChange={ iconSize => setAttributes( { iconSize } ) }
						min={ 8 }
						max={ 30 }
					/>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ columns => setAttributes( { columns } ) }
						min={ 1 }
						max={ 3 }
					/>
					<RangeControl
						label={ __( 'List Gap' ) }
						value={ gap }
						onChange={ gap => setAttributes( { gap } ) }
						min={ 0 }
						max={ 30 }
					/>
				</PanelBody>
			</InspectorControls>
			<div className={ mainClasses } style={ style }>
				<RichText
					tagName="ul"
					multiline="li"
					value={ text }
					onChange={ text => setAttributes( { text } ) }
				/>
			</div>
		</Fragment>
	)
}

export default edit
