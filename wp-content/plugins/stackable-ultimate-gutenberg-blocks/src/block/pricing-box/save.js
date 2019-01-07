import classnames from 'classnames'
import { ButtonEdit } from '@stackable/components'
import { RichText } from '@wordpress/editor'

const save = props => {
	const { className } = props
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
		columns = 2,
		size,
		cornerButtonRadius,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-pricing-box',
		`column-${ columns }`,
	] )

	return (
		<div className={ mainClasses }>
			<div className={ 'ugb-pricing-box-column-one' }>
				{ ! RichText.isEmpty( pricingBoxTitle ) && (
					<RichText.Content
						tagName="h3"
						style={ { color: pricingBoxColor } }
						value={ pricingBoxTitle }
					/>
				) }
				{ ! RichText.isEmpty( price ) && (
					<RichText.Content
						tagName="p"
						className="ugb-pricing-box-pricing"
						style={ { color: priceColor } }
						value={ price }
					/>
				) }
				{ ! RichText.isEmpty( perMonthLabel ) && (
					<RichText.Content
						tagName="p"
						className="ugb-pricing-box-per-month-label"
						style={ { color: perMonthLabelColor } }
						value={ perMonthLabel }
					/>
				) }
				{ buttonText && !! buttonText.length && (
					<ButtonEdit.Content
						size={ size }
						url={ url }
						color={ buttonTextColor }
						text={ buttonText }
						design={ buttonDesign }
						icon={ buttonIcon }
						backgroundColor={ buttonColor }
						borderRadius={ cornerButtonRadius }
					/>
				) }
				{ ! RichText.isEmpty( featureList ) && (
					<RichText.Content
						tagName="p"
						className="ugb-pricing-box-feature-list"
						style={ { color: featureListColor } }
						value={ featureList }
					/>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'ugb-pricing-box-column-two' }>
					{ ! RichText.isEmpty( pricingBoxTitle2 ) && (
						<RichText.Content
							tagName="h3"
							style={ { color: pricingBoxColor } }
							value={ pricingBoxTitle2 }
						/>
					) }
					{ ! RichText.isEmpty( price2 ) && (
						<RichText.Content
							tagName="p"
							className="ugb-pricing-box-pricing"
							style={ { color: priceColor } }
							value={ price2 }
						/>
					) }
					{ ! RichText.isEmpty( perMonthLabel2 ) && (
						<RichText.Content
							tagName="p"
							className="ugb-pricing-box-per-month-label"
							style={ { color: perMonthLabelColor } }
							value={ perMonthLabel2 }
						/>
					) }
					{ buttonText2 && !! buttonText2.length && (
						<ButtonEdit.Content
							size={ size }
							url={ url2 }
							color={ buttonTextColor }
							text={ buttonText2 }
							design={ buttonDesign }
							icon={ buttonIcon }
							backgroundColor={ buttonColor }
							borderRadius={ cornerButtonRadius }
						/>
					) }
					{ ! RichText.isEmpty( featureList2 ) && (
						<RichText.Content
							tagName="p"
							className="ugb-pricing-box-feature-list"
							style={ { color: featureListColor } }
							value={ featureList2 }
						/>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'ugb-pricing-box-column-three' }>
					{ ! RichText.isEmpty( pricingBoxTitle3 ) && (
						<RichText.Content
							tagName="h3"
							style={ { color: pricingBoxColor } }
							value={ pricingBoxTitle3 }
						/>
					) }
					{ ! RichText.isEmpty( price3 ) && (
						<RichText.Content
							tagName="p"
							className="ugb-pricing-box-pricing"
							style={ { color: priceColor } }
							value={ price3 }
						/>
					) }
					{ ! RichText.isEmpty( perMonthLabel3 ) && (
						<RichText.Content
							tagName="p"
							className="ugb-pricing-box-per-month-label"
							style={ { color: perMonthLabelColor } }
							value={ perMonthLabel3 }
						/>
					) }
					{ buttonText3 && !! buttonText3.length && (
						<ButtonEdit.Content
							size={ size }
							url={ url3 }
							color={ buttonTextColor }
							text={ buttonText3 }
							design={ buttonDesign }
							icon={ buttonIcon }
							backgroundColor={ buttonColor }
							borderRadius={ cornerButtonRadius }
						/>
					) }
					{ ! RichText.isEmpty( featureList3 ) && (
						<RichText.Content
							tagName="p"
							className="ugb-pricing-box-feature-list"
							style={ { color: featureListColor } }
							value={ featureList3 }
						/>
					) }
				</div>
			) }
		</div>
	)
}

export default save
