import classnames from 'classnames'
import { __ } from '@wordpress/i18n'
import {
	ButtonEdit, PanelButtonSettings, ProControl,
} from '@stackable/components'
import {
	PanelColorSettings, InspectorControls, RichText, URLInput,
} from '@wordpress/editor'
import {
	Dashicon, IconButton, PanelBody, RangeControl,
} from '@wordpress/components'
import { Fragment } from '@wordpress/element'
import { showProNotice } from 'stackable'

const edit = props => {
	const {
		isSelected,
		className,
		setAttributes,
	} = props

	const {
		url,
		url2,
		url3,
		pricingBoxTitle,
		pricingBoxTitle2,
		pricingBoxTitle3,
		price,
		price2,
		price3,
		perMonthLabel,
		perMonthLabel2,
		perMonthLabel3,
		buttonText,
		buttonText2,
		buttonText3,
		featureList,
		featureList2,
		featureList3,
		pricingBoxColor,
		priceColor,
		perMonthLabelColor,
		buttonColor,
		buttonTextColor,
		buttonDesign,
		buttonIcon,
		featureListColor,
		columns,
		size,
		cornerButtonRadius,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-pricing-box',
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
					initialOpen={ false }
					title={ __( 'Text Colors' ) }
					colorSettings={ [
						{
							value: pricingBoxColor,
							onChange: colorValue => setAttributes( { pricingBoxColor: colorValue } ),
							label: __( 'Pricing Title Color' ),
						},
						{
							value: priceColor,
							onChange: colorValue => setAttributes( { priceColor: colorValue } ),
							label: __( 'Price Color' ),
						},
						{
							value: perMonthLabelColor,
							onChange: colorValue => setAttributes( { perMonthLabelColor: colorValue } ),
							label: __( 'Per Month Label Color' ),
						},
						{
							value: featureListColor,
							onChange: colorValue => setAttributes( { featureListColor: colorValue } ),
							label: __( 'Feature List Color' ),
						},
					] }
				>
				</PanelColorSettings>
				<PanelButtonSettings
					initialOpen={ false }
					buttonColor={ buttonColor }
					buttonTextColor={ buttonTextColor }
					buttonSize={ size }
					buttonBorderRadius={ cornerButtonRadius }
					buttonDesign={ buttonDesign }
					buttonIcon={ buttonIcon }
					onChangeButtonColor={ value => setAttributes( { buttonColor: value } ) }
					onChangeButtonTextColor={ value => setAttributes( { buttonTextColor: value } ) }
					onChangeButtonSize={ value => {
						setAttributes( { size: value } )
					} }
					onChangeButtonBorderRadius={ value => setAttributes( { cornerButtonRadius: value } ) }
					onChangeButtonDesign={ buttonDesign => setAttributes( { buttonDesign } ) }
					onChangeButtonIcon={ buttonIcon => setAttributes( { buttonIcon } ) }
				/>
			</InspectorControls>
			<div className={ mainClasses }>
				<div className={ 'ugb-pricing-box-column-one' }>
					<RichText
						tagName={ 'h3' }
						value={ pricingBoxTitle }
						onChange={ text => setAttributes( { pricingBoxTitle: text } ) }
						style={ {
							color: pricingBoxColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ price }
						className={ 'ugb-pricing-box-pricing' }
						onChange={ text => setAttributes( { price: text } ) }
						style={ {
							color: priceColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ perMonthLabel }
						className={ 'ugb-pricing-box-per-month-label' }
						onChange={ text => setAttributes( { perMonthLabel: text } ) }
						style={ {
							color: perMonthLabelColor,
						} }
						keepPlaceholderOnFocus
					/>
					<ButtonEdit
						size={ size }
						color={ buttonTextColor }
						backgroundColor={ buttonColor }
						text={ buttonText }
						borderRadius={ cornerButtonRadius }
						design={ buttonDesign }
						icon={ buttonIcon }
						onChange={ text => setAttributes( { buttonText: text } ) }
					/>
					<RichText
						tagName={ 'p' }
						value={ featureList }
						className={ 'ugb-pricing-box-feature-list' }
						onChange={ text => setAttributes( { featureList: text } ) }
						style={ {
							color: featureListColor,
						} }
						keepPlaceholderOnFocus
					/>
					{
						isSelected && (
							<form
								onSubmit={ event => event.preventDefault() }
								className={ `blocks-button__inline-link pricing-box` }>
								<Dashicon icon={ 'admin-links' } />
								<URLInput
									value={ url }
									onChange={ value => setAttributes( { url: value } ) }
								/>
								<IconButton
									icon={ 'editor-break' }
									label={ __( 'Apply' ) }
									type={ 'submit' }
								/>
							</form>
						)
					}
				</div>
				<div className={ 'ugb-pricing-box-column-two' }>
					<RichText
						tagName={ 'h3' }
						value={ pricingBoxTitle2 }
						onChange={ text => setAttributes( { pricingBoxTitle2: text } ) }
						style={ {
							color: pricingBoxColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ price2 }
						className={ 'ugb-pricing-box-pricing' }
						onChange={ text => setAttributes( { price2: text } ) }
						style={ {
							color: priceColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ perMonthLabel2 }
						className={ 'ugb-pricing-box-per-month-label' }
						onChange={ text => setAttributes( { perMonthLabel2: text } ) }
						style={ {
							color: perMonthLabelColor,
						} }
						keepPlaceholderOnFocus
					/>
					<ButtonEdit
						size={ size }
						color={ buttonTextColor }
						backgroundColor={ buttonColor }
						text={ buttonText2 }
						borderRadius={ cornerButtonRadius }
						design={ buttonDesign }
						icon={ buttonIcon }
						onChange={ text => setAttributes( { buttonText2: text } ) }
					/>
					<RichText
						tagName={ 'p' }
						value={ featureList2 }
						className={ 'ugb-pricing-box-feature-list' }
						onChange={ text => setAttributes( { featureList2: text } ) }
						style={ {
							color: featureListColor,
						} }
						keepPlaceholderOnFocus
					/>
					{
						isSelected && (
							<form
								onSubmit={ event => event.preventDefault() }
								className={ `blocks-button__inline-link pricing-box` }>
								<Dashicon icon={ 'admin-links' } />
								<URLInput
									value={ url2 }
									onChange={ value => setAttributes( { url2: value } ) }
								/>
								<IconButton
									icon={ 'editor-break' }
									label={ __( 'Apply' ) }
									type={ 'submit' }
								/>
							</form>
						)
					}
				</div>
				<div className={ 'ugb-pricing-box-column-three' }>
					<RichText
						tagName={ 'h3' }
						value={ pricingBoxTitle3 }
						onChange={ text => setAttributes( { pricingBoxTitle3: text } ) }
						style={ {
							color: pricingBoxColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ price3 }
						className={ 'ugb-pricing-box-pricing' }
						onChange={ text => setAttributes( { price3: text } ) }
						style={ {
							color: priceColor,
						} }
						keepPlaceholderOnFocus
					/>
					<RichText
						tagName={ 'p' }
						value={ perMonthLabel3 }
						className={ 'ugb-pricing-box-per-month-label' }
						onChange={ text => setAttributes( { perMonthLabel3: text } ) }
						style={ {
							color: perMonthLabelColor,
						} }
						keepPlaceholderOnFocus
					/>
					<ButtonEdit
						size={ size }
						color={ buttonTextColor }
						backgroundColor={ buttonColor }
						text={ buttonText3 }
						borderRadius={ cornerButtonRadius }
						design={ buttonDesign }
						icon={ buttonIcon }
						onChange={ text => setAttributes( { buttonText3: text } ) }
					/>
					<RichText
						tagName={ 'p' }
						value={ featureList3 }
						className={ 'ugb-pricing-box-feature-list' }
						onChange={ text => setAttributes( { featureList3: text } ) }
						style={ {
							color: featureListColor,
						} }
						keepPlaceholderOnFocus
					/>
					{
						isSelected && (
							<form
								onSubmit={ event => event.preventDefault() }
								className={ `blocks-button__inline-link pricing-box` }>
								<Dashicon icon={ 'admin-links' } />
								<URLInput
									value={ url3 }
									onChange={ value => setAttributes( { url3: value } ) }
								/>
								<IconButton
									icon={ 'editor-break' }
									label={ __( 'Apply' ) }
									type={ 'submit' }
								/>
							</form>
						)
					}
				</div>
			</div>
		</Fragment>
	)
}

export default edit
