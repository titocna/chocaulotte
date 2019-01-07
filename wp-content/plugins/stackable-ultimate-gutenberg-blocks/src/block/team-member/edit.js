import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { ImageUploadPlaceholder, ProControl } from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, RichText,
} from '@wordpress/editor'
import {
	PanelBody, RangeControl, SelectControl,
} from '@wordpress/components'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'

const edit = props => {
	const {
		className,
		setAttributes,
		attributes,
	} = props

	const {
		columns,
		nameColor,
		posColor,
		desColor,
		shapes,
	} = props.attributes

	const shape = [
		{ value: 'square', label: __( 'Square' ) },
		{ value: 'circle', label: __( 'Circle' ) },
	]

	const mainClasses = classnames( [
		className,
		'ugb-team-member',
		`columns-${ columns }`,
		`image-${ shapes }`,
	] )

	return (
		<Fragment>
			<InspectorControls>
				{ showProNotice &&
					<PanelBody initialOpen={ false } title={ __( 'Design' ) }>
						<ProControl />
					</PanelBody>
				}
				<PanelBody title={ __( 'General Settings' ) }>
					<SelectControl
						label={ __( 'Image Shape' ) }
						value={ shapes }
						options={ shape.map( ( { value, label } ) => ( {
							value: value,
							label: label,
						} ) ) }
						onChange={ newShape => {
							setAttributes( { shapes: newShape } )
						} }
					/>
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ columns => setAttributes( { columns } ) }
						min={ 1 }
						max={ 3 }
					/>
				</PanelBody>
				<PanelColorSettings
					initialOpen={ true }
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: nameColor,
							onChange: colorValue => setAttributes( { nameColor: colorValue } ),
							label: __( 'Name Color' ),
						},
						{
							value: posColor,
							onChange: colorValue => setAttributes( { posColor: colorValue } ),
							label: __( 'Position Color' ),
						},
						{
							value: desColor,
							onChange: colorValue => setAttributes( { desColor: colorValue } ),
							label: __( 'Description Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
			<div className={ mainClasses }>
				{ [ 1, 2, 3 ].map( i => {
					const mediaURL = attributes[ `mediaURL${ i }` ]
					const mediaID = attributes[ `mediaID${ i }` ]
					const name = attributes[ `name${ i }` ]
					const position = attributes[ `position${ i }` ]
					const description = attributes[ `description${ i }` ]
					return (
						<div className="ugb-team-member-item" key={ i }>
							<ImageUploadPlaceholder
								className="team-member-image"
								imageID={ mediaID }
								imageURL={ mediaURL }
								onRemove={ () => {
									setAttributes( { [ `mediaURL${ i }` ]: '', [ `mediaID${ i }` ]: '' } )
								} }
								onChange={ ( { url, id } ) => {
									setAttributes( { [ `mediaURL${ i }` ]: url, [ `mediaID${ i }` ]: id } )
								} }
								hasRemove={ false }
							/>
							<RichText
								tagName="h4"
								value={ name }
								onChange={ name => setAttributes( { [ `name${ i }` ]: name } ) }
								style={ {
									color: nameColor,
								} }
								placeholder={ __( 'Team Member name' ) }
								keepPlaceholderOnFocus
							/>
							<RichText
								tagName="p"
								value={ position }
								className="ugb-team-member-position"
								onChange={ position => setAttributes( { [ `position${ i }` ]: position } ) }
								style={ {
									color: posColor,
								} }
								placeholder={ __( 'Position' ) }
								keepPlaceholderOnFocus
							/>
							<RichText
								tagName="p"
								value={ description }
								className="ugb-team-member-desc"
								onChange={ description => setAttributes( { [ `description${ i }` ]: description } ) }
								style={ {
									color: desColor,
								} }
								placeholder={ __( 'Team member description. This guy is the head of our small team. He loves walking his dog, Walter, when he has some free time.' ) }
								keepPlaceholderOnFocus
							/>
						</div>
					)
				} ) }
			</div>
		</Fragment>
	)
}

export default edit
