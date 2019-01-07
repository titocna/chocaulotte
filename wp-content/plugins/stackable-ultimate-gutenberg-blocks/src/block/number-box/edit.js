import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import { ProControl } from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, RichText,
} from '@wordpress/editor'
import { PanelBody, RangeControl } from '@wordpress/components'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'

const edit = props => {
	const {
		className,
		setAttributes,
	} = props

	const {
		numberBox,
		numberBoxTwo,
		numberBoxThree,
		body,
		bodyTwo,
		bodyThree,
		name,
		nameTwo,
		nameThree,
		columns,
		numberBoxColor,
		nameColor,
		bodyTextColor,
		numberBGColor,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-number-box',
		`column-${ columns }`,
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
					<RangeControl
						label={ __( 'Columns' ) }
						value={ columns }
						onChange={ columns => setAttributes( { columns } ) }
						min={ 1 }
						max={ 3 }
					/>
				</PanelBody>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: numberBoxColor,
							onChange: colorValue => setAttributes( { numberBoxColor: colorValue } ),
							label: __( 'Number Color' ),
						},
						{
							value: numberBGColor,
							onChange: colorValue => setAttributes( { numberBGColor: colorValue } ),
							label: __( 'Number Background Color' ),
						},
						{
							value: nameColor,
							onChange: colorValue => setAttributes( { nameColor: colorValue } ),
							label: __( 'Name Color' ),
						},
						{
							value: bodyTextColor,
							onChange: colorValue => setAttributes( { bodyTextColor: colorValue } ),
							label: __( 'Body Text Color' ),
						},
					] }
				>
				</PanelColorSettings>
			</InspectorControls>
			<div className={ mainClasses }>
				<div>
					<RichText
						tagName={ 'span' }
						placeholder={ numberBox ? numberBox.default : '' }
						value={ numberBox }
						onChange={ text => setAttributes( { numberBox: text } ) }
						style={ {
							color: numberBoxColor,
							backgroundColor: numberBGColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'h4' }
						value={ name }
						className={ 'ugb-number-box-name' }
						onChange={ text => setAttributes( { name: text } ) }
						placeholder={ __( 'Add name…' ) }
						style={ {
							color: nameColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ body }
						className={ 'ugb-number-box-body' }
						onChange={ text => setAttributes( { body: text } ) }
						placeholder={ __( 'Add body…' ) }
						style={ {
							color: bodyTextColor,
						} }
						keepPlaceholderOnFocus
					/>
				</div>
				<div>
					<RichText
						tagName={ 'span' }
						placeholder={ numberBoxTwo ? numberBoxTwo.default : '' }
						value={ numberBoxTwo }
						onChange={ text => setAttributes( { numberBoxTwo: text } ) }
						style={ {
							color: numberBoxColor,
							backgroundColor: numberBGColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'h4' }
						value={ nameTwo }
						className={ 'ugb-number-box-name-two' }
						onChange={ text => setAttributes( { nameTwo: text } ) }
						placeholder={ __( 'Add name…' ) }
						style={ {
							color: nameColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ bodyTwo }
						className={ 'ugb-number-box-body-two' }
						onChange={ text => setAttributes( { bodyTwo: text } ) }
						placeholder={ __( 'Add body…' ) }
						style={ {
							color: bodyTextColor,
						} }
						keepPlaceholderOnFocus
					/>
				</div>
				<div>
					<RichText
						tagName={ 'span' }
						placeholder={ numberBoxThree ? numberBoxThree.default : '' }
						value={ numberBoxThree }
						onChange={ text => setAttributes( { numberBoxThree: text } ) }
						style={ {
							color: numberBoxColor,
							backgroundColor: numberBGColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'h4' }
						value={ nameThree }
						className={ 'ugb-number-box-name-three' }
						onChange={ text => setAttributes( { nameThree: text } ) }
						placeholder={ __( 'Add name…' ) }
						style={ {
							color: nameColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ bodyThree }
						className={ 'ugb-number-box-body-three' }
						onChange={ text => setAttributes( { bodyThree: text } ) }
						placeholder={ __( 'Add body…' ) }
						style={ {
							color: bodyTextColor,
						} }
						keepPlaceholderOnFocus
					/>
				</div>
			</div>
		</Fragment>
	)
}

export default edit
