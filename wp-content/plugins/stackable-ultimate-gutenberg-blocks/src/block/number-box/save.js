import classnames from 'classnames'
import { RichText } from '@wordpress/editor'

const save = props => {
	const { className } = props
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
		numberBoxColor,
		nameColor,
		bodyTextColor,
		numberBGColor,
		columns = 3,
	} = props.attributes

	const mainClasses = classnames( [
		className,
		'ugb-number-box',
		`column-${ columns }`,
	] )

	return (
		<div className={ mainClasses }>
			<div className={ 'ugb-number-box-column-one' }>
				{ ! RichText.isEmpty( numberBox ) && (
					<RichText.Content
						tagName="span"
						style={ { color: numberBoxColor, backgroundColor: numberBGColor } }
						value={ numberBox }
					/>
				) }
				{ ! RichText.isEmpty( name ) && (
					<RichText.Content
						tagName="h4"
						className="ugb-number-box-name"
						style={ { color: nameColor } }
						value={ name }
					/>
				) }
				{ ! RichText.isEmpty( body ) && (
					<RichText.Content
						tagName="p"
						className="ugb-number-box-body"
						style={ { color: bodyTextColor } }
						value={ body }
					/>
				) }
			</div>
			{ columns > 1 && (
				<div className={ 'ugb-number-box-column-two' }>
					{ ! RichText.isEmpty( numberBoxTwo ) && (
						<RichText.Content
							tagName="span"
							style={ { color: numberBoxColor, backgroundColor: numberBGColor } }
							value={ numberBoxTwo }
						/>
					) }
					{ ! RichText.isEmpty( nameTwo ) && (
						<RichText.Content
							tagName="h4"
							className="ugb-number-box-name-two"
							style={ { color: nameColor } }
							value={ nameTwo }
						/>
					) }
					{ ! RichText.isEmpty( bodyTwo ) && (
						<RichText.Content
							tagName="p"
							className="ugb-number-box-body-two"
							style={ { color: bodyTextColor } }
							value={ bodyTwo }
						/>
					) }
				</div>
			) }
			{ columns > 2 && (
				<div className={ 'ugb-number-box-column-three' }>
					{ ! RichText.isEmpty( numberBoxThree ) && (
						<RichText.Content
							tagName="span"
							style={ { color: numberBoxColor, backgroundColor: numberBGColor } }
							value={ numberBoxThree }
						/>
					) }
					{ ! RichText.isEmpty( nameThree ) && (
						<RichText.Content
							tagName="h4"
							className="ugb-number-box-name-three"
							style={ { color: nameColor } }
							value={ nameThree }
						/>
					) }
					{ ! RichText.isEmpty( bodyThree ) && (
						<RichText.Content
							tagName="p"
							className="ugb-number-box-body-three"
							style={ { color: bodyTextColor } }
							value={ bodyThree }
						/>
					) }
				</div>
			) }
		</div>
	)
}

export default save
